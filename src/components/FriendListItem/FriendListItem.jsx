import clsx from "clsx";
import styles from "./FriendListItem.module.css";
export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <div className={styles.item}>
      <img src={avatar} alt={name} width="48" />
      <p>{name}</p>
      <p
        className={clsx({
          [styles.online]: isOnline,
          [styles.offline]: !isOnline,
        })}
      >
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
}
