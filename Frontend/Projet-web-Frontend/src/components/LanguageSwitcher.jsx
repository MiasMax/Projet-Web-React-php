import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' }
  ];

  return (
    <div className="fixed top-20 right-6 z-50">
      <div className="flex flex-col gap-2 bg-white/10 backdrop-blur-md rounded-xl p-2 border border-white/20 shadow-lg">
        {languages.map((lang) => (
          <button
            key={lang.code}
            onClick={() => changeLanguage(lang.code)}
            className={`
              flex items-center gap-2 px-3 py-2 rounded-lg font-medium transition-all duration-300 ease-out
              relative overflow-hidden group min-w-[80px] justify-center
              ${i18n.language === lang.code
                ? 'bg-white/25 text-white shadow-md'
                : 'bg-transparent text-white/80 hover:bg-white/15'
              }
            `}
            title={lang.name}
          >
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            <span className="text-base">{lang.flag}</span>
            <span className="text-xs font-semibold uppercase tracking-wide">
              {lang.code}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default LanguageSwitcher;