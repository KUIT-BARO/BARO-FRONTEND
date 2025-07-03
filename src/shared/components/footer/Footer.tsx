import { MENUS } from '@shared/components/footer/constant/footerMenu';
import * as styles from '@shared/components/footer/Footer.css';
import Text from '@shared/components//text/Text';

interface FooterProps {
  selectedMenu: string;
  handleMenu: (_id: string) => void;
}

function Footer({ selectedMenu, handleMenu }: FooterProps) {
  return (
    <div className={styles.footerWrapper}>
      {MENUS.map(menu => {
        const isSelected = selectedMenu === menu.id;
        const iconToRender = isSelected ? (menu.iconClick ?? menu.icon) : menu.icon;

        return (
          <button
            key={menu.id}
            type="button"
            onClick={() => handleMenu(menu.id)}
            className={styles.menuWrapper}
          >
            {iconToRender}
            {menu.text && (
              <Text tag="body_10" color={isSelected ? 'black' : 'gray1'}>
                {menu.text}
              </Text>
            )}
          </button>
        );
      })}
    </div>
  );
}

export default Footer;
