import { OTGIPGetIPResponse } from "../../../interfaces/otgip-get-ip-response";
import { OTGIPLocation } from "../../../interfaces/otgip-location";
import { OTGIPRequest } from "../../../api/otgip-request";
import { OTGIPIPAPILocationDeserializer } from "../../../deserializers/ip-api/otgip-ip-api-location-deserializer";
/**
 * Created by sergeome on 7/15/17.
 */

export class OTGIPIPAPIGetIPResponse implements OTGIPGetIPResponse{

  private _location: OTGIPLocation;

  constructor(rawData: any){
    this._location = new OTGIPIPAPILocationDeserializer(rawData);
  }

  getLocation(): OTGIPLocation {
    return this._location;
  }

}