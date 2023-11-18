import { describe, expect, it } from "@jest/globals";
import { flightFactory } from "@app/interfaces/flight.interface.factory";
import { filterFlightsByAirport } from "@app/app/page.utils";

describe("filterFlightsByAirport", () => {
  const flights: Flight[] = [
    flightFactory.build({ airport: "Amsterdam" }),
    flightFactory.build({ airport: "Coruscant" }),
    flightFactory.build({ airport: "London" }),
    flightFactory.build({ airport: "Rotterdam" }),
    flightFactory.build({ airport: "San Francisco" }),
  ];

  it("should be able to return the right results when searching for an airport", () => {
    expect(filterFlightsByAirport(flights, "rot")).toEqual([flights[3]]);
    expect(filterFlightsByAirport(flights, "t")).toEqual([
      flights[0],
      flights[1],
      flights[3],
    ]);
    expect(filterFlightsByAirport(flights, "sAn FranCisCO")).toEqual([
      flights[4],
    ]);
    expect(filterFlightsByAirport(flights, " London ")).toEqual([flights[2]]);
    expect(filterFlightsByAirport(flights, "")).toEqual(flights);
  });
});
