"use client";
import { useEffect, useState } from "react";
import { useFlights } from "@app/app/page.hooks";
import { AirportSearchForm } from "@app/components/AirportSearchForm/AirportSearchForm";
import { FlightList } from "@app/components/FlightList/FlightList";
import { getSearchQuery, setSearchQuery } from "@app/app/page.utils";

import "./globals.css";
import { Header } from "@app/components/Header/Header";
import styles from "./page.module.scss";
import { IconAndMessage } from "@app/components/IconAndMessage/IconAndMessage";
import ErrorIcon from "@mui/icons-material/Error";
export default function Home() {
  const [initialValue, setInitialValue] = useState<string>();
  const [showFlightList, setShowFlightList] = useState(false);
  const [searchTerm, setSearchTerm] = useState<string>("");

  const { flights, hasError } = useFlights(searchTerm);

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
    setSearchQuery(newSearchTerm);
    setSearchTerm(newSearchTerm);
    setShowFlightList(newSearchTerm.trim().length > 0);
  };

  const handleStartTyping = () => {
    setShowFlightList(true);
    setSearchTerm("");
  };

  return (
    <main className={styles.main}>
      <Header />
      <AirportSearchForm
        initialValue={initialValue}
        onSearch={handleSearch}
        onStartTyping={handleStartTyping}
      />
      {hasError ? (
        <IconAndMessage
          icon={<ErrorIcon className={styles.errorIcon} />}
          message="Something went wrong while retrieving the flights. Please try again later."
        />
      ) : (
        showFlightList && (
          <div className={styles.flightListContainer}>
            <FlightList flights={flights} />
          </div>
        )
      )}
    </main>
  );
}
