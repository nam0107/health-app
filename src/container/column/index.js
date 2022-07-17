import React from 'react';
import styles from './styles.module.css';
import cl1 from '../../image/cl1.png';
import cl2 from '../../image/cl2.png';
import cl3 from '../../image/cl3.png';
import cl4 from '../../image/cl4.png';
import cl5 from '../../image/cl5.png';
import cl6 from '../../image/cl6.png';
import cl7 from '../../image/cl7.png';
import cl8 from '../../image/cl8.png';

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
            imgSrc={cl1}
            time={'2021.05.17 23:25'}
            content={
              '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…'
            }
            tag={"#魚料理 #和食 #DHAƒ"}
          />
          <RecomendItem
            imgSrc={cl2}
            time={'2021.05.17 23:25'}
            content={
              '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…'
            }
            tag={"#魚料理 #和食 #DHAƒ"}
          />
          <RecomendItem
            imgSrc={cl3}
            time={'2021.05.17 23:25'}
            content={
              '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…'
            }
            tag={"#魚料理 #和食 #DHAƒ"}
          />
          <RecomendItem
            imgSrc={cl4}
            time={'2021.05.17 23:25'}
            content={
              '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…'
            }
            tag={"#魚料理 #和食 #DHAƒ"}
          />
          <RecomendItem
            imgSrc={cl5}
            time={'2021.05.17 23:25'}
            content={
              '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…'
            }
            tag={"#魚料理 #和食 #DHAƒ"}
          />
          <RecomendItem
            imgSrc={cl6}
            time={'2021.05.17 23:25'}
            content={
              '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…'
            }
            tag={"#魚料理 #和食 #DHAƒ"}
          />
          <RecomendItem
            imgSrc={cl7}
            time={'2021.05.17 23:25'}
            content={
              '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…'
            }
            tag={"#魚料理 #和食 #DHAƒ"}
          />
          <RecomendItem
            imgSrc={cl8}
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
