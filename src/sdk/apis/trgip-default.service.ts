import { TRGIPService } from "../interfaces/trgip-service.interface";
import { TRGIPGetIPResponse } from "../interfaces/trgip-get-ip-response";
import { TRGIPServiceFactory } from "./trgip-service.factory";

export class TRGIPDefaultService implements TRGIPService {

  private _defaultService: TRGIPService;
  private _defaultServiceName: string;

  constructor(){
    this._defaultService = TRGIPServiceFactory.getService(TRGIPServiceFactory.IP_API);
  }

  public setDefaultService(service: string) {
      this._defaultServiceName = service;
      this._defaultService = TRGIPServiceFactory.getService(service);
  }

  public setServiceOptions(options: any){
      this._getService().setServiceOptions(options[this._defaultServiceName]);
  }

  getIP(callback: (location: TRGIPGetIPResponse) => void): void {
    this._getService().getIP(callback);
  }

  private _getService(): TRGIPService {
    return this._defaultService;
  }


}