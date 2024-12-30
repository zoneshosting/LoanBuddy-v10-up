import { colors, darkColors } from '../constants/colors';

export const createThemeOptions = (customization) => ({
  colors: {
    ...colors,
    ...darkColors
  },
  heading: colors.grey900,
  paper: colors.paper,
  backgroundDefault: colors.paper,
  background: colors.primaryLight,
  darkTextPrimary: colors.grey700,
  darkTextSecondary: colors.grey500,
  textDark: colors.grey900,
  menuSelected: colors.secondaryDark,
  menuSelectedBack: colors.secondaryLight,
  divider: colors.grey200,
  customization
});