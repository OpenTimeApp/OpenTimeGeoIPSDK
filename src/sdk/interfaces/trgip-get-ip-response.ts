import { TRGIPLocation } from "./trgip-location";

export interface TRGIPGetIPResponse {
  getLocation() : TRGIPLocation;
  getSuccess() : boolean;
}