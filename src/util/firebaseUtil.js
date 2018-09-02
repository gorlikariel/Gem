// const testUpdate = () => {
//   const updates = {};
//   updates["/settings" + "-LKIGU8q5PK4_Htqbt1q"] = {
//     amountOfPacks: "5",
//     pillsInPack: "28"
//   };
//   return firebase
//     .database()
//     .ref()
//     .update(updates);
// };
// testUpdate();
const addZero = min => (min < 10 ? "0" + min : min);
const d = new Date();
export const HOUR_STAMP = addZero(d.getHours()) + ":" + addZero(d.getMinutes());
