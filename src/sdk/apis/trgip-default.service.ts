import { TRGIPService } from "../interfaces/trgip-service.interface";
import { TRGIPGetIPResponse } from "../interfaces/trgip-get-ip-response";
import { TRGIPServiceFactory } from "./trgip-service.factory";

export class TRGIPDefaultService implements TRGIPService {

  private _defaultService: string;

  constructor(){
    this._defaultService = TRGIPServiceFactory.IP_API;
  }

  public setDefaultService(service: string) {
    this._defaultService = service;
  }

  getIP(callback: (location: TRGIPGetIPResponse) => void): void {
    this._getService().getIP(callback);
  }

  private _getService(): TRGIPService {
    return TRGIPServiceFactory.getService(this._defaultService);
  }


}