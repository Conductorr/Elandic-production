import React, { ReactNode, useState, useCallback } from 'react';
import GlobalStyles from '../styles/themes/globalStyles';
import { Header, Sidebar, Footer } from 'components';
import 'styles/themes/main.scss';

type Props = {
  children: ReactNode;
};

function Layout({ children }: Props): JSX.Element {
  const [isOpenedSidebar, setIsOpenedSidebar] = useState<boolean>(false);

  const handleToggleSidebar = useCallback(() => {
    setIsOpenedSidebar((prevState) => !prevState);
  }, []);

  return (
    <>
      <GlobalStyles />
      <Header
        onToggleSidebar={handleToggleSidebar}
        isOpenedSidebar={isOpenedSidebar}
      />
      <Sidebar
        isOpenedSidebar={isOpenedSidebar}
        onToggleSidebar={handleToggleSidebar}
      />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
