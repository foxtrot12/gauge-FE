import { createContext, FC, ReactNode, useContext, useState } from "react";

type TranslationsProviderProps = {
  children: ReactNode;
};

type TranslationsT = { [key: string]: string };

type TranslationContextT = {
  translations: TranslationsT;
  setTranslations: (translations: TranslationsT) => void;
};

const TranslationContext = createContext<TranslationContextT | undefined>(
  undefined
);

export const ProvideTranslations: FC<TranslationsProviderProps> = ({
  children,
}) => {
  const [translations, setTranslations] = useState<TranslationsT>({});

  return (
    <TranslationContext.Provider value={{ translations, setTranslations }}>
      {children}
    </TranslationContext.Provider>
  );
};

export const useTranslations = (): TranslationsT => {
  const translationsCtx = useContext(TranslationContext);

  if (!translationsCtx) {
    throw new Error(`Use useTranslations within Translations provider`);
  }

  return translationsCtx.translations;
};

export const useSetTranslations = () => {
  const translationsCtx = useContext(TranslationContext);

  if (!translationsCtx) {
    throw new Error(`Use useTranslations within Translations provider`);
  }

  return translationsCtx.setTranslations;
};
