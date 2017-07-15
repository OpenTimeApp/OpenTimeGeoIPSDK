import { OTGIPConstant } from "./otgip-constant";
export class OpenTimeGeoIPSDK {
  private static _sdk: OpenTimeGeoIPSDK = null;

  private _apiKey: string;
  private _inTestMode: boolean;
  private _server: string;

  constructor(apiKey: string, inTestMode: boolean) {
    this._apiKey = apiKey;
    this._inTestMode = inTestMode;
    this._server = inTestMode ? OTGIPConstant.TEST_SERVER : OTGIPConstant.LIVE_SERVER;
  }

  public static getService(): OpenTimeGeoIPSDK {
    if (OpenTimeGeoIPSDK._sdk !== null) {
      return OpenTimeGeoIPSDK._sdk;
    } else {
      throw new Error("OpenTimeGeoIPSDK not initialized");
    }
  }

  public static initService(apiKey: string, inTestMode: boolean = false): void {
    OpenTimeGeoIPSDK._sdk = new OpenTimeGeoIPSDK(apiKey, inTestMode);
  }

  public getEndpoint(api: string, method: string): string {
    let endpoint: string = this._server + '/' + api + OTGIPConstant.API_BASE_URL;
    if (method !== '') {
      endpoint += '/' + method;
    }
    return endpoint;
  }

  public getServer(): string {
    return this._server;
  }

  public getAPIKey(): string {
    return this._apiKey;
  }

  public setServer(server: string): void {
    this._server = server;
  }
}