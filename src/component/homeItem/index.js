

import styles from './styles.module.css';

const HomeItem = (props) => {
  const {imgSrc, content} = props;
  return (
    <div className={styles.itemBox}>
      <div className={styles.item}>
        <img alt='' className={styles.itemImage} src={imgSrc} />
        <div className={styles.itemName}>{content}</div>
      </div>
    </div>
  );
};

export default HomeItem;
