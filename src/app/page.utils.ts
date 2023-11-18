export function filterFlightsByAirport(
  flights: Flight[],
  airportSearch: string,
): Flight[] {
  const search = airportSearch.trim().toLowerCase();
  return flights.filter(({ airport }) =>
    airport.toLowerCase().includes(search),
  );
}
