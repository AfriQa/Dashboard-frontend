import { v4 as uuid } from 'uuid';

export default [
  {
    id: uuid(),
    address: {
      country: 'USA',
      state: 'West Virginia',
      city: 'Parkersburg',
      street: '2849 Fulton Street'
    },
    avatarUrl: '/static/images/avatars/avatar_3.png',
    createdAt: 1555016400000,
    email: 'ekaterina.tankova@devias.io',
    name: 'Ekaterina Tankova',
    phone: '304-428-3097'
  },
  {
    id: uuid(),
    address: {
      country: 'USA',
      state: 'Bristow',
      city: 'Iowa',
      street: '1865  Pleasant Hill Road'
    },
    avatarUrl: '/static/images/avatars/avatar_4.png',
    createdAt: 1555016400000,
    email: 'cao.yu@devias.io',
    name: 'Cao Yu',
    phone: '712-351-5711'
  },
  {
    id: uuid(),
    address: {
      country: 'USA',
      state: 'Georgia',
      city: 'Atlanta',
      street: '4894  Lakeland Park Drive'
    },
    avatarUrl: '/static/images/avatars/avatar_2.png',
    createdAt: 1555016400000,
    email: 'alexa.richardson@devias.io',
    name: 'Alexa Richardson',
    phone: '770-635-2682'
  },
  {
    id: uuid(),
    address: {
      country: 'USA',
      state: 'Ohio',
      city: 'Dover',
      street: '4158  Hedge Street'
    },
    avatarUrl: '/static/images/avatars/avatar_5.png',
    createdAt: 1554930000000,
    email: 'anje.keizer@devias.io',
    name: 'Anje Keizer',
    phone: '908-691-3242'
  },
  {
    id: uuid(),
    address: {
      country: 'USA',
      state: 'Texas',
      city: 'Dallas',
      street: '75247'
    },
    avatarUrl: '/static/images/avatars/avatar_6.png',
    createdAt: 1554757200000,
    email: 'clarke.gillebert@devias.io',
    name: 'Clarke Gillebert',
    phone: '972-333-4106'
  },
  {
    id: uuid(),
    address: {
      country: 'USA',
      state: 'California',
      city: 'Bakerfield',
      street: '317 Angus Road'
    },
    avatarUrl: '/static/images/avatars/avatar_1.png',
    createdAt: 1554670800000,
    email: 'adam.denisov@devias.io',
    name: 'Adam Denisov',
    phone: '858-602-3409'
  },
  {
    id: uuid(),
    address: {
      country: 'USA',
      state: 'California',
      city: 'Redondo Beach',
      street: '2188  Armbrester Drive'
    },
    avatarUrl: '/static/images/avatars/avatar_7.png',
    createdAt: 1554325200000,
    email: 'ava.gregoraci@devias.io',
    name: 'Ava Gregoraci',
    phone: '415-907-2647'
  },
  {
    id: uuid(),
    address: {
      country: 'USA',
      state: 'Nevada',
      city: 'Las Vegas',
      street: '1798  Hickory Ridge Drive'
    },
    avatarUrl: '/static/images/avatars/avatar_8.png',
    createdAt: 1523048400000,
    email: 'emilee.simchenko@devias.io',
    name: 'Emilee Simchenko',
    phone: '702-661-1654'
  },
  {
    id: uuid(),
    address: {
      country: 'USA',
      state: 'Michigan',
      city: 'Detroit',
      street: '3934  Wildrose Lane'
    },
    avatarUrl: '/static/images/avatars/avatar_9.png',
    createdAt: 1554702800000,
    email: 'kwak.seong.min@devias.io',
    name: 'Kwak Seong-Min',
    phone: '313-812-8947'
  },
  {
    id: uuid(),
    address: {
      country: 'USA',
      state: 'Utah',
      city: 'Salt Lake City',
      street: '368 Lamberts Branch Road'
    },
    avatarUrl: '/static/images/avatars/avatar_10.png',
    createdAt: 1522702800000,
    email: 'merrile.burgett@devias.io',
    name: 'Merrile Burgett',
    phone: '801-301-7894'
  }
];

export const data = [
  {
      id: uuid(),
      ref: 'CDD1049',
      amount: 30.5,
      items: {
          item: 'Ekaterina Tankova'
      },
      createdAt: 1555016400000,
      status: 'pending',
      price: '200'
  },
  {
      id: uuid(),
      ref: 'CDD1048',
      amount: 25.1,
      items: {
          item: 'Cao Yu'
      },
      createdAt: 1555016400000,
      status: 'delivered',
      price: '20000'

  },
  {
      id: uuid(),
      ref: 'CDD1047',
      amount: 10.99,
      items: {
          item: 'Alexa Richardson'
      },
      createdAt: 1554930000000,
      status: 'refunded',
      price: '8960'

  },
  {
      id: uuid(),
      ref: 'CDD1046',
      amount: 96.43,
      items: {
          item: 'Anje Keizer'
      },
      createdAt: 1554757200000,
      status: 'pending',
      price: '1.00'

  },
  {
      id: uuid(),
      ref: 'CDD1045',
      amount: 32.54,
      items: {
          item: 'Clarke Gillebert'
      },
      createdAt: 1554670800000,
      status: 'delivered',
      price: '90'

  },
  {
      id: uuid(),
      ref: 'CDD1044',
      amount: 16.76,
      items: {
          item: 'Adam Denisov'
      },
      createdAt: 1554670800000,
      status: 'delivered',
      price: '200'

  }
];