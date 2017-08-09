import { TimeRocketGeoIPSDK } from "../sdk/api/timerocket-geo-ip-sdk";
import { HttpAppRequest } from "../sdk/libraries/http-app-request";
import * as testAPI from "./test-config";
export class TestHelper {
  public static beforeAll() {
    TimeRocketGeoIPSDK.initService(testAPI.config.api_key, true);
    TimeRocketGeoIPSDK.getService().setServer(testAPI.config.server);
  }

  public static restoreData(scripts: Array<string>, callback: (response) => void) {
    let request = new HttpAppRequest();
    let script = scripts.join(',');
    request.getResponse(
        TimeRocketGeoIPSDK.getService().getServer() + '/restore/restore.php',
      'GET',
      {api_key: TimeRocketGeoIPSDK.getService().getAPIKey(), script: script},
      (response) => {
        callback(response);
      }
    );
  }
}