import { FlightsRequestResult as FlightsRequestResultData } from "@app/hooks/flights.hooks";
import { FC } from "react";
import { Loader } from "@app/components/Loader/Loader";
import styles from "./FlightsRequestResult.module.scss";
import { IconAndMessage } from "@app/components/IconAndMessage/IconAndMessage";
import { AirplanemodeInactive } from "@mui/icons-material";
import { FlightList } from "@app/components/FlightList/FlightList";
import ErrorIcon from "@mui/icons-material/Error";

interface FlightListResultProps {
  result: FlightsRequestResultData;
}

export const FlightsRequestResult: FC<FlightListResultProps> = ({
  result: { flights, hasError, isLoading },
}) => {
  if (hasError) {
    return (
      <IconAndMessage
        icon={<ErrorIcon className={styles.errorIcon} />}
        message="Something went wrong while retrieving the flights. Please try again later."
      />
    );
  }

  if (isLoading || !flights) {
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

  return <FlightList flights={flights} />;
};
