import { OpenTimeGeoIPSDK } from "../sdk/api/opentime-geo-ip-sdk";
import { HttpAppRequest } from "../sdk/libraries/http-app-request";
import * as testAPI from "./test-config";
export class TestHelper {
  public static beforeAll() {
    OpenTimeGeoIPSDK.initService(testAPI.config.api_key, true);
    OpenTimeGeoIPSDK.getService().setServer(testAPI.config.server);
  }

  public static restoreData(scripts: Array<string>, callback: (response) => void) {
    let request = new HttpAppRequest();
    let script = scripts.join(',');
    request.getResponse(
        OpenTimeGeoIPSDK.getService().getServer() + '/restore/restore.php',
      'GET',
      {api_key: OpenTimeGeoIPSDK.getService().getAPIKey(), script: script},
      (response) => {
        callback(response);
      }
    );
  }
}