export interface LatLng {
  lat: number;
  lng: number;
}

export interface Place extends LatLng {
  place_name: string;
  address_name: string;
  isSelected?: boolean;
}
