import styles from "./styles.module.css";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";


const Header = () => {
  const [showDropDown, setShowDropDown] = useState(false);
  const show = showDropDown ? styles.show : '';
  const dropDownRef = useRef(null);
  const hideDropDown = (event) => {
    if (dropDownRef.current && !dropDownRef.current?.contains(event.target)) {
      setShowDropDown(false);
    }
  }
  useEffect(() => {
    window.addEventListener('click', hideDropDown);
    return () => {
      window.removeEventListener('click', hideDropDown);
    }
  }, [])
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
          <div className={styles.buttonListBox} ref={dropDownRef}>
            {showDropDown ? <img alt='' className={styles.button_icon1} src={"/images/icon_close.png"} onClick={() => setShowDropDown(showDropDown => !showDropDown)
            } /> : <img alt='' className={styles.button_icon} src={"/images/icon_menu.png"} onClick={() => setShowDropDown(showDropDown => !showDropDown)
            } />}

            <div className={`${styles.listButtonDropDown} ${show}`} >
              <div className={styles.buttonDropDownBox}>
                <div className={styles.buttonDropDown}>
                  自分の記録
                </div>
              </div>
              <div className={styles.buttonDropDownBox}>
                <div className={styles.buttonDropDown}>
                  体重グラフ
                </div>
              </div>
              <div className={styles.buttonDropDownBox}>
                <div className={styles.buttonDropDown}>
                  目標
                </div>
              </div>
              <div className={styles.buttonDropDownBox}>
                <div className={styles.buttonDropDown}>
                  選択中のコース
                </div>
              </div>
              <div className={styles.buttonDropDownBox}>
                <div className={styles.buttonDropDown}>
                  コラム一覧
                </div>
              </div>
              <div className={styles.buttonDropDownBox}>
                <div className={styles.buttonDropDown}>
                  設定
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header;