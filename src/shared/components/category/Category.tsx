import * as styles from '@shared/components/category/Category.css';
import Text from '@shared/components/text/Text';
import type { CategoryType } from '@shared/constant/categories.ts';

interface CategoryProps {
  text: CategoryType;
  type?: 'outline' | 'normal';
}

function Category({ text, type = 'normal' }: CategoryProps) {
  const isOutline = type === 'outline';

  return (
    <div className={styles.categoryWrapper({ type })}>
      <Text tag="body_bold_12" color={isOutline ? 'baroBlue' : 'white'}>
        {text}
      </Text>
    </div>
  );
}

export default Category;
