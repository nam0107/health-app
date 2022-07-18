import React from 'react';
import styles from './styles.module.css';

import HomeItem from '../../component/homeItem';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import { useGetMeal, useGetAchievementRate } from '../../queries/home';
import ProgressProvider from '../../component/progressProvider';
import BodyChart from '../../component/bodyChart';
import { DateTime } from "luxon";

function Home() {
  const { data: listMeal, isFetched: isFetchedMeal } = useGetMeal();
  const { data: achievementRate, isFetched: isFetchedAchievementRate } =
    useGetAchievementRate();
  return (
    <>
      <div className={styles.banner}>
        <div className={styles.foodBannerImageBox}>
          <div style={{ width: '35%' }}>
            {isFetchedAchievementRate && (
              <ProgressProvider
                valueStart={0}
                valueEnd={achievementRate[0]?.percentage}
              >
                {(value) => (
                  <CircularProgressbarWithChildren
                    value={value}
                    styles={{
                      root: {},
                      path: {
                        stroke: `white`,
                        strokeLinecap: 'butt',
                        transition: 'stroke-dashoffset 0.5s ease 0s',
                        transformOrigin: 'center center',
                        strokeWidth: '2px',
                      },
                      trail: {
                        stroke: 'none',
                        strokeLinecap: 'butt',
                        transformOrigin: 'center center',
                      },
                      text: {
                        fill: 'white',
                        fontSize: '16px',
                      },
                      background: {
                        fill: '#3e98c7',
                      },
                    }}
                  >
                    <div className={styles.circleNumber}>
                      {DateTime.fromSeconds(achievementRate[0]?.time||'').toFormat('dd/MM')} <span style={{ fontSize: '30px' }}>{value}%</span>
                    </div>
                  </CircularProgressbarWithChildren>
                )}
              </ProgressProvider>
            )}
          </div>
        </div>

        <div className={styles.graphBannerBox}>
          <BodyChart />
        </div>
      </div>
      <div className={styles.body}>
        <div className={styles.list_hexBox}>
          <div className={styles.hexBox}>
            <img
              alt=''
              className={styles.hex}
              src={'/images/hex_morning.png'}
            />
          </div>
          <div className={styles.hexBox}>
            <img alt='' className={styles.hex} src={'/images/hex_lunch.png'} />
          </div>
          <div className={styles.hexBox}>
            <img alt='' className={styles.hex} src={'/images/hex_dinner.png'} />
          </div>
          <div className={styles.hexBox}>
            <img alt='' className={styles.hex} src={'/images/hex_snack.png'} />
          </div>
        </div>
        {isFetchedMeal && (
          <div className={styles.listItemBox}>
            {listMeal.map((meal) => {
              return (
                <HomeItem
                  key={meal.id}
                  imgSrc={meal.imgSrc}
                  content={meal.content}
                />
              );
            })}
          </div>
        )}
        <div className={styles.body_buttonBox}>
          <div className={styles.body_button}>記録をもっと見る</div>
        </div>
      </div>
    </>
  );
}

export default Home;
