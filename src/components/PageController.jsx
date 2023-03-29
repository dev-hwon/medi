//eslint-disable
import { useColorTheme } from "../context/ColorTheme";
export default function PageController() {
  const { colortheme, toggleColorTheme } = useColorTheme();
  return (
    <div>
      <h3>아직 어떻게 사용할지 고민중인페이지</h3>
      colorTheme :{" "}
      <span>
        {colortheme === "default" ? "해" : colortheme === "dark" ? "달" : ""}
      </span>
      <button onClick={() => toggleColorTheme()}> toggle</button>
    </div>
  );
}
