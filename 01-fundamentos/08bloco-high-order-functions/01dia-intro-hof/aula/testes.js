const wakeUp = () => `Acordando!!`;
const getBreakfast = () => `Bora tomar café!!`;
const goToSleep = () => `Partiu dormir!!`;

const doingThings = (callback) => {
  console.log(callback());
};

doingThings(wakeUp);
doingThings(getBreakfast);
doingThings(goToSleep);
