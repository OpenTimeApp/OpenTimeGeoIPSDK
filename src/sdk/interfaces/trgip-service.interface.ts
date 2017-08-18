
import { TRGIPGetIPResponse } from "./trgip-get-ip-response";

export interface TRGIPService {
  getIP(callback:(response: TRGIPGetIPResponse) => void): void;
  setServiceOptions(options: any): void;
}