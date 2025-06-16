import Toggle from "./components/atoms/Toggle";
import SectionsWrapper from "./components/molecules/SectionsWrapper";
import TogglesAccessibilityPage from "./components/templates/TogglesAccessibilityPage";

function App() {
  return (
    <TogglesAccessibilityPage>
      {/* <h1>Destacar imagens</h1>
      <label class="switch">
        <input type="checkbox" id="toggle" />
        <span class="slider"></span>
      </label> */}
      <SectionsWrapper>
        <Toggle id="toggle" />
      </SectionsWrapper>
    </TogglesAccessibilityPage>
  );
}

export default App;
