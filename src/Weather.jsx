import React from 'react'

function Weather({ city, temperatureC, condition }) {
    return (
        <>
            <h1>10. Weather Report Component</h1>
            <ul>
                <li>City Name = {city}</li>
                <li>Temperature = {temperatureC}</li>
                <li>Condition = {condition}</li>
                <li>Fahrenheit = {(temperatureC * 9 / 5) + 32}</li>
            </ul>
          
        </>
    )
}

export default Weather
