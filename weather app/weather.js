const apicode= "4c5485619584e6c54513bb152b30d3b9";
const apiurl="https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
var weathericon = document.querySelector(".weathericon");
var searchbtn = document.querySelector("#search button") ;
var searchbox = document.querySelector("#search input") ;

async function setWeather(city) {
   var response= await fetch(apiurl + city + `&appid=${apicode}`);
   if(response.status== 404){
    document.querySelector(".error").style.display="block";
    document.querySelector("#weather").style.display="none";
   }

   else{
   var data= await response.json();

   document.querySelector(".temperature").innerHTML= Math.round(data.main.temp)+"°C";
   document.querySelector(".city").innerHTML=data.name;
   document.querySelector(".humidity").innerHTML=data.main.humidity +"%";
   document.querySelector(".windspeed").innerHTML=data.wind.speed + " Km/h";

   if(data.weather[0].main =="Clouds"){
        weathericon.src="cloud.png";
   }
  else if(data.weather[0].main =="Rain"){
    weathericon.src="rain.png";
}
else if(data.weather[0].main =="Clear"){
    weathericon.src="sunny.png";
}
else if(data.weather[0].main =="Mist"){
    weathericon.src="mist.png";
}
else if(data.weather[0].main =="Drizzle"){
    weathericon.src="drizzle.png";
}

document.querySelector("#weather").style.display="block";
document.querySelector(".error").style.display="none";
}
}
searchbtn.addEventListener("click",()=>{
    setWeather(searchbox.value);
})
document.addEventListener("keypress",(e)=>{
    if(e.keyCode == 13){
    setWeather(searchbox.value);
    }
})
searchbox.value="";
setWeather();
