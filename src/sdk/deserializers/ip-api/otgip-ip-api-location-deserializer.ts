import { OTGIPLocation } from "../../interfaces/otgip-location";

export class OTGIPIPAPILocationDeserializer implements OTGIPLocation {

  private _lat;
  private _long;

  constructor(rawData: any) {
    this._setLat(rawData.lat);
    this._setLong(rawData.lon);
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

}