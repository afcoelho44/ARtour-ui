import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import logo from "../../assets/imgs/banner_ibirama.png";

function NavbarPainel() {
  return (
    <nav className={styles.navbar}>
      <img className={styles.img} src={logo} alt="ticketportal_logo" />
      <hr className={styles.hr} />
      <ul className={styles.list}>
        <Link className={styles.a} to="/vendas">
          <li className={styles.item}>Vendas</li>
        </Link>
        <Link className={styles.a} to="/eventos">
          <li className={styles.item}>Eventos</li>
        </Link>
      </ul>
    </nav>
  );
}

export default NavbarPainel;
