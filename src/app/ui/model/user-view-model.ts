/**
 * View model class for Spotify User
 */

export class UserViewModel {
    country: String; completeName: String;
    email: String; numberOfFolowers: number;
    imageUrl: String; premium: Boolean;

    constructor(country?: String, completeName?: String,
        email?: String, numberOfFolowers?: number,
        imageUrl?: String, premium?: Boolean
    ) { 
        this.country = country;
        this.completeName = completeName;
        this.email = email;
        this.numberOfFolowers = numberOfFolowers;
        this.imageUrl = imageUrl;
        this.premium = premium;
    }
}
