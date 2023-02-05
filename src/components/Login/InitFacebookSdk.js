import { useEffect, useState } from 'react';
import { useRouteMatch, Redirect } from 'react-router-dom';
import FacebookLogin from '@greatsumini/react-facebook-login';

function InitFacebookSdk() {
  const [authResponse, setResponse] = useState();

  useEffect(() => {
    // SDK 載入完成時會立即呼叫 fbAsyncInit，在這個函式中對 Facebook SDK 進行初始化
    window.fbAsyncInit = function () {
      // 初始化 Facebook SDK
      window.FB.init({
        appId: process.env.REACT_APP_FB_APP_ID,
        cookie: true,
        xfbml: true,
        version: process.env.REACT_APP_FB_APP_VERSION,
      });

      console.log('[fbAsyncInit] after window.FB.init');
      window.FB.AppEvents.logPageView();
    };

    // 取得使用者登入狀態
    window.FB.getLoginStatus(function (response) {
      console.log('[refreshLoginStatus]', response);
      setResponse(response);
    });

    window.FB.AppEvents.logPageView();

    // 載入 Facebook SDK
    (function (d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {
        return;
      }
      js = d.createElement(s);
      js.id = id;
      js.src = 'https://connect.facebook.net/en_US/sdk.js';
      fjs.parentNode.insertBefore(js, fjs);
    })(document, 'script', 'facebook-jssdk');

    window.FB.api('/me', 'GET', { fields: 'name,email' }, function (response) {
      // response 會包含 name 和 id
    });
  }, []);

  const isAtLogin = useRouteMatch('/login');

  // 使用者點擊登入
  const handleFBLogin = () => {
    // if (!isFBInitialized) {
    //   return;
    // }
    // 跳出 Facebook 登入的對話框
    window.FB.login(
      function (response) {
        console.log('handleFBLogin', response);
        setResponse(response);
        if (!response) {
          return <></>;
        }
      },
      { scope: 'public_profile,email' }
    );
  };

  // 使用者登出
  const handleFBLogout = () => {
    window.FB.logout(function (response) {
      console.log('handleFBLogout', response);
      setResponse(response);
      if (response.status !== 'connected' && !isAtLogin) {
        return <Redirect to="/login" />;
      }
    });
  };

  return (
    <div>
      <button onClick={handleFBLogin}>Facebook Login</button>
    </div>
  );
}

export default InitFacebookSdk;
