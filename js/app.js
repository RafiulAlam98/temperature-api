const apiKey = 'f9c50d445a50bebc4b34530cbfdaf684'


function searchTemperature (){
     const city = document.getElementById('city-name').value
     const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
     fetch(url)
     .then(res => res.json())
     .then(data => displayTemaprature(data))
}

const displayTemaprature = temp =>{
     console.log(temp)
}