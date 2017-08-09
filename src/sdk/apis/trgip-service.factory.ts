import { TRGIPService } from "../interfaces/trgip-service.interface";
import { TRGIPIPAPIService } from "./ip-api/trgip-ip-api.service";
/**
 * Created by sergeome on 7/15/17.
 */

export class TRGIPServiceFactory {

  public static readonly IP_API = 'ip_api';

  public static getService(service: string): TRGIPService {

    const map = {};

    map[TRGIPServiceFactory.IP_API] = new TRGIPIPAPIService();

    if (map[service]) {
      return map[service];
    } else {
      throw new Error('Invalid service ' + service);
    }
  }

}