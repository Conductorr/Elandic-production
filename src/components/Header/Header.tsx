import React, { memo } from 'react';
import classNames from 'classnames';
import { useI18next, Link as GatsbyLink } from 'gatsby-plugin-react-i18next';
import { Squash as Hamburger } from 'hamburger-react';
import { Icon, Link } from 'modules';
import { logo } from 'assets/svg';
import * as styles from './Header.module.scss';

type Props = {
  isOpenedSidebar: boolean;
  onToggleSidebar: () => void;
};

function Header({ isOpenedSidebar, onToggleSidebar }: Props): JSX.Element {
  const { originalPath, language } = useI18next();

  return (
    <div className={styles.header}>
      <div className={classNames(styles.logo, styles.logo_upper)}>
        <Hamburger
          color={isOpenedSidebar ? 'black' : 'white'}
          duration={0.9}
          toggled={isOpenedSidebar}
          onToggle={onToggleSidebar}
        />
      </div>
      <GatsbyLink to="/" className={styles.logo}>
        <Icon
          className={styles.logo__icon}
          viewBox={logo.viewBox}
          path={logo.path}
        />
      </GatsbyLink>
      <div className={styles.languages}>
        <Link
          isDisabled={language === 'en'}
          theme="white"
          to={originalPath}
          language="en"
        >
          EN
        </Link>
        <span className={styles.separator}>|</span>
        <Link
          isDisabled={language === 'ru'}
          theme="white"
          to={originalPath}
          language="ru"
        >
          RU
        </Link>
      </div>
    </div>
  );
}

export default memo(Header);
