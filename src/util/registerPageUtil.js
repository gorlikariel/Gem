export const REGISTER_STEPS = [
  { title: "What's your email?", action: "updateAccountSettings" },
  { title: "Create a Password", action: "updateAccountSettings" },
  { title: "What's your name?", action: "updateAccountSettings" },
  {
    title: "How many pills do you have in a pack?",
    action: "updatePillSettings"
  },
  { title: "How many packs do you have?", action: "updatePillSettings" },
  {
    title: "What time do you wish to be alarmed?",
    action: "updateAlarmSettings"
  },
  {
    title: "How often should the alarm go off?",
    action: "updateAlarmSettings"
  }
];
