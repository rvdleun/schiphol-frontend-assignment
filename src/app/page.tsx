"use client";
import { useEffect, useState } from "react";
import { useFlights } from "@app/hooks/flights.hooks";
import { AirportSearchForm } from "@app/components/AirportSearchForm/AirportSearchForm";
import { getSearchQuery, updateSearchQuery } from "@app/app/page.utils";

import "./globals.css";
import { Header } from "@app/components/Header/Header";
import styles from "./page.module.scss";
import { FlightsRequestResult } from "@app/components/FlightsRequestResult/FlightsRequestResult";

import LogoStorybook from "./assets/logo-storybook.svg";
import Image from "next/image";

export default function Home() {
  const [initialValue, setInitialValue] = useState<string>();
  const [showFlightList, setShowFlightList] = useState(false);
  const [searchTerm, setSearchTerm] = useState<string>("");

  const flightsRequest = useFlights(searchTerm);

  useEffect(() => {
    const searchQuery = getSearchQuery();
    if (!searchQuery) {
      return;
    }

    setInitialValue(searchQuery);
    setShowFlightList(true);
    setSearchTerm(searchQuery);
  }, []);

  const handleSearch = (newSearchTerm: string) => {
    updateSearchQuery(newSearchTerm);
    setSearchTerm(newSearchTerm);
    setShowFlightList(newSearchTerm.trim().length > 0);
  };

  const handleStartTyping = () => {
    setShowFlightList(true);
    setSearchTerm("");
  };

  return (
    <main className={styles.main}>
      {process.env.NEXT_PUBLIC_HAS_STORYBOOK && (
        <a href="/storybook/index.html" className={styles.storybookLogo}>
          <Image alt="Link to storybook" src={LogoStorybook} />
        </a>
      )}
      <Header />
      <AirportSearchForm
        initialValue={initialValue}
        onSearch={handleSearch}
        onStartTyping={handleStartTyping}
      />
      {showFlightList && <FlightsRequestResult result={flightsRequest} />}
    </main>
  );
}
