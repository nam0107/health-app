import styles from './styles.module.css';

const MyExerciseItem = (props) => {
  const { content, time, kcal } = props;
  return (
    <div className={styles.contentBoxWrapper}>
      <div className={styles.contentBox}>
        <div className={styles.contentLeft}>
          <li className={styles.contentLeftName}>
            {content}
            <div className={styles.contentLeft_number}>{kcal}</div>
          </li>
        </div>
        <div className={styles.contentRight}>{time}</div>
      </div>
    </div>
  );
};

export default MyExerciseItem;
