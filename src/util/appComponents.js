import asyncComponent from '../hoc/asyncComponent';

export const asyncLayout = asyncComponent(() => {
  return import('../containers/Layout/Layout');
});
export const asyncSettings = asyncComponent(() => {
  return import('../containers/Settings/Settings');
});
export const asyncAccountSettings = asyncComponent(() => {
  return import('../containers/Settings/AccountSettings/AccountSettings');
});
export const asyncAlarmSettings = asyncComponent(() => {
  return import('../containers/Settings/AlarmSettings/AlarmSettings');
});
export const asyncPillSettings = asyncComponent(() => {
  return import('../containers/Settings/PillSettings/PillSettings');
});
export const asyncMainPage = asyncComponent(() => {
  return import('../containers/MainPage/MainPage');
});
export const asyncSisuMain = asyncComponent(() => {
  return import('../containers/Sisu/SisuMain');
});
export const asyncRegister = asyncComponent(() => {
  return import('../containers/Sisu/Register');
});
export const asyncLogin = asyncComponent(() => {
  return import('../containers/Sisu/Login');
});
export const asyncTopNavigation = asyncComponent(() => {
  return import('../components/TopNavigation/TopNavigation');
});
export const asyncBottomNavbar = asyncComponent(() => {
  return import('../components/BottomNavbar/BottomNavbar');
});
export const asyncIntroduction = asyncComponent(() => {
  return import('../containers/Introduction/Introduction');
});
export const asyncToast = asyncComponent(() => {
  return import('../components/Toast/Toast');
});
