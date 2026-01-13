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
}
