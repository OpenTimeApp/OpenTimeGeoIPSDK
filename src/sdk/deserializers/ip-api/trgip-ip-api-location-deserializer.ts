import { TRGIPLocation } from "../../interfaces/trgip-location";

export class TRGIPIPAPILocationDeserializer implements TRGIPLocation {

  private _lat: number;
  private _long: number;
  private _city: string;
  private _state: string;

  constructor(rawData: any) {
    this._setLat(rawData.lat);
    this._setLong(rawData.lon);
    this._setCity(rawData.city);
    this._setState(rawData.region);
  }

  private _setCity(city: string) {
    this._city = city;
  }

  private _setState(state: string) {
    this._state = state;
  }

  private _setLat(lat: number){
    this._lat  = lat;
  }

  private _setLong(long: number){
    this._long = long;
  }

  getLat(): number {
    return this._lat;
  }

  getLong(): number {
    return this._long;
  }

  getLocationText(): string {
    return this._city + ', ' + this._state;
  }

}