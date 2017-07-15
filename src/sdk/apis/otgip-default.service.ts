import { OTGIPService } from "../interfaces/otgip-service.interface";
import { OTGIPGetIPResponse } from "../interfaces/otgip-get-ip-response";
import { OTGIPServiceFactory } from "./otgip-service.factory";
/**
 * Created by sergeome on 7/15/17.
 */

export class OTGIPDefaultService implements OTGIPService {

  private _defaultService: string;

  constructor(){
    this._defaultService = OTGIPServiceFactory.IP_API;
  }

  public setDefaultService(service: string) {
    this._defaultService = service;
  }

  getIP(callback: (location: OTGIPGetIPResponse) => void): void {
    this._getService().getIP(callback);
  }

  private _getService(): OTGIPService {
    return OTGIPServiceFactory.getService(this._defaultService);
  }


}