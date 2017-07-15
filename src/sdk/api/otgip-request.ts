import { OpenTimeGeoIPSDK } from "./opentime-geo-ip-sdk";
import { HttpAppRequest } from "../libraries/http-app-request";
import { OTGIPConstant } from "./otgip-constant";

export class OTGIPRequest {

  private _request: HttpAppRequest;

  public constructor() {
    this._request = new HttpAppRequest();
  }

  public getResponse(api: string, apiMethod, httpMethod: string, data: any, callback: (responseObject) => void) {

    let key = OpenTimeGeoIPSDK.getService().getAPIKey();

    if (key !== null && key !== '') {
      this._request.setRequestHeader(OTGIPConstant.API_KEY_NAME, OpenTimeGeoIPSDK.getService().getAPIKey());
    }

    this._request.setRequestHeader(OTGIPConstant.API_VERSION_NAME, OTGIPConstant.API_VERSION);

    let url = OpenTimeGeoIPSDK.getService().getEndpoint(api, apiMethod);

    this._request.getResponse(url, httpMethod, data, callback);
  }
}