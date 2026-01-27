const offers = [
  {
    id: '3597ba62-f070-40d8-aa85-279b9d05e7e7',
    title: 'The Joshua Tree House',
    type: 'room',
    price: 172,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/2.jpg',
    city: {
      name: 'Paris',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13
      }
    },
    location: {
      latitude: 48.868610000000004,
      longitude: 2.342499,
      zoom: 16
    },
    isFavorite: true,
    isPremium: false,
    rating: 4.5
  },
  {
    id: 'de716fce-97ba-4841-8981-1628efec0793',
    title: 'Beautiful & luxurious apartment at great location',
    type: 'house',
    price: 476,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/9.jpg',
    city: {
      name: 'Paris',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13
      }
    },
    location: {
      latitude: 48.858610000000006,
      longitude: 2.330499,
      zoom: 16
    },
    isFavorite: false,
    isPremium: false,
    rating: 1.5
  },
  {
    id: '456267ce-bc97-4626-9727-fe31173c26b9',
    title: 'The house among olive',
    type: 'apartment',
    price: 270,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/20.jpg',
    city: {
      name: 'Paris',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13
      }
    },
    location: {
      latitude: 48.834610000000005,
      longitude: 2.335499,
      zoom: 16
    },
    isFavorite: false,
    isPremium: true,
    rating: 4.3
  },

  {
    id: '6376ffc1-cbe4-4c97-a9a8-d80ebbbdeb72',
    title: 'The Pondhouse - A Magical Place',
    type: 'room',
    price: 167,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/12.jpg',
    city: {
      name: 'Cologne',
      location: {
        latitude: 50.938361,
        longitude: 6.959974,
        zoom: 13
      }
    },
    location: {
      latitude: 50.950361,
      longitude: 6.961974,
      zoom: 16
    },
    isFavorite: false,
    isPremium: true,
    rating: 2.6
  },
  {
    id: '8169d903-8710-4639-99d0-2d0f905d70a5',
    title: 'Amazing and Extremely Central Flat',
    type: 'hotel',
    price: 438,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/9.jpg',
    city: {
      name: 'Cologne',
      location: {
        latitude: 50.938361,
        longitude: 6.959974,
        zoom: 13
      }
    },
    location: {
      latitude: 50.932361,
      longitude: 6.937974,
      zoom: 16
    },
    isFavorite: false,
    isPremium: true,
    rating: 3.5
  },
  {
    id: '0e8ba001-8ea1-4674-b815-25f2ecfd0921',
    title: 'Penthouse, 4-5 rooms + 5 balconies',
    type: 'apartment',
    price: 455,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/20.jpg',
    city: {
      name: 'Cologne',
      location: {
        latitude: 50.938361,
        longitude: 6.959974,
        zoom: 13
      }
    },
    location: {
      latitude: 50.934361,
      longitude: 6.943974,
      zoom: 16
    },
    isFavorite: true,
    isPremium: false,
    rating: 1.2
  },

  {
    id: '0edbe1e8-8c87-484c-94bc-d5acff2a515d',
    title: 'House in countryside',
    type: 'house',
    price: 609,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/20.jpg',
    city: {
      name: 'Brussels',
      location: {
        latitude: 50.846557,
        longitude: 4.351697,
        zoom: 13
      }
    },
    location: {
      latitude: 50.854557,
      longitude: 4.364697,
      zoom: 16
    },
    isFavorite: true,
    isPremium: false,
    rating: 2
  },
  {
    id: 'cacfdd18-6e03-4b79-81cb-22ff3ee1b76f',
    title: 'Canal View Prinsengracht',
    type: 'house',
    price: 601,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/14.jpg',
    city: {
      name: 'Brussels',
      location: {
        latitude: 50.846557,
        longitude: 4.351697,
        zoom: 13
      }
    },
    location: {
      latitude: 50.867557,
      longitude: 4.371696999999999,
      zoom: 16
    },
    isFavorite: true,
    isPremium: false,
    rating: 3.6
  },
  {
    id: '1d670645-6318-4c3c-9aa7-1c3c6d3c4342',
    title: 'Perfectly located Castro',
    type: 'hotel',
    price: 206,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/13.jpg',
    city: {
      name: 'Brussels',
      location: {
        latitude: 50.846557,
        longitude: 4.351697,
        zoom: 13
      }
    },
    location: {
      latitude: 50.827557,
      longitude: 4.336697,
      zoom: 16
    },
    isFavorite: false,
    isPremium: false,
    rating: 2.5
  },

  {
    id: 'cf33401d-095b-4b1c-b95d-fdcf984cdfc6',
    title: 'Loft Studio in the Central Area',
    type: 'hotel',
    price: 241,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/5.jpg',
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.37454,
        longitude: 4.897976,
        zoom: 13
      }
    },
    location: {
      latitude: 52.36554,
      longitude: 4.911976,
      zoom: 16
    },
    isFavorite: false,
    isPremium: false,
    rating: 4.8
  },
  {
    id: '71bca062-b329-45a4-af4f-5273824d12ec',
    title: 'The house among olive',
    type: 'room',
    price: 250,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/2.jpg',
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.37454,
        longitude: 4.897976,
        zoom: 13
      }
    },
    location: {
      latitude: 52.385540000000006,
      longitude: 4.902976,
      zoom: 16
    },
    isFavorite: false,
    isPremium: false,
    rating: 4.5
  },
  {
    id: '7f80b34f-3d82-4c35-ac2a-bb292d05ec0d',
    title: 'House in countryside',
    type: 'apartment',
    price: 249,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/12.jpg',
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.37454,
        longitude: 4.897976,
        zoom: 13
      }
    },
    location: {
      latitude: 52.397540000000006,
      longitude: 4.9099759999999995,
      zoom: 16
    },
    isFavorite: false,
    isPremium: false,
    rating: 4.2
  },

  {
    id: '2b831b1a-6fbc-42d9-a9dc-ad0964cfbca1',
    title: 'Loft Studio in the Central Area',
    type: 'room',
    price: 267,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/4.jpg',
    city: {
      name: 'Hamburg',
      location: {
        latitude: 53.550341,
        longitude: 10.000654,
        zoom: 13
      }
    },
    location: {
      latitude: 53.528341000000005,
      longitude: 10.018654000000002,
      zoom: 16
    },
    isFavorite: false,
    isPremium: false,
    rating: 2.6
  },
  {
    id: '460f68e4-d572-4267-a92f-ab6024684450',
    title: 'Nice, cozy, warm big bed apartment',
    type: 'apartment',
    price: 109,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/9.jpg',
    city: {
      name: 'Hamburg',
      location: {
        latitude: 53.550341,
        longitude: 10.000654,
        zoom: 13
      }
    },
    location: {
      latitude: 53.538341,
      longitude: 9.976654000000002,
      zoom: 16
    },
    isFavorite: false,
    isPremium: false,
    rating: 1.1
  },
  {
    id: '4e578cf5-ed3b-4590-97df-a5aa8f93719e',
    title: 'Waterfront with extraordinary view',
    type: 'house',
    price: 111,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/11.jpg',
    city: {
      name: 'Hamburg',
      location: {
        latitude: 53.550341,
        longitude: 10.000654,
        zoom: 13
      }
    },
    location: {
      latitude: 53.563341,
      longitude: 10.019654000000001,
      zoom: 16
    },
    isFavorite: false,
    isPremium: true,
    rating: 1.4
  },

  {
    id: '5ac2eb9d-1d51-4467-bf32-7beb1978418d',
    title: 'The Joshua Tree House',
    type: 'apartment',
    price: 324,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/18.jpg',
    city: {
      name: 'Dusseldorf',
      location: {
        latitude: 51.225402,
        longitude: 6.776314,
        zoom: 13
      }
    },
    location: {
      latitude: 51.236402000000005,
      longitude: 6.784314,
      zoom: 16
    },
    isFavorite: false,
    isPremium: true,
    rating: 3.4
  },
  {
    id: '8fefacaf-016c-4248-981e-99358e771514',
    title: 'Nice, cozy, warm big bed apartment',
    type: 'house',
    price: 658,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/1.jpg',
    city: {
      name: 'Dusseldorf',
      location: {
        latitude: 51.225402,
        longitude: 6.776314,
        zoom: 13
      }
    },
    location: {
      latitude: 51.210402,
      longitude: 6.798314,
      zoom: 16
    },
    isFavorite: false,
    isPremium: true,
    rating: 1.5
  },
  {
    id: 'e8ae1883-60b7-460a-82ea-5b06b030cf12',
    title: 'Penthouse, 4-5 rooms + 5 balconies',
    type: 'room',
    price: 212,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/1.jpg',
    city: {
      name: 'Dusseldorf',
      location: {
        latitude: 51.225402,
        longitude: 6.776314,
        zoom: 13
      }
    },
    location: {
      latitude: 51.211402,
      longitude: 6.756314000000001,
      zoom: 16
    },
    isFavorite: false,
    isPremium: false,
    rating: 3.1
  }
];
export { offers };
