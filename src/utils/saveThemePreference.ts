const saveThemePreference = (selectedTheme: string): void =>
    localStorage.setItem('themePreference', selectedTheme); 

export default saveThemePreference;