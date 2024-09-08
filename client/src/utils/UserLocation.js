export default function UserLocation() {
    return new Promise((resolve, reject) => {
        // if geolocation is supported by the users browser
        if (navigator.geolocation) {
            // get the current users location
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    // save the geolocation coordinates in two variables
                    const { latitude, longitude } = position.coords;
                    // resolve the promise with the location coordinates
                    resolve({ latitude, longitude });
                },
                // if there was an error getting the users location
                (error) => {
                    console.error('Error getting user location:', error);
                    // reject the promise with the error
                    reject(error);
                }
            );
        }
        // if geolocation is not supported by the users browser
        else {
            console.error('Geolocation is not supported by this browser.');
            // reject the promise with an error message
            reject('Geolocation is not supported by this browser.');
        }
    });
}
