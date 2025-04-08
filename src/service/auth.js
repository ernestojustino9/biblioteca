import Cookies from 'js-cookie';
export const TOKEN_KEY = 'bldmin@token';
export const USER_KEY = 'bldmin@user';
export const isAuthenticated = () => Cookies.get(TOKEN_KEY) != null;
export const getToken = () => Cookies.get(TOKEN_KEY);
export const login = (token) => {
  Cookies.set(TOKEN_KEY, token);
};
export const logout = () => {
  Cookies.remove(TOKEN_KEY);
};