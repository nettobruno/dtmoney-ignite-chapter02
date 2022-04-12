import { Container } from "./styles";
import { useTheme } from "../../hooks/useTheme";
import sunImage from '../../assets/sun.png';
import moonImage from '../../assets/moon.png'


export function ToggleSwitch() {
  const { toggleTheme, theme } = useTheme();

  const handleToggleTheme = () => {
    toggleTheme();
  };

  return (
    <Container>
      <button onClick={handleToggleTheme}>
        <span style={{ display: theme.name === "light" ? "none" : "flex" }}>
          <img src={sunImage} alt="Icon Sun" />
        </span>

        <span style={{ display: theme.name === "dark" ? "none" : "flex" }}>
        <img src={moonImage} alt="Icon Moon" />
        </span> 
      </button>
    </Container>
  );
};