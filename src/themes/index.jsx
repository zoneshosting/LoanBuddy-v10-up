import { createTheme } from '@mui/material/styles';
import componentStyleOverrides from './compStyleOverride';
import themePalette from './palette';
import themeTypography from './typography';
import { createThemeOptions } from './utils/themeOptions';

const theme = (customization) => {
  const themeOption = createThemeOptions(customization);

  return createTheme({
    direction: 'ltr',
    palette: themePalette(themeOption),
    mixins: {
      toolbar: {
        minHeight: '48px',
        padding: '16px',
        '@media (min-width: 600px)': {
          minHeight: '48px'
        }
      }
    },
    typography: themeTypography(themeOption),
    components: componentStyleOverrides(themeOption)
  });
};

export default theme;