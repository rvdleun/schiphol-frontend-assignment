import style from "./FlightList.module.scss";

interface FlightListProps {
  flights?: Flight[];
}

export const FlightList = ({ flights }: FlightListProps) => {
  if (!flights) {
    return <p>Loading flights...</p>;
  }

  if (flights.length === 0) {
    return <p>No flights found</p>;
  }

  return (
    <table className={style.table}>
      <thead className={style.head}>
        <tr>
          <th>Identifier</th>
          <th>Number</th>
          <th>Airport</th>
          <th>Date</th>
          <th>Expected time</th>
        </tr>
      </thead>
      <tbody className={style.body}>
        {flights.map((flight) => (
          <tr key={flight.flightIdentifier}>
            <td>{flight.flightIdentifier}</td>
            <td>{flight.flightNumber}</td>
            <td>{flight.airport}</td>
            <td>{flight.date}</td>
            <td>{flight.expectedTime}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
