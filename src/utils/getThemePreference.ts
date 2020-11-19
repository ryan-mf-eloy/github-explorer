const getThemePreference = (): string | null => localStorage.getItem('themePreference');

export default getThemePreference;