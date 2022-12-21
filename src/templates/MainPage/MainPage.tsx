import React, { memo, useCallback, useState } from 'react';
import { Carousel, Categories } from 'components';
import { MainPageHeading } from './MainPageHeading';
import { MainPageAbout } from './MainPageAbout';
import { MainPageBrands } from './MainPageBrands';
import { MainPageEnding } from './MainPageEnding';

function MainPage(): JSX.Element {
  const [isOpenedCategories, setIsOpenedCategories] = useState<boolean>(false);

  const handleToggleCategories = useCallback(() => {
    setIsOpenedCategories((prevState) => !prevState);
  }, []);

  return (
    <>
      <MainPageHeading
        isOpenedCategories={isOpenedCategories}
        onToggleCategories={handleToggleCategories}
      />
      <Categories
        isOpenedCategories={isOpenedCategories}
        onToggleCategories={handleToggleCategories}
      />
      <MainPageAbout />
      <MainPageBrands />
      <Carousel />
      <MainPageEnding />
    </>
  );
}

export default memo(MainPage);
