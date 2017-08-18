export class TimeRocketGeoIPSDK {
  private static _sdk: TimeRocketGeoIPSDK = null;

  private _configs: any;
  private _inTestMode: boolean;

  constructor(apiKeys: string, inTestMode: boolean) {
    this._configs = apiKeys;
    this._inTestMode = inTestMode;
  }

  public static getService(): TimeRocketGeoIPSDK {
    if (TimeRocketGeoIPSDK._sdk !== null) {
      return TimeRocketGeoIPSDK._sdk;
    } else {
      throw new Error("TimeRocketGeoIPSDK not initialized");
    }
  }

  public static initService(apiKeys: any, inTestMode: boolean = false): void {
    TimeRocketGeoIPSDK._sdk = new TimeRocketGeoIPSDK(apiKeys, inTestMode);
  }

  public getAPIKey(service: string){
      return this._configs[service].key;
  }

}