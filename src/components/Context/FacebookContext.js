import { createContext, useContext } from 'react';

export const FacebookContext = createContext();

export function useFacebook() {
  return useContext(FacebookContext);
}
