import { OTGIPGetIPResponse } from "../../../interfaces/otgip-get-ip-response";
import { OTGIPLocation } from "../../../interfaces/otgip-location";
import { OTGIPIPAPILocationDeserializer } from "../../../deserializers/ip-api/otgip-ip-api-location-deserializer";

export class OTGIPIPAPIGetIPResponse implements OTGIPGetIPResponse{

  private _location: OTGIPLocation;
  private _success: boolean;

  constructor(rawData: any){
    this._success = false;

    if(rawData){
      this._success = true;
    }

    this._location = new OTGIPIPAPILocationDeserializer(rawData);
  }

  getLocation(): OTGIPLocation {
    return this._location;
  }

  getSuccess(){
    return this._success;
  }

}