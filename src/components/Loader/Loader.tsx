import AutorenewIcon from "@mui/icons-material/Autorenew";
import styles from "./Loader.module.scss";
import { FC } from "react";

interface LoaderProps {
  className?: string;
}

export const Loader: FC<LoaderProps> = ({ className }) => {
  return (
    <div className="fade-in">
      <AutorenewIcon className={`${styles.icon} ${className}`} />
    </div>
  );
};
