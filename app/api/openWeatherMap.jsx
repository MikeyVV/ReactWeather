var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=f1ee83e0bc78991d50decc46af3934ac&units=metric';

module.exports = {
    getTemp: function (location) {
        var encodedLocation = encodeURIComponent(location);
        var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;
        return axios.get(requestUrl).then(function (res) {
            if (res.data.cod && res.data.message) {
                //throw new Error(res.response.data.message)
                throw new Error('location not found.')
            } else {
                return res.data.main.temp
            }
        }, function (err) {
            //throw new Error(err.response.data.message)
            throw new Error('location not found.')
        })
    }
};