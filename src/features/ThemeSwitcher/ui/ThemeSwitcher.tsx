import {classNames} from "shared/lib/classNames/classNames";
import s from './ThemeSwitcher.module.scss'
import {useTheme} from "app/providers/ThemeProvider";
import {Theme} from "app/providers/ThemeProvider/lib/ThemeContext";
import DarkIcon from 'shared/assets/icons/DarkTheme.svg'
import LightIcon from 'shared/assets/icons/LightTheme.svg'
import {Button, ThemeButton} from "shared/ui/Button/Button";

interface ThemeSwitcherProps {
    className?: string
}
export const ThemeSwitcher = ({className}: ThemeSwitcherProps) => {
    const {theme, toggleTheme} = useTheme()
    return (
        <Button
            theme={ThemeButton.CLEAR}
            className={classNames(s.ThemeSwitcher, {}, [className])}
            onClick={toggleTheme}
        >
            {theme === Theme.DARK ? <DarkIcon /> : <LightIcon /> }
        </Button>
    );
};