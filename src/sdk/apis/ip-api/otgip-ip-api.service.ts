import { OTGIPService } from "../../interfaces/otgip-service.interface";
import { HttpAppRequest } from "../../libraries/http-app-request";
import { OTGIPIPAPIGetIPResponse } from "./get-ip/otgip-ip-api-get-ip-response";
import { OTGIPGetIPResponse } from "../../interfaces/otgip-get-ip-response";

export class OTGIPIPAPIService implements OTGIPService {

  private static readonly URL = 'http://ip-api.com/json';

  getIP(callback: (location: OTGIPGetIPResponse) => void): void {
    let request = new HttpAppRequest();

    request.getResponse(
      OTGIPIPAPIService.URL,
      'GET',
      {},
      (rawResponse: any) => {
        let response = new OTGIPIPAPIGetIPResponse(rawResponse);
        callback(response);
      }
    )

  }

}