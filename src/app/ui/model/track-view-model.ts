/**
 * View Model class for Spotify Track
 */

export class TrackViewModel {
    name: String; number: number;
    constructor(name?: String, number?: number) {
        this.name = name;
        this.number = number;
    }
}
