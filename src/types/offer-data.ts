//интерфейс для пропсов offer

export interface City {
  name: string;
    location: {
      latitude: number;
      longitude: number;
      zoom: number;
    };
}

export interface Location {
  latitude: number;
  longitude: number;
  zoom: number;
}

export interface Host {
    name: string;
    avatarUrl: string;
    isPro: boolean;
}

export interface Offer {
  id: string;
  title: string;
  type: string;
  price: number;
  previewImage: string;
  city: City;
  location: Location;
  isFavorite?: boolean;
  isPremium: boolean;
  rating: number;
  description: string;
  bedrooms: number;
  goods: [string];
  host: Host;
  images: [string];
  maxAdults: number;
}
