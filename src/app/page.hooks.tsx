import useSWR from "swr";
import { filterFlightsByAirport } from "@app/app/page.utils";

const fetcher = (input: RequestInfo | URL, init?: RequestInit) =>
  fetch(input, init).then((res) => res.json());

const flightsUrl = process.env.NEXT_PUBLIC_FLIGHTS_URL || "/flights.json";

export const useFlights = (searchTerm: string) => {
  const { data, error, isLoading } = useSWR<FlightApiResponse>(
    searchTerm && flightsUrl,
    fetcher,
  );

  const hasError = !!error;

  if (!data) {
    return { flights: undefined, hasError, isLoading };
  }

  const { flights } = data;

  return {
    flights: filterFlightsByAirport(flights, searchTerm),
    hasError,
    isLoading,
  };
};
