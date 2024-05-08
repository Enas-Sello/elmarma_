import React from 'react';
import { useTranslation } from 'react-i18next';

const Search = () => {
  const { t } = useTranslation();

  return (
    <div className="p-[.35rem] w-20  lg:w-fit rounded-lg border">
      <input
        type="text"
        name="search"
        id=""
        placeholder={t('search')}
        className="bg-transparent outline-none"
      />
    </div>
  );
};

export default Search;
