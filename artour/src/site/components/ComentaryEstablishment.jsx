import { useState } from "react";
import styles from "./ComentaryEstablishment.module.css";

function ComentaryEstablishment({ comentary }) {
  const [user, setUser] = useState(comentary.user);
  const [title, setTitle] = useState(comentary.title);
  const [text, setText] = useState(comentary.content);

  return (
      <div className={styles.content}>
        <h6>{title}</h6>
        <p>{text}</p>
        <p className={styles.user}>Criado por: {user}</p>
      </div>
  );
}

export default ComentaryEstablishment;
