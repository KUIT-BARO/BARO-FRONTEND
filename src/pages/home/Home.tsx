import { useState, useEffect } from 'react';
import * as styles from '@pages/home/Home.css';
import Header from '@shared/components/header/Header';
import Footer from '@shared/components/footer/Footer';
import HomeContainer from '@pages/home/components/homeContainer/HomeContainer';
import { IcLogo } from '@svg/index';
import type { UserHomePageResponseDTO } from 'api/data-contracts';

const LogoutButton = () => {
  return (
    <button
      type='button'
      className={styles.logoutButton}
      onClick={() => console.log('Logout')}
    >
      로그아웃
    </button>
  );
};

export default function Home() {
  const [homeData, setHomeData] = useState<UserHomePageResponseDTO | null>(null);

  const handleMenu = (_menu: string) => {
    console.log(_menu);
  };

  useEffect(() => {
    const fetchHomeData = async () => {
      try {
        setHomeData({});
        console.log('홈 데이터 조회 성공');
      } catch (err) {
        console.error('홈 데이터 조회 실패:', err);
      }
    };
    fetchHomeData();
  }, []);

  return (
    <div className={styles.homeWrapper}>
      <div style={{ position: 'fixed', width: '100%' }}>
        <Header
          background='baroblue'
          leftIcon={IcLogo}
          leftIconType='logo'
          rightIcon={LogoutButton}
        />
      </div>
      <HomeContainer homeData={homeData} />
      <div style={{ position: 'fixed', bottom: 0, width: '100%' }}>
        <Footer
          selectedMenu='HOME'
          handleMenu={handleMenu}
        />
      </div>
    </div>
  );
}
