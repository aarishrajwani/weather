let weather = {
    "api_key": "3093b0ecf1916274d22722a3057f981c",
    fetchWeather: function(city) {
        fetch(

            "https://api.openweathermap.org/data/2.5/weather?q="
            + city
            + "&units=imperial&appid="
            + this.api_key
        ).then((response)=>response.json())
        .then((data)=>this.displayWeather(data))
},
displayWeather: function(data) {
    const{name} = data;
    const{icon, description} = data.weather[0];
    const{temp, humidity} = data.main;
    const{speed} = data.wind;
    const{feels_like} = data.main;
document.querySelector(".city").innerText = name;
document.querySelector(".icon").src ="https://openweathermap.org/img/wn/"+ icon + "@2x.png";
document.querySelector(".description").innerText = description;
document.querySelector(".temp").innerText = (temp) + "°F";
document.querySelector(".feels_like").innerText = feels_like + "°F";
document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
document.querySelector(".wind").innerText = "Wind Speed: " + speed + "mph";
document.querySelector(".weather").classList.remove("loading");
document.body.style.backgroundImage="url('https://source.unsplash.com/1980x1080/?" + name + "')"
},
search: function() {
    this.fetchWeather(document.querySelector(".search-bar").value);
}
};
document.querySelector(".search").addEventListener("click", function(){
    weather.search();
});
document.querySelector(".search-bar").addEventListener("keypress", function(event){
    if(event.key === "Enter"){
        weather.search();

    }
})
weather.fetchWeather("New York");