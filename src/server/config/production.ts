export default {
    options: {
        accessToken: process.env.ACCESS,
        clientId: process.env.CLIENT_ID,
        get: 'user',
        locationId: null,
        resolution: 'standard_resolution',
        sortBy: 'none',
        tagName: null,
        userId: process.env.USER_ID
    }
};