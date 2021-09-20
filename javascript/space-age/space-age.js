const earth_year = 31557600;

const planets = {
  "mercury": earth_year * 0.2408467,
  "venus": earth_year * 0.61519726,
  "earth": earth_year,
  "mars": earth_year * 1.8808158,
  "jupiter": earth_year * 11.862615,
  "saturn": earth_year * 29.447498,
  "uranus": earth_year * 84.016846,
  "neptune": earth_year * 164.79132
}

export const age = (planet, seconds) => {

  return Number((seconds / planets[planet]).toFixed(2));
}