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

const typeOfOffer = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const timeOfCheck = ['12:00', '13:00', '14:00'];

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

const varFeatures = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const varPhotos = ['https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'];

const addressIndex = `${showRandIntegerWithDePo(35.65000, 35.70000, 5)}, ${ showRandIntegerWithDePo(139.70000, 139.80000, 5)}`;

for (let i = 0; i < 10; i++) {
  const createObject = () => {
    const author = {
      avatar: createAvatarIndex()
    };

    const offer = {
      title: 'Сдам помещение',
      address: addressIndex,
      price: showRandInteger(1, 100),
      type: showArrayRand(typeOfOffer),
      rooms: showRandInteger(1, 100),
      guests: showRandInteger(1, 100),
      checkin: showArrayRand(timeOfCheck),
      checkout: showArrayRand(timeOfCheck),
      features: getArray(varFeatures),
      description: 'Ухоженное помещение, сдается на долгий срок',
      photos: getArray(varPhotos),
    };

    const location = {
      lat: showRandIntegerWithDePo(35.65000, 35.70000, 5),
      lng: showRandIntegerWithDePo(139.70000, 139.80000, 5),
    };

    return {
      author,
      offer,
      location,
    };

  };
  // eslint-disable-next-line no-console
  console.log(createObject());
}
