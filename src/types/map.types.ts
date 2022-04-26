import {Region} from 'react-native-maps';

export interface IMarker {
  title: string;
  description: string;
  region: IRegion;
}

export interface IRegion {
  latitude: number;
  longitude: number;
  latitudeDelta?: number;
  longitudeDelta?: number;
}

export interface ILocation {
  title: string;
  region: Region;
}
