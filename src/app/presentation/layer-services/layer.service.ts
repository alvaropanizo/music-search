import { Injectable } from '@angular/core';

@Injectable()
export class LayerService {
   
    constructor() { }

    loginUser(): Boolean {
        return localStorage.getItem('token') != null;
    }

    getToken(): string {
        let token: string;
        if(localStorage.getItem('token') == null) {
            let hash = window.location.hash;
            history.pushState({}, null, document.baseURI);
            token = hash.substring(hash.indexOf('=') + 1 , hash.indexOf('&')); 
            token.length > 0 ? token = token : token =  undefined;       
        }
        return token;
    }

    redirectToLoginSpotify() {
        let uri = document.baseURI;
        let url = "https://accounts.spotify.com/authorize/?client_id=62918d24d2164c44b26b3088ec55db10"
        + "&response_type=token&redirect_uri=" + uri 
        + "&scope=user-read-private%20user-read-email&state=34fFs29kd09";
        window.location.href = url;
    }
}
