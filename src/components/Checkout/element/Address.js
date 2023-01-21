import React, { useState } from 'react';

import '../Checkout.scss';

function Address() {
  return (
    <>
      {/* 運送地址表單 */}
      <div className="form-floating">
        <select className="form-select">
          <option value="1">台灣 (Ming Tony)</option>
          <option value="2">使用新的地址</option>
        </select>
        <label>已儲存的地址</label>
      </div>
      <div className="form-floating">
        <select className="form-select">
          <option value="1">台灣</option>
          <option value="2">中國</option>
        </select>
        <label>國家/地區</label>
      </div>
      <div className="col-md-6">
        <input type="text" className="form-control" placeholder="名字" />
      </div>
      <div className="col-md-6">
        <input type="text" className="form-control" placeholder="姓氏" />
      </div>
      <div className="col-12">
        <input type="text" className="form-control" placeholder="公司(選填)" />
      </div>
      <div className="col-12">
        <input type="text" className="form-control" placeholder="地址" />
      </div>
      <div className="col-md-6">
        <input type="text" className="form-control" placeholder="市" />
      </div>
      <div className="col-md-6">
        <input type="text" className="form-control" placeholder="郵遞區號" />
      </div>
      <div className="col-md-12">
        <input type="text" className="form-control" placeholder="電話" />
      </div>
    </>
  );
}

export default Address;
