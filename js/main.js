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

const showRandIntegerWithDePo = (min, max, digitsADP) => {
  let rand;
  const lower = Math.ceil(Math.min(min, max));
  const upper = Math.floor(Math.max(min, max));
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
    return `img/avatars/user0${showRandInteger(1, 9)}.png`;
  }
  return 'img/avatars/user10.png';
};

const FEATURES_ARRAY_RANDOM_LENGTH = showRandInteger(1, 6);
const varFeatures = new Set('wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner');

const PHOTOS_ARRAY_RANDOM_LENGTH = showRandInteger(1, 3);
const varPhotos = new Set('https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg');


const addressIndex = `${location[lat]}, ${location[lng]}`;

const randomFeatureIndex = Array.from({length: FEATURES_ARRAY_RANDOM_LENGTH}, varFeatures);

const randomPhotosIndex = Array.from({length: PHOTOS_ARRAY_RANDOM_LENGTH}, varPhotos);

const author = {
  avatar: createAvatarIndex()
};

const offer = {
  title: 'Сдам помещение',
  address: addressIndex,
  price: showRandInteger(),
  type: showArrayRand(typeOfOffer),
  rooms: showRandInteger(),
  guests: showRandInteger(),
  checkin: showArrayRand(timeOfCheck),
  checkout: showArrayRand(timeOfCheck),
  features: randomFeatureIndex,
  description: 'Ухоженное помещение, сдается на долгий срок',
  photos: randomPhotosIndex,
};

const location = {
  lat: showRandIntegerWithDePo(35.65000, 35.70000, 5),
  lng: showRandIntegerWithDePo(139.70000, 139.80000, 5),
};

const createObject = () => {
  const authorIndex = author[avatar];
  const offerIndex = `${offer[title]}, ${offer[address]}, ${offer[price]}, ${offer[type]}, ${offer[rooms]}, ${offer[guests]}, ${offer[checkin]}, ${offer[checkout]}, ${offer[features]}, ${offer[description]}, ${offer[photos]}`;
  const locationIndex = `${location[lat]}, ${location[lng]}`;

  return {
    author: authorIndex,
    offer: offerIndex,
    location: locationIndex,
  };
};

// eslint-disable-next-line no-console
console.log(createObject());
