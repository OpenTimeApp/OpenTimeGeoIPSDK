import { TRGIPGetIPResponse } from "../../../interfaces/trgip-get-ip-response";
import { TRGIPLocation } from "../../../interfaces/trgip-location";
import { TRGIPIPAPILocationDeserializer } from "../../../deserializers/ip-api/trgip-ip-api-location-deserializer";

export class TRGIPIPAPIGetIPResponse implements TRGIPGetIPResponse{

  private _location: TRGIPLocation;
  private _success: boolean;

  constructor(rawData: any){
    this._success = false;

    if(rawData){
      this._success = true;
    }

    this._location = new TRGIPIPAPILocationDeserializer(rawData);
  }

  getLocation(): TRGIPLocation {
    return this._location;
  }

  getSuccess(){
    return this._success;
  }

}