import {TRGIPService} from "../../interfaces/trgip-service.interface";
import {HttpAppRequest} from "../../libraries/http-app-request";
import {TRGIPIPAPIGetIPResponse} from "./get-ip/trgip-ip-api-get-ip-response";
import {TRGIPGetIPResponse} from "../../interfaces/trgip-get-ip-response";

export class TRGIPIPAPIService implements TRGIPService {

    private static readonly DEV_URL = 'http://ip-api.com';
    private static readonly PROD_URL = 'https://pro.ip-api.com';

    private _options: any;

    constructor(){
        this._options = [];
    }

    public getIP(callback: (location: TRGIPGetIPResponse) => void): void {
        let request = new HttpAppRequest();

        request.getResponse(
            this._getURL(),
            'GET',
            {
                'key': this._options['key']
            },
            (rawResponse: any) => {
                let response = new TRGIPIPAPIGetIPResponse(rawResponse);
                callback(response);
            }
        )
    }

    private _getURL() : string {
        return this._getServer()  + '/json';
    }

    private _getServer() : string {
        if(this._options['key'] && this._options['key'].trim() !== ''){
            return TRGIPIPAPIService.PROD_URL
        }else{
            return TRGIPIPAPIService.DEV_URL;
        }
    }

    public setServiceOptions(options: any){
        this._options = options;
    }

}