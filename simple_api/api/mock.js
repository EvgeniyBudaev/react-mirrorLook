const Module = require('module')
const fs = require('fs')

Module._extensions['.jpg'] = function (module, fn) {
  const base64 = fs.readFileSync(fn).toString('base64')
  module._compile('module.exports="data:image/jpg;base64,' + base64 + '"', fn)
}

const venetianMirror1 = require('../../src/assets/images/content/venetianMirrors-1.jpg')
const venetianMirror2 = require('../../src/assets/images/content/venetianMirrors-2.jpg')
const venetianMirror3 = require('../../src/assets/images/content/venetianMirrors-3.jpg')
const venetianMirror4 = require('../../src/assets/images/content/venetianMirrors-4.jpg')
const venetianMirror5 = require('../../src/assets/images/content/venetianMirrors-5.jpg')
const venetianMirror6 = require('../../src/assets/images/content/venetianMirrors-6.jpg')
const venetianMirror7 = require('../../src/assets/images/content/venetianMirrors-7.jpg')
const venetianMirror8 = require('../../src/assets/images/content/venetianMirrors-8.jpg')
const venetianMirror9 = require('../../src/assets/images/content/venetianMirrors-9.jpg')
const venetianMirror10 = require('../../src/assets/images/content/venetianMirrors-10.jpg')
const venetianMirror11 = require('../../src/assets/images/content/venetianMirrors-11.jpg')
const venetianMirror12 = require('../../src/assets/images/content/venetianMirrors-12.jpg')
const floorMirror1 = require('../../src/assets/images/content/productFloor-1.jpg')
const floorMirror2 = require('../../src/assets/images/content/productFloor-2.jpg')

const normalizedCategories = [
  {
    id: 'ed24fdeb-84c4-4cc5-9518-e768e1e35cb6',
    name: 'Венецианские зеркала',
    urlName: 'venetian-mirrors',
    products: [
      '87ef588c-c539-45f8-b3bd-bc3b6f63cd20',
      'ba64fb8a-d5e3-4cca-8c19-c1424e8c9a47',
      '95160a8e-e0e2-4ff5-b733-b0ff147aaa1b',
      '6c20adae-9a1d-4467-9975-8dd2519ac6c2',
      'c3aaedd5-38a1-4a4b-a074-db0b6d07998e',
      'd1d46fb4-73bf-401d-be33-43df120ade18',
      'e59fe9e6-0988-4782-8972-ad354e949835',
      'ee34be14-2cf5-4931-92f4-b59190abbf9c',
      'c611a50d-ed29-429a-8a2a-0efff719b56d',
      'ebb5faee-ff76-402a-8b3c-50db7036b1b2',
      'e040622f-5e23-44bc-befb-1690792f68c7',
      '99441a99-e8c0-4052-9cae-b3cba226cfd8',
    ],
  },
  {
    id: 'cde28e4f-9a85-45a4-8509-cc2b60843775',
    name: 'Напольные зеркала',
    urlName: 'floor-mirrors',
    products: [
      '2149ef1c-990f-4940-91d6-aa26a0c0277e',
      '9918a242-1bf5-4a4c-b167-9dfb6c5910f8',
    ],
  },
]

const normalizedProducts = [
  {
    id: '87ef588c-c539-45f8-b3bd-bc3b6f63cd20',
    name: 'Зеркало в металлической раме Kitech (Китех)',
    price: 25000,
    images: venetianMirror1,
  },
  {
    id: 'ba64fb8a-d5e3-4cca-8c19-c1424e8c9a47',
    name: 'Зеркало в металлической раме Hi-Tech (Хайтэк)',
    price: 27500,
    images: venetianMirror2,
  },
  {
    id: '95160a8e-e0e2-4ff5-b733-b0ff147aaa1b',
    name: 'Зеркало в металлической раме Sequoia (Секвойя)',
    price: 35000,
    images: venetianMirror3,
  },
  {
    id: '6c20adae-9a1d-4467-9975-8dd2519ac6c2',
    name: 'Зеркало-солнце в металлической раме Splash (Сплэш)',
    price: 25000,
    images: venetianMirror4,
  },
  {
    id: 'c3aaedd5-38a1-4a4b-a074-db0b6d07998e',
    name: 'Зеркало в металлической раме Abstract (Абстракт))',
    price: 25000,
    images: venetianMirror5,
  },
  {
    id: 'd1d46fb4-73bf-401d-be33-43df120ade18',
    name: 'Зеркало в металлической раме Bavaro (Баваро)',
    price: 25000,
    images: venetianMirror6,
  },
  {
    id: 'e59fe9e6-0988-4782-8972-ad354e949835',
    name: 'Зеркало-солнце в металлической раме Helios (Гелиос)',
    price: 25000,
    images: venetianMirror7,
  },
  {
    id: 'ee34be14-2cf5-4931-92f4-b59190abbf9c',
    name: 'Зеркало-солнце в металлической раме Cassiopeia (Кассиопея)',
    price: 25000,
    images: venetianMirror8,
  },
  {
    id: 'c611a50d-ed29-429a-8a2a-0efff719b56d',
    name: 'Зеркало-солнце в металлической раме Bang Brass (Бэнг)',
    price: 25000,
    images: venetianMirror9,
  },
  {
    id: 'ebb5faee-ff76-402a-8b3c-50db7036b1b2',
    name: 'Зеркало-солнце в металлической раме Bang Nickel (Бэнг)',
    price: 25000,
    images: venetianMirror10,
  },
  {
    id: 'e040622f-5e23-44bc-befb-1690792f68c7',
    name: 'Зеркало-солнце в металлической раме Crochet (Кроше)',
    price: 25000,
    images: venetianMirror11,
  },
  {
    id: '99441a99-e8c0-4052-9cae-b3cba226cfd8',
    name: 'Зеркало-солнце в металлической раме Raindrops (Рейндропс)',
    price: 25000,
    images: venetianMirror12,
  },
  {
    id: '2149ef1c-990f-4940-91d6-aa26a0c0277e',
    name: 'Зеркало в полный рост Line (Лайн)',
    price: 25000,
    images: floorMirror1,
  },
  {
    id: '9918a242-1bf5-4a4c-b167-9dfb6c5910f8',
    name: 'Зеркало в полный рост Franco Mid (Франко)',
    price: 35000,
    images: floorMirror2,
  },
]

module.exports = {
  products: normalizedProducts,
  categories: normalizedCategories,
}
