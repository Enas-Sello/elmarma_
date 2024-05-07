import initTranslations from '@/app/i18n';
import TranslationsProvider from '@/components/TranslationsProvider';
import React, { ReactNode } from 'react';

const Translation = async ({
  children,
  locale,
  Namespaces
}: {
  children: ReactNode;
  locale: string;
  Namespaces: [string];
}) => {
  const { resources } = await initTranslations(locale, Namespaces);

  return (
    <TranslationsProvider
      namespaces={Namespaces}
      locale={locale}
      resources={resources}>
      {children}
    </TranslationsProvider>
  );
};

export default Translation;
