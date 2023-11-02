import styles from "./CardEstablishment.module.css";
import img_example from "../../assets/imgs/establishment_example.jpg"

function CardEstablishment({ eventos }) {
  return (
    <content className={styles.content}>
      <img className={styles.img} src={img_example} alt="img-evento" />
      <div className={styles.div}>
        <span className={styles.span_title}>Nome do Evento</span>
        <span className={styles.span_info}>Ibirama</span>
        <span className={styles.span_info}>31/12/2023</span>
      </div>
    </content>
  );
}

export default CardEstablishment;