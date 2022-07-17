import styles from './styles.module.css';

const RecomendItem = (props) => {
  const { imgSrc, time, content, tag } = props;
  return (
    <div className={styles.itemBox}>
      <div className={styles.item}>
        <img alt='' className={styles.itemImage} src={imgSrc} />
        <div className={styles.itemName}>{time}</div>
      </div>
      <div className={styles.itemContent}>
      {content}
      </div>
      <div className={styles.itemHashtag}>{tag}</div>
    </div>
  );
};

export default RecomendItem;
