const API_KEY = 'd94bcd435b62a031771c35633f9f310a'
const OPENWEATHER_URL = "https://api.openweathermap.org/data/2.5/forecast/daily"

export const forecast = (location) => `${OPENWEATHER_URL}?q=${location}&units=metric&cnt=7&appid=${API_KEY}`