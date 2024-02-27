const input = document.querySelector('input')
const button = document.querySelector('button')
const cityName = document.querySelector('.city-name')
const warning = document.querySelector('.warning')
const photo = document.querySelector('.photo')
const weather = document.querySelector('.weather')
const temperature = document.querySelector('.temperature')
const humidity = document.querySelector('.humidity')
const API_KEY = 'Your api key'

function checking() {
	let cityNameToCheck = input.value

	const API = `https://api.openweathermap.org/data/2.5/weather?q=${cityNameToCheck}&appid=${API_KEY}`

	axios
		.get(API)
		.then(function (response) {
			data = response.data
			cityName.textContent = data.name
			weather.textContent = data.weather[0].main
			temperature.textContent = (data.main.temp - 273.15).toFixed(2) + '℃'
			humidity.textContent = data.main.humidity + '%'
			const weatherNumber = data.weather[0].id
			if (weatherNumber > 800) {
				photo.src = './img/cloud.png'
			} else if (weatherNumber == 800) {
				photo.src = './img/sun.png'
			} else if (weatherNumber > 700) {
				photo.src = './img/fog.png'
			} else if (weatherNumber >= 600) {
				photo.src = './img/ice.png'
			} else if (weatherNumber >= 500) {
				photo.src = './img/rain.png'
			} else if (weatherNumber >= 300 && weatherNumber < 322) {
				photo.src = './img/drizzle.png'
			} else if (weatherNumber >= 200) {
				photo.src = './img/thunderstorm.png'
			} else {
				photo.src = './img/unknown.png'
			}

			warning.textContent = ''
			input.value = ''
		})
		.catch(function (error) {
			warning.textContent = 'Nieprawidłowa nazwa miasta'
		})
}

button.addEventListener('click', checking)
addEventListener('keypress', function (e) {
	if (e.key === 'Enter') {
		button.click()
	}
})
