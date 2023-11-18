import { FC, FormEvent, useEffect, useState } from "react";
import styles from "./AirportSearchForm.module.scss";
import { isSearchTermValid } from "@app/components/AirportSearchForm/AirportSearchForm.utils";

interface AirportSearchFormProps {
  initialValue?: string;
  onSearch: (searchTerm: string) => void;
  onStartTyping: () => void;
}

export const AirportSearchForm: FC<AirportSearchFormProps> = ({
  initialValue = "",
  onSearch,
  onStartTyping,
}) => {
  const [debounceTimer, setDebounceTimer] =
    useState<ReturnType<typeof setTimeout>>();
  const [value, setValue] = useState<string>("");

  useEffect(() => {
    setValue(initialValue || "");
  }, [initialValue]);

  const handleChange = (event: FormEvent<HTMLInputElement>) => {
    if (debounceTimer) {
      clearTimeout(debounceTimer);
    } else {
      onStartTyping();
    }

    const newValue = event.currentTarget.value;
    setValue(newValue);

    const newDebounceTimer = setTimeout(() => {
      setDebounceTimer(undefined);
      onSearch(isSearchTermValid(newValue) ? newValue : "");
    }, 1000);
    setDebounceTimer(newDebounceTimer);
  };

  return (
    <input className={styles.input} onChange={handleChange} value={value} />
  );
};
