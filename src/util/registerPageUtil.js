export const REGISTER_STEPS = [
  { title: "What's your email?", action: 'updateAccountSettings', id: 'email' },
  {
    title: 'Create a Password',
    action: 'updateAccountSettings',
    id: 'password'
  },
  { title: "What's your name?", action: 'updateAccountSettings', id: 'name' },
  {
    title: 'How many pills do you have in a pack?',
    action: 'updatePillSettings',
    id: 'pillsInPack'
  },
  {
    title: 'How many packs do you have?',
    action: 'updatePillSettings',
    id: 'amountOfPacks'
  },
  {
    title: 'What time do you wish to be alarmed?',
    action: 'updateAlarmSettings',
    id: 'pillHour'
  },
  {
    title: 'How often should the alarm go off?',
    action: 'updateAlarmSettings',
    id: 'snoozeEvery '
  }
];
export const MAP_FIELDS = {
  email: 0,
  password: 1,
  name: 2,
  pillsInPack: 3,
  amountOfPacks: 4,
  pillHour: 5,
  snoozeEvery: 6
};

export const formatUserObject = valuesArray => ({
  dailyPill: {
    taken: false,
    lasttimetaken: 'never'
  },
  notifications: { token: 'notSetYet' },
  settings: {
    account: {
      email: valuesArray[MAP_FIELDS.email],
      name: valuesArray[MAP_FIELDS.name],
      username: valuesArray[MAP_FIELDS.name]
    },
    alarm: {
      pillhour: valuesArray[MAP_FIELDS.pillHour],
      snoozeevery: valuesArray[MAP_FIELDS.snoozeEvery]
    },
    pill: {
      amountofpacks: valuesArray[MAP_FIELDS.amountOfPacks],
      notifywhenpillsrunout: true,
      pillsinpack: valuesArray[MAP_FIELDS.pillsInPack]
    }
  }
});
