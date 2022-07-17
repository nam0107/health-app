import logo from "../../image/logo.png";
import list from "../../image/list.png";
import star from "../../image/star.png";
import icon_info from "../../image/icon_info.png";
import icon_menu from "../../image/icon_menu.png";

import styles from "./styles.module.css";


const Header = () => {
    return (
        <div className={styles.header}>
        <div className={styles.headerBox}>
          <div className={styles.header_left}>
            <img alt='' src={logo} className={styles.mainLogo} />
          </div>
          <div className={styles.header_right}>
            <div className={styles.buttonBox}>
              <div className={styles.button_iconBox}>
                <img alt='' className={styles.button_icon} src={list} />
              </div>
              <div className={styles.button_buttonName}>自分の記録</div>
            </div>
            <div className={styles.buttonBox}>
              <div className={styles.button_iconBox}>
                <img alt='' className={styles.button_icon} src={star} />
              </div>
              <div className={styles.button_buttonName}>チャレンジ</div>
            </div>
            <div className={styles.buttonBox}>
              <div className={styles.button_iconBox}>
                <img alt='' className={styles.button_icon} src={icon_info} />
              </div>
              <div className={styles.button_buttonName}>お知らせ</div>
            </div>
            <div className={styles.buttonListBox}>
              <img alt='' className={styles.button_icon} src={icon_menu} />
            </div>
          </div>
        </div>
      </div>
    )
}

export default Header;