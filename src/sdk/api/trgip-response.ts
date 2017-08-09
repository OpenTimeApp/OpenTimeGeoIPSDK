export class TRGIPResponse {
  private _success: boolean;
  private _message: string;
  private _developerMessage: string = "";

  constructor(rawData: any) {
    this._success = rawData.success;
    this._message = rawData.message;
    if (rawData.developerMessage) {
      this._developerMessage = rawData.developerMessage;
    }
  }

  public getSuccess(): boolean {
    return this._success;
  }

  public getMessage(): string {
    return this._message;
  }

  public getDeveloperMessage(): string {
    return this._developerMessage;
  }

  public getErrorMessages(): string {
    return this.getMessage() + '. ' + this.getDeveloperMessage();
  }
}