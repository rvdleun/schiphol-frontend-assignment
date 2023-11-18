import styles from "./FlightList.module.scss";
import { Loader } from "@app/components/Loader/Loader";
import { IconAndMessage } from "@app/components/IconAndMessage/IconAndMessage";
import { AirplanemodeInactive } from "@mui/icons-material";

interface FlightListProps {
  flights?: Flight[];
}

export const FlightList = ({ flights }: FlightListProps) => {
  if (!flights) {
    return <Loader className={styles.loader} />;
  }

  if (flights.length === 0) {
    return (
      <IconAndMessage
        icon={<AirplanemodeInactive className={styles.emptyFlightList} />}
        message="No flights were found."
      />
    );
  }

  return (
    <table className={`${styles.table} fade-in`}>
      <thead className={styles.head}>
        <tr>
          <th className={styles.hideOnMobile}>Airport</th>
          <th className={styles.hideOnMobile}>Number</th>
          <th className={styles.showOnMobile}>Airport & Number</th>
          <th>Date</th>
          <th>Expected time</th>
        </tr>
      </thead>
      <tbody className={styles.body}>
        {flights.map((flight) => (
          <tr key={flight.flightIdentifier}>
            <td className={styles.hideOnMobile}>{flight.airport}</td>
            <td className={styles.hideOnMobile}>{flight.flightNumber}</td>
            <td className={styles.showOnMobile}>
              <strong>{flight.airport}</strong>
              <br />
              {flight.flightNumber}
            </td>
            <td>{flight.date}</td>
            <td>
              {flight.expectedTime !== flight.originalTime && (
                <span className={styles.originalTime}>
                  {flight.originalTime}
                </span>
              )}{" "}
              {flight.expectedTime}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
