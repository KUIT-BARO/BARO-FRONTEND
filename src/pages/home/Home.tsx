import * as styles from '@pages/home/Home.css';
import Header from '@shared/components/header/Header';
import Footer from '@shared/components/footer/Footer';
import HomeContainer from '@pages/home/components/homeContainer/HomeContainer';
import { IcLogo } from '@svg/index';
import { homeData } from '@pages/home/mockup';

export default function Home() {
  const handleMenu = (_menu: string) => {
    console.info(_menu);
  };

  const handleLogout = () => {
    console.info('Logout');
  };

  return (
    <div className={styles.homeWrapper}>
      <Header
        background='baroblue'
        leftIcon={IcLogo}
        leftIconType='logo'
        rightIcon={() => (
          <button
            type='button'
            className={styles.logoutButton}
            onClick={handleLogout}
          >
            로그아웃
          </button>
        )}
      />
      <HomeContainer homeData={homeData} />
      <Footer
        selectedMenu='HOME'
        handleMenu={handleMenu}
      />
    </div>
  );
}
