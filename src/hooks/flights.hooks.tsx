import useSWR from "swr";
import { filterFlightsByAirport } from "@app/app/page.utils";

const fetcher = (input: RequestInfo | URL, init?: RequestInit) =>
  fetch(input, init).then((res) => res.json());

const flightsUrl = process.env.NEXT_PUBLIC_FLIGHTS_URL || "/flights.json";

export interface FlightsRequestResult {
  flights?: Flight[];
  hasError?: boolean;
  isLoading?: boolean;
}

export const useFlights = (searchTerm: string): FlightsRequestResult => {
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
    flights: filterFlightsByAirport(flights, searchTerm).slice(0, 5),
    hasError,
    isLoading,
  };
};
