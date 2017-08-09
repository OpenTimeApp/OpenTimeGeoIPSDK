import { TRGIPConstant } from "./trgip-constant";
export class TimeRocketGeoIPSDK {
  private static _sdk: TimeRocketGeoIPSDK = null;

  private _apiKey: string;
  private _inTestMode: boolean;
  private _server: string;

  constructor(apiKey: string, inTestMode: boolean) {
    this._apiKey = apiKey;
    this._inTestMode = inTestMode;
    this._server = inTestMode ? TRGIPConstant.TEST_SERVER : TRGIPConstant.LIVE_SERVER;
  }

  public static getService(): TimeRocketGeoIPSDK {
    if (TimeRocketGeoIPSDK._sdk !== null) {
      return TimeRocketGeoIPSDK._sdk;
    } else {
      throw new Error("TimeRocketGeoIPSDK not initialized");
    }
  }

  public static initService(apiKey: string, inTestMode: boolean = false): void {
    TimeRocketGeoIPSDK._sdk = new TimeRocketGeoIPSDK(apiKey, inTestMode);
  }

  public getEndpoint(api: string, method: string): string {
    let endpoint: string = this._server + '/' + api + TRGIPConstant.API_BASE_URL;
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