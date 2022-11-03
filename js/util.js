const showRandInteger = (min, max) => {
  let rand;
  const lower = Math.ceil(Math.min(min, max));
  const upper = Math.floor(Math.max(min, max));
  if (min > 0 && max > 0) {
    rand = lower - 0.5 + Math.random() * (upper - lower + 1);
  }
  else {
    rand = 0 / 0;
  }
  return Math.floor(rand);
};

const showRandIntegerWithDePo = (min, max, digitsADP = 1) => {
  let rand;
  const lower = Math.min(min, max);
  const upper = Math.max(min, max);
  if (min > 0 && max > 0) {
    rand = lower - 0.5 + Math.random() * (upper - lower + 1);
  }
  else {
    rand = 0 / 0;
  }
  return +rand.toFixed(digitsADP);
};

const showArrayRand = (arr) => {
  const randText = Math.floor(Math.random() * arr.length);
  return arr[randText];
};

const createAvatarIndex = function () {
  if (showRandInteger(1, 10) < 10){
    return `img/avatars/user0${showRandInteger(2, 9)}.png`;
  }
  return 'img/avatars/user10.png';
};

const getArray = (arrayName) => {
  const maxLength = arrayName.length;
  const lengthOfArray = getRandomNumber(1, maxLength);
  const array = [];

  while (array.length < lengthOfArray) {
    const indexOfEl = getRandomNumber(0, maxLength - 1);
    const el = arrayName[indexOfEl];

    if (!array.includes(el)) {
      array.push(el);
    }
  }
  return array;

  function getRandomNumber(from, to) {
    return Math.floor(Math.random() * (to - from + 1)) + from;
  }
};

export {showRandInteger, showRandIntegerWithDePo, createAvatarIndex, showArrayRand, getArray};
