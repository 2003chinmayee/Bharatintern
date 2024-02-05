var inputvalue = document.querySelector('#cityinput')
var btn = document.querySelector('#add');
var city = document.querySelector('#cityoutput')
var temp = document.querySelector('#temp')
var wind = document.querySelector('#wind')
var humidity = document.querySelector('#humidity')
apik ="63a90ae96d390ec37d6c1252f5a86e1a"
function convertion (val)
{
    return (val - 273).toFixed(3)
}
btn.addEventListener('click', function()
  {
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputvalue.value+ '&appid='+apik)
    .then(res => res.json())

    .then(data =>
    {
        var nameval = data['name']
        var tempature = data['main']['temp']
        var wndspeed = data['wind']['speed']

        

        city.innerHTML = 'Weather of <span>${nameval}</span>'
        temp.innerHTML = 'Temperature: <span>${ convertion(temp)}C</span>'
        wind.innerHTML = 'Wind speed: <span>&{wind} km/h<span>'
    })


    .catch(err => alert('You Entered wrong city name'))
  })