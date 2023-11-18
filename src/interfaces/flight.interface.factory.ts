import { each, Sync } from "factory.ts";

export const flightFactory = Sync.makeFactory<Flight>({
  airport: each((i) => `airport ${i}`),
  date: "2023-11-18",
  expectedTime: "14:40",
  flightIdentifier: each(() => Math.floor(Math.random() * 1000000).toString()),
  flightNumber: each((i) => `FN${i.toString().padStart(4, "0")}`),
  originalTime: "14:40",
  score: Math.random().toString(),
  url: `/en/departures/flight/${Math.random().toString()}`,
});
