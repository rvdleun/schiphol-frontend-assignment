export function filterFlightsByAirport(
  flights: Flight[],
  airportSearch: string,
): Flight[] {
  const search = airportSearch.trim().toLowerCase();
  return flights.filter(({ airport }) =>
    airport.toLowerCase().includes(search),
  );
}

export function getSearchQuery() {
  if (typeof document === "undefined") return null;

  const params = new URL(document.location.href).searchParams;
  return params.get("search");
}

export function updateSearchQuery(value: string) {
  const url = new URL(document.location.href);
  url.searchParams.set("search", value);
  history.pushState(null, "", url.toString());
}
