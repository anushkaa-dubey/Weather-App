function getWeather() {
    let location = document.getElementById("locationInput").value;
    if (!location) {
        alert("Please enter a location!");
        return;
    }

    let apiKey = "53c03d4468924330a79102054250602";
    let url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}&aqi=yes`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.error) {
                document.getElementById("weatherResult").innerHTML = "Location not found!";
                return;
            }
            document.getElementById("weatherResult").innerHTML = `
                <p><strong>Location:</strong> ${data.location.name}, ${data.location.country}</p>
                <p><strong>Temperature:</strong> ${data.current.temp_c}°C</p>
                <p><strong>Condition:</strong> ${data.current.condition.text}</p>
                <img src="${data.current.condition.icon}" alt="Weather Icon">
            `;
        })
        .catch(error => {
            console.error("Error fetching weather data:", error);
            document.getElementById("weatherResult").innerHTML = "Error fetching data!";
        });
}
