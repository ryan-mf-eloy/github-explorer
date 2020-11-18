interface Theme {
  [propName: string]: {
    backgroundColor: string;
    primaryColor?: string;
    secondaryColor?: string;
    textColor: string;
    iconColor: string;
  }
}

const themes: Theme = {
  dark: {
    backgroundColor: '#1e2124',
    primaryColor: '#2C2F33',
    secondaryColor: '#ffffff',
    textColor: '#cecece',
    iconColor: '#99aab5'
  },
  light: {
    backgroundColor:'#f0f0f5',
    primaryColor: '#ffffff',
    secondaryColor: '#3a3a3a',
    textColor: '#a8a8b3',
    iconColor: '#393946'
  }
};

export default themes;