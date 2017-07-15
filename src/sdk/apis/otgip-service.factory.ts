import { OTGIPService } from "../interfaces/otgip-service.interface";
import { OTGIPIPAPIService } from "./ip-api/otgip-ip-api.service";
/**
 * Created by sergeome on 7/15/17.
 */

export class OTGIPServiceFactory {

  public static readonly IP_API = 'ip_api';

  public static getService(service: string): OTGIPService {

    const map = {};

    map[OTGIPServiceFactory.IP_API] = new OTGIPIPAPIService();

    if (map[service]) {
      return map[service];
    } else {
      throw new Error('Invalid service ' + service);
    }
  }

}