export async function getCountries() {
  const response = await fetch("https://restcountries.com/v3.1/region/americas");

  if (!response.ok) {
    throw new Error("Error al obtener países");
  }

  const data = await response.json();

  return data.map(country => ({
    id: country.cca3,
    title: country.name.common,
    flagUrl: country.flags.png,

    capital: country.capital?.[0] ?? "No disponible",
    population: country.population,
    region: country.region,
    subregion: country.subregion ?? "—",
    languages: country.languages
      ? Object.values(country.languages).join(", ")
      : "No disponible",
    currencies: country.currencies
      ? Object.values(country.currencies)
          .map(c => c.name)
          .join(", ")
      : "No disponible",
  }));
}
