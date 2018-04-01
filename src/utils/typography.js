import Typography from 'typography';
import noriegaTheme from 'typography-theme-noriega';

noriegaTheme.overrideThemeStyles = ({ rhythm }) => ({
  'h2, h3': {
    marginBottom: rhythm(0),
  },
});

const typography = new Typography(noriegaTheme);

export default typography;
