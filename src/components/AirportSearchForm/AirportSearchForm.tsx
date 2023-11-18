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
  const [showInstructions, setShowInstructions] = useState(false);
  const [value, setValue] = useState<string>("");

  useEffect(() => {
    setValue(initialValue || "");
  }, [initialValue]);

  const handleChange = (event: FormEvent<HTMLInputElement>) => {
    if (debounceTimer) {
      clearTimeout(debounceTimer);
    } else {
      setShowInstructions(false);
      onStartTyping();
    }

    const newValue = event.currentTarget.value;
    setValue(newValue);

    const newDebounceTimer = setTimeout(() => {
      setDebounceTimer(undefined);

      if (!isSearchTermValid(newValue)) {
        setShowInstructions(true);
        onSearch("");
        return;
      }

      setShowInstructions(false);
      onSearch(newValue);
    }, 1000);
    setDebounceTimer(newDebounceTimer);
  };

  return (
    <div>
      <input
        className={styles.input}
        onChange={handleChange}
        placeholder="Destination airport"
        value={value}
      />
      {showInstructions && (
        <p className={styles.instructions}>
          Please fill in, at least, three characters
        </p>
      )}
    </div>
  );
};
