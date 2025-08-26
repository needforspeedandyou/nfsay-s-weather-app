const cityInput = document.getElementById("cityInput")
const sumbitBtn = document.getElementById("sumbitBtn")
const weatherDiv = document.getElementById("weather")
const API_KEY = "5022ba61d87c403387a95522252508"

sumbitBtn.addEventListener("click", async () => {
    const city = cityInput.value
    try {
        const res = await fetch(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`)

        if (!res) throw new Error("City is not found")

        const data = await res.json()
        console.log(data)
        weatherDiv.innerHTML = `
        <div>
            <h2>${data.location.name}, ${data.location.country}</h2>
            <p>Temperature: ${data.current.temp_c} °C</p>
            <p>Clouds: ${data.current.cloud}</p>
            <span style="display: flex; align-items: center; gap: 6px;">
                <p>Condition: ${data.current.condition.text} </p><img style="height: 32px;" alt="" src="${data.current.condition.icon}"/>
            </span>
            <p>Wind: ${data.current.wind_kph} km/h, direction - ${data.current.wind_dir}</p>
        </div>
        `

    } catch (error) {
        console.log(error)
    }

})

