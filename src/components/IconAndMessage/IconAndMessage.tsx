import { cloneElement, DetailedReactHTMLElement, FC, ReactNode } from "react";
import styles from "./IconAndMessage.module.scss";

interface IconAndMessageProps {
  icon: ReactNode;
  message: string;
}

export const IconAndMessage: FC<IconAndMessageProps> = ({ icon, message }) => {
  // @ts-ignore
  const iconDisplay = cloneElement(icon, {
    // @ts-ignore
    className: `${styles.icon} ${icon.props.className}`,
  });

  return (
    <div className={`${styles.container} fade-in`}>
      <div className={styles.icon}>{iconDisplay}</div>
      <div className={styles.message}>{message}</div>
    </div>
  );
};
