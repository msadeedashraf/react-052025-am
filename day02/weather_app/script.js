//alert("Hello")

const APIKey = "e6371e622ecf5ce41a555eb7a5dd5d94";



//Open Weather API 
//https://api.openweathermap.org/data/2.5/weather?q=hamilton&appid=bf16b8da65ff41a4c8d220d5b961a0e4




function searchByCity(){
    const myCity = document.getElementById('input').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${myCity}&appid=${APIKey}`;
//    alert(`Hello from my button check ${myCity}` );

let myData ;

fetch (url)
    .then ((response) => response.json())
    .then ((forecast) => {
    console.log(forecast);
    getMyHTML(forecast)
        //console.log(forecast.name);

}
)

}


function getMyHTML(forecast)
{

 var myTemp = Math.floor(forecast.main.temp-273) ;


    const myHTML = `
    
        <main>        
            <div class="weather">
                <h2 id="city">${forecast.name}</h2>
                <div class="temp-box">
                    <img src="/weathericon.png" alt="" id="img">
                    <p id="temperature">${myTemp} °C</p>
                </div>
                <span id="clouds">Broken Clouds</span>
            </div>
            <div class="divider1"></div>
    
            <div class="forecstH">
                <p class="cast-header">Upcoming forecast</p>
                <div class="templist">
    
                    <div class="next">
                        <div>
                            <p class="time">8:30 PM</p>
                            <p>29 °C / 29 °C</p>
                        </div>
                        <p class="desc">Light Rain</p>
                    </div>
    
                    <div class="next">
                        <div>
                            <p class="time">8:30 PM</p>
                            <p>29 °C / 29 °C</p>
                        </div>
                        <p class="desc">Light Rain</p>
                    </div>
    
                    <div class="next">
                        <div>
                            <p class="time">8:30 PM</p>
                            <p>29 °C / 29 °C</p>
                        </div>
                        <p class="desc">Light Rain</p>
                    </div>
    
                    <div class="next">
                        <div>
                            <p class="time">8:30 PM</p>
                            <p>29 °C / 29 °C</p>
                        </div>
                        <p class="desc">Light Rain</p>
                    </div>
    
                    <div class="next">
                        <div>
                            <p class="time">8:30 PM</p>
                            <p>29 °C / 29 °C</p>
                        </div>
                        <p class="desc">Light Rain</p>
                    </div>
    
                </div>
            </div>
        </main>
    
        <div class="forecstD">
            <div class="divider2"></div>
            <p class="cast-header"> Next 4 days forecast</p>
            <div class="weekF">
    
                <div class="dayF">
                    <p class="date">Sun Jul 03 2022</p>
                    <p>31 °C / 31 °C</p>
                    <p class="desc">Overcast Clouds</p>
                </div>
    
                <div class="dayF">
                    <p class="date">Sun Jul 03 2022</p>
                    <p>31 °C / 31 °C</p>
                    <p class="desc">Overcast Clouds</p>
                </div>
    
                <div class="dayF">
                    <p class="date">Sun Jul 03 2022</p>
                    <p>31 °C / 31 °C</p>
                    <p class="desc">Overcast Clouds</p>
                </div>
    
                <div class="dayF">
                    <p class="date">Sun Jul 03 2022</p>
                    <p>31 °C / 31 °C</p>
                    <p class="desc">Overcast Clouds</p>
                </div>
            </div>
        </div>
    `;

    document.getElementById('demo').innerHTML = myHTML;

}


