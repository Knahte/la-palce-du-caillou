// Function to calculate the distance between two points using the Haversine formula
function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
    const R = 6371; // Radius of Earth in kilometers
    const dLat = (lat2 - lat1) * (Math.PI / 180);
    const dLon = (lon2 - lon1) * (Math.PI / 180);
    const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c; // Distance in kilometers
}

// Check user's location and modify the page if within a certain radius
navigator.geolocation.getCurrentPosition((position) => {
    const userLat = position.coords.latitude;
    const userLon = position.coords.longitude;
    
    // Replace these with the coordinates of the target location
    const targetLat = 44.0994; // Example latitude
    const targetLon = 4.0836;  // Example longitude
    const radius = 5; // Radius in kilometers

    const distance = getDistanceFromLatLonInKm(userLat, userLon, targetLat, targetLon);

    if (distance <= radius) {
        
        //EFFET DE BORRE

        alert("You are within the designated radius!");
    } else {
        console.log("You are outside the designated radius.");
    }
}, (error) => {
    console.error("Error obtaining location", error);
});