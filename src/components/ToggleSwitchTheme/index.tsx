import { Container } from "./styles";
import { useTheme } from "../../hooks/useTheme";
import useSound from 'use-sound';
import switchSound from '../../assets/switch.mp3';

export function ToggleSwitchTheme() {
  const { toggleTheme, theme } = useTheme();
  const [play] = useSound(switchSound);

  const handleToggleTheme = () => {
    play();
    toggleTheme();
  };

  return (
    <Container>
      <span style={{ color: theme.name === "light" ? "#F6BA05" : "grey" }}>
        ☀︎
      </span>

      <div className="switch-checkbox">
        <label className="switch">
          <input type="checkbox" onChange={handleToggleTheme} />
          <span className="slider round"></span>
        </label>
      </div>

      <span style={{ color: theme.name === "dark" ? "#c96dfd" : "grey" }}>
        ☽
      </span>
    </Container>
  );
};