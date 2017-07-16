import { OTGIPLocation } from "./otgip-location";

export interface OTGIPGetIPResponse {
  getLocation() : OTGIPLocation;
  getSuccess() : boolean;
}