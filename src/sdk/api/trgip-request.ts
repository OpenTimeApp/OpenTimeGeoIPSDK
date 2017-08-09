import { TimeRocketGeoIPSDK } from "./timerocket-geo-ip-sdk";
import { HttpAppRequest } from "../libraries/http-app-request";
import { TRGIPConstant } from "./trgip-constant";

export class TRGIPRequest {

  private _request: HttpAppRequest;

  public constructor() {
    this._request = new HttpAppRequest();
  }

  public getResponse(api: string, apiMethod, httpMethod: string, data: any, callback: (responseObject) => void) {

    let key = TimeRocketGeoIPSDK.getService().getAPIKey();

    if (key !== null && key !== '') {
      this._request.setRequestHeader(TRGIPConstant.API_KEY_NAME, TimeRocketGeoIPSDK.getService().getAPIKey());
    }

    this._request.setRequestHeader(TRGIPConstant.API_VERSION_NAME, TRGIPConstant.API_VERSION);

    let url = TimeRocketGeoIPSDK.getService().getEndpoint(api, apiMethod);

    this._request.getResponse(url, httpMethod, data, callback);
  }
}