import React from 'react';
import styles from './styles.module.css';

import RecomenendedBox from '../../component/recomenendedBox';
import RecomendItem from '../../component/recomendItem';

function Column() {
  return (
    <div className={styles.column}>
      <div className={styles.listRecommendedBoxWrapper}>
        <div className={styles.listRecommendedBox}>
          <RecomenendedBox label={'RECOMMENDED COLUMN'} content={'オススメ'} />
          <RecomenendedBox label={'RECOMMENDED DIET'} content={'ダイエット'} />
          <RecomenendedBox label={'RECOMMENDED BEAUTY'} content={'美容'} />
          <RecomenendedBox label={'RECOMMENDED HEALTH'} content={'健康'} />
        </div>
      </div>
      <div className={styles.body}>
        <div className={styles.listItemBox}>
          <RecomendItem
            imgSrc={'/images/cl1.png'}
            time={'2021.05.17 23:25'}
            content={
              '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…'
            }
            tag={"#魚料理 #和食 #DHAƒ"}
          />
          <RecomendItem
            imgSrc={'/images/cl2.png'}
            time={'2021.05.17 23:25'}
            content={
              '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…'
            }
            tag={"#魚料理 #和食 #DHAƒ"}
          />
          <RecomendItem
            imgSrc={'/images/cl3.png'}
            time={'2021.05.17 23:25'}
            content={
              '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…'
            }
            tag={"#魚料理 #和食 #DHAƒ"}
          />
          <RecomendItem
            imgSrc={'/images/cl4.png'}
            time={'2021.05.17 23:25'}
            content={
              '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…'
            }
            tag={"#魚料理 #和食 #DHAƒ"}
          />
          <RecomendItem
            imgSrc={'/images/cl5.png'}
            time={'2021.05.17 23:25'}
            content={
              '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…'
            }
            tag={"#魚料理 #和食 #DHAƒ"}
          />
          <RecomendItem
            imgSrc={'/images/cl6.png'}
            time={'2021.05.17 23:25'}
            content={
              '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…'
            }
            tag={"#魚料理 #和食 #DHAƒ"}
          />
          <RecomendItem
            imgSrc={'/images/cl7.png'}
            time={'2021.05.17 23:25'}
            content={
              '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…'
            }
            tag={"#魚料理 #和食 #DHAƒ"}
          />
          <RecomendItem
            imgSrc={'/images/cl8.png'}
            time={'2021.05.17 23:25'}
            content={
              '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…'
            }
            tag={"#魚料理 #和食 #DHAƒ"}
          />

        </div>
        <div className={styles.body_buttonBox}>
          <div className={styles.body_button}>記録をもっと見る</div>
        </div>
      </div>
    </div>
  );
}

export default Column;
