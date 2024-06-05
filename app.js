const options = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': '07feea0b5dmsh6de502b7f2bb520p1504e2jsn29240d9ffc77',
        'x-rapidapi-host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

const getWeather = (city) => {
    cityName.innerHTML = city;
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
        .then(response => response.json())
        .then(response => {
            console.log(response);
            cloud_pct.innerHTML = response.cloud_pct;
            feels_like.innerHTML = response.feels_like;
            humidity.innerHTML = response.humidity;
            max_temp.innerHTML = response.max_temp;
            min_temp.innerHTML = response.min_temp;
            sunrise.innerHTML = response.sunrise;
            sunset.innerHTML = response.sunset;
            temp.innerHTML = response.temp;
            wind_degrees.innerHTML = response.wind_degrees;
            wind_speed.innerHTML = response.wind_speed;
        })
        .catch(err => console.error(err));
}

const getWeatherForCommonPlaces = () => {
    const cities = ["Shanghai", "Boston", "Lucknow", "Kolkata"];
    cities.forEach(city => {
        fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
            .then(response => response.json())
            .then(response => {
                console.log(response);
                document.getElementById(`${city.toLowerCase()}_cloud_pct`).innerHTML = response.cloud_pct;
                document.getElementById(`${city.toLowerCase()}_feels_like`).innerHTML = response.feels_like;
                document.getElementById(`${city.toLowerCase()}_humidity`).innerHTML = response.humidity;
                document.getElementById(`${city.toLowerCase()}_max_temp`).innerHTML = response.max_temp;
                document.getElementById(`${city.toLowerCase()}_min_temp`).innerHTML = response.min_temp;
                document.getElementById(`${city.toLowerCase()}_sunrise`).innerHTML = response.sunrise;
                document.getElementById(`${city.toLowerCase()}_sunset`).innerHTML = response.sunset;
                document.getElementById(`${city.toLowerCase()}_temp`).innerHTML = response.temp;
                document.getElementById(`${city.toLowerCase()}_wind_degrees`).innerHTML = response.wind_degrees;
                document.getElementById(`${city.toLowerCase()}_wind_speed`).innerHTML = response.wind_speed;
            })
            .catch(err => console.error(err));
    });
}

submit.addEventListener("click", (e) => {
    e.preventDefault();
    getWeather(city.value);
});

getWeather("Bangalore");
getWeatherForCommonPlaces();
