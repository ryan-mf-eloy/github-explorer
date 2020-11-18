const saveThemePreference = (selectedTheme: string): void =>
    window.localStorage.setItem('themePreference', selectedTheme); 

export default saveThemePreference;