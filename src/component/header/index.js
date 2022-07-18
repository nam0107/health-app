import styles from "./styles.module.css";
import { Link } from "react-router-dom";
import Menu from "../menu";


const Header = () => {
  
  return (
    <div className={styles.header}>
      <div className={styles.headerBox}>
        <div className={styles.header_left}>
          <img alt='' src={"/images/logo.png"} className={styles.mainLogo} />
        </div>
        <div className={styles.header_right}>
          <Link to={'/myRecord'} className={styles.buttonBox}>
            <div className={styles.button_iconBox}>
              <img alt='' className={styles.button_icon} src={"/images/list.png"} />
            </div>
            <div className={styles.button_buttonName}>自分の記録</div>
          </Link>
          <Link to={'/'} className={styles.buttonBox}>
            <div className={styles.button_iconBox}>
              <img alt='' className={styles.button_icon} src={"/images/star.png"} />
            </div>
            <div className={styles.button_buttonName} >チャレンジ</div>
          </Link>
          <Link to={'/news'} className={styles.buttonBox}>
            <div className={styles.button_iconBox}>
              <img alt='' className={styles.button_icon} src={"/images/icon_info.png"} />
            </div>
            <div className={styles.button_buttonName}>お知らせ</div>
          </Link>
          <Menu/>
        </div>
      </div>
    </div>
  )
}

export default Header;