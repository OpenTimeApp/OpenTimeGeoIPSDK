
import { OTGIPGetIPResponse } from "./otgip-get-ip-response";

export interface OTGIPService {
  getIP(callback:(response: OTGIPGetIPResponse) => void): void;
}