import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions} from '@angular/http';
import { Observable } from "rxjs/Observable";
import { environment } from "environments/environment";

@Injectable()
export class HttpService {

  headers: Headers;
  fileHeader: Headers = new Headers();

  constructor(
    protected http: Http
  ) { }

  setHeader(headers: Headers) {
    this.headers = headers;
  }

  /**
   * Return un object for the concrete id for GET URL entities
   * @param url 
   * @param id 
   */
  findOne(url: string): Observable<any> {
    return this.http.get(url, { headers: this.headers })
        .map(this.extractData)
        .catch((error) => this.handleError(error));
  }

  /* Util http methods */
  private extractData(res: Response): Observable<any> {
    return res.json() || { };
  }

  private handleError(error: any){
    console.log(error);
    if(error.message == 'Invalid access token')
      this.refreshToken();
    return Observable.throw("Error: entities unavailables or incorrect url");
  }

  refreshToken(){
    localStorage.removeItem('token');
    let uri = document.baseURI;
    let url = "https://accounts.spotify.com/authorize/?client_id=" 
    + environment.client_id +
    + "&response_type=token&redirect_uri=" + uri 
    + "&scope=user-read-private%20user-read-email&state=34fFs29kd09";
    window.location.href = url;
  }
}
