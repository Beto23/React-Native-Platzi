const URL = 'https://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=spain&api_key=ee67af2143b8fa04c6a616a156fa7761&format=json';

export function getArtists() {
    return fetch(URL)
        .then(response => response.json())
        .then(data => data.topartists.artist)
        .then(artists => artists.map(artist => ({
                name: artist.name,
                image: artist.image[3]['#text'],
                likes: 200,
                comments: 140
        })))
}