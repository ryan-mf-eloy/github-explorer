import React, { useState, useEffect } from 'react';
import Routes from './routes';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import getThemePreference from './utils/getThemePreference';

import { FiSun } from 'react-icons/fi';
import { SetThemeButton } from './pages/Dashboard/styles';

import themes from './styles/themes';
import GlobalStyles from './styles/global';
import saveThemePreference from './utils/saveThemePreference';

const App = () => {
  const [theme, setTheme] = useState<string>('dark');

  useEffect(() => {
    const themePreference = getThemePreference();
    themePreference ? setTheme(themePreference) : setTheme('dark');
  }, []);

  const handleTheme = (): void => {
    const selectedTheme = theme === 'dark' ? 'light' : 'dark';

    setTheme(selectedTheme);
    saveThemePreference(selectedTheme);
  }

  return (
    <ThemeProvider theme={themes[theme]}>
      <SetThemeButton onClick={handleTheme}>
        <FiSun size="25" color="#ffffff" />
      </SetThemeButton>

      <GlobalStyles />
      
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

