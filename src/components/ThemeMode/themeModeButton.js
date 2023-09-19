import { GiStrawberry, GiShinyApple } from 'react-icons/gi';
import { useContext } from 'react';
import { ThemeContext } from '../../Context/themeContext';

function ThemeModeButton() {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <button
      type="button"
      onClick={() => {
        if (theme === 'bg-apple') {
          setTheme('bg-strawberry');
        }
        else {
          setTheme('bg-apple');
        }
      }}
      className="rounded  m-1 "
      aria-label={theme === 'bg-apple' ? 'Switch to strawberry theme' : 'Switch to apple theme'}

    >
      {theme === 'bg-apple' ? <GiStrawberry /> : <GiShinyApple />}
    </button>
  );
}

export default ThemeModeButton;
