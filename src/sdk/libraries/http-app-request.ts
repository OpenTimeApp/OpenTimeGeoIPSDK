export class HttpAppRequest {

  public constructor() {
  }

  private _http = new XMLHttpRequest();
  private _headers: Array<string> = [];

  public getResponse(url: string, method: string, data: any, callback: (responseObject) => void) {

    let finalUrl = url;

    // Convert data object into query string
    if (method.toUpperCase() === 'GET' && !url.includes('?')) {
      finalUrl += '?' + Object.keys(data).map(k => `${encodeURIComponent(k)}=${encodeURIComponent(data[k])}`).join('&');
    }

    let queryString = '';

    this._http.open(method, finalUrl, true);

    for (let key in this._headers) {
      this._http.setRequestHeader(key, this._headers[key]);
    }

    if (method !== 'GET') {
      queryString = Object.keys(data).map(k => `${encodeURIComponent(k)}=${encodeURIComponent(data[k])}`).join('&');

      this._http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    }

    this._http.onreadystatechange = () => {
      if (this._http.readyState === XMLHttpRequest.DONE) {

        try {
          let jsonData = JSON.parse(this._http.responseText);

          callback(jsonData);
        } catch (e) {

          let errorMessage = {
            success: false,
            message: "The server did not return a valid JSON response",
            data: null
          };

          console.error("The server did not return a valid JSON response for url: " + url);
          console.error("Response: " + this._http.responseText);

          callback(errorMessage);
        }
      }
    };

    this._http.send(queryString);
  }

  public setRequestHeader(header: string, value: string) {
    this._headers[header] = value;
  }
}