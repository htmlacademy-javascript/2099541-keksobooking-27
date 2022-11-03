import {showRandInteger, showRandIntegerWithDePo, createAvatarIndex, showArrayRand, getArray} from './util.js';

const typeOfOffer = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const timeOfCheck = ['12:00', '13:00', '14:00'];

const varFeatures = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const varPhotos = ['https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'];

const addressIndex = `${showRandIntegerWithDePo(35.65000, 35.70000, 5)}, ${ showRandIntegerWithDePo(139.70000, 139.80000, 5)}`;

const similarObjectCount = 10;

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

const similarObject = () => Array.from({length: similarObjectCount}, createObject);

export {similarObject};
