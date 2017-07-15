
import { OTGIPGetIPResponse } from "./otgip-get-ip-response";

export interface OTGIPService {
  getIP(callback:(location: OTGIPGetIPResponse) => void): void;
}