import { TRGIPService } from "../../interfaces/trgip-service.interface";
import { HttpAppRequest } from "../../libraries/http-app-request";
import { TRGIPIPAPIGetIPResponse } from "./get-ip/trgip-ip-api-get-ip-response";
import { TRGIPGetIPResponse } from "../../interfaces/trgip-get-ip-response";

export class TRGIPIPAPIService implements TRGIPService {

  private static readonly URL = 'http://ip-api.com/json';

  getIP(callback: (location: TRGIPGetIPResponse) => void): void {
    let request = new HttpAppRequest();

    request.getResponse(
      TRGIPIPAPIService.URL,
      'GET',
      {},
      (rawResponse: any) => {
        let response = new TRGIPIPAPIGetIPResponse(rawResponse);
        callback(response);
      }
    )

  }

}