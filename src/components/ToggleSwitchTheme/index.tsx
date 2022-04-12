import { Container } from "./styles";
import { useTheme } from "../../hooks/useTheme";

export function ToggleSwitchTheme() {
  const { toggleTheme, theme } = useTheme();

  const handleToggleTheme = () => {
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