// googlePhotosService.js

const fetch = require('node-fetch');

// Replace with your actual Google Photos API URL
const GOOGLE_PHOTOS_API_URL = 'https://photoslibrary.googleapis.com/v1/mediaItems';

/**
 * Fetch photos from Google Photos API.
 * @param {string} accessToken - OAuth 2.0 access token.
 * @returns {Promise<Array>} - List of photos.
 */
async function fetchPhotos(accessToken) {
    const response = await fetch(GOOGLE_PHOTOS_API_URL, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${accessToken}`
        }
    });
    
    if (!response.ok) {
        throw new Error(`Error fetching photos: ${response.statusText}`);
    }

    const data = await response.json();
    return data.mediaItems;
}

module.exports = { fetchPhotos };