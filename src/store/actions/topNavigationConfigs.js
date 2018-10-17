import React from 'react';
export const MAIN_PAGE_TOP_NAVIGATION = {
  showLeftArrow: false,
  showSubmit: false,
  showSettingsIcon: true,
  title: ''
};
export const SISU_TOP_NAVIGATION = {
  showLeftArrow: false,
  showSubmit: false,
  showSettingsIcon: false,
  title: ''
};
export const SETTINGS_TOP_NAVIGATION = {
  showLeftArrow: true,
  showSubmit: false,
  showSettingsIcon: false,
  title: 'Settings'
};

export const ACCOUNT_SETTINGS_TOP_NAVIGATION = onSubmit => ({
  showLeftArrow: true,
  showSubmit: true,
  showSettingsIcon: false,
  title: 'Account Settings',
  onSubmit: () => onSubmit()
});

export const ALARM_SETTINGS_TOP_NAVIGATION = onSubmit => ({
  showLeftArrow: true,
  showSubmit: true,
  showSettingsIcon: false,
  title: 'Alarm Settings',
  onSubmit: () => onSubmit()
});
export const PILL_SETTINGS_TOP_NAVIGATION = onSubmit => ({
  showLeftArrow: true,
  showSubmit: true,
  showSettingsIcon: false,
  title: 'Pill Settings',
  onSubmit: () => onSubmit()
});
export const REGISTER_TOP_NAVIGATION = {
  showLeftArrow: true,
  showSubmit: false,
  showSettingsIcon: false,
  title: 'Register',
  backOnClick: () => {
    this.setState(prevState => ({
      stepNum: prevState.stepNum + -1
    }));
  }
};
export const REGISTER_TOP_NAVIGATION_INITIAL = {
  showLeftArrow: true,
  showSubmit: false,
  showSettingsIcon: false,
  title: 'Register'
};
export const LOGIN_TOP_NAVIGATION = {
  showLeftArrow: true,
  showSubmit: false,
  showSettingsIcon: false,
  title: 'Log in'
};
export const QUESTIONS_TOP_NAVIGATION = {
  showLeftArrow: false,
  showSubmit: false,
  showSettingsIcon: false,
  title: `Frequently Asked Questions`
};
