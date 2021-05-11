
//encapsulation

const makeNuclearButton = () => {
  let timeWithoutDestruction = 0;
  const passTime = () => timeWithoutDestruction++;
  const totalPeaceTime = () => timeWithoutDestruction;
  const launch = () => {
    timeWithoutDestruction = -1;
    return '💥';
  }
  setInterval(passTime, 1000);
  return {
    totalPeaceTime:totalPeaceTime
  }
}

const ww3 = makeNuclearButton();
ww3.totalPeaceTime();

// So basically now with help of closures here we able to access timeWithoutDestruction
//setinterval with help of clousers able to access timeWithoutDestruction
// now we encapsulated launch method so nobody can access 