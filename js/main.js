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

showRandInteger(1, 4);

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

showRandIntegerWithDePo(1, 4, 2);

const FEATURES_ARRAY_RANDOM_LENGTH = showRandInteger(1, 6);;
const varFeatures = new Set(['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner']);

const PHOTOS_ARRAY_RANDOM_LENGTH = showRandInteger(1, 3);;
const varPhotos = new Set(['https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg']);

const author = [
  avatar: `img/avatars/user${showRandInteger(1, 10); < 10 ? `0` + showRandInteger(1, 9); : 10;}.png`
];

const offer = [
  title: 'Сдам квартиру!',
  address: `${location.lat}` `${location.lng}`,
  price: showRandInteger();,
  type: 'flat',
  rooms: showRandInteger();,
  guests: showRandInteger();,
  checkin: '12:00',
  checkout: '14:00',
  features: Array.from({length: FEATURES_ARRAY_RANDOM_LENGTH}, varFeatures);,
  description: 'Ухоженная кваратира, сдается на долгий срок',
  photos: Array.from({length: PHOTOS_ARRAY_RANDOM_LENGTH}, varPhotos);
];

const location = [
  lat: showRandIntegerWithDePo(35.65000, 35.70000, 5);,
  lng: showRandIntegerWithDePo(139.70000, 139.80000, 5);
];
