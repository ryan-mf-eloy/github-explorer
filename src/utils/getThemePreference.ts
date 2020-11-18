const getThemePreference = (): string | null => window.localStorage.getItem('themePreference');

export default getThemePreference;