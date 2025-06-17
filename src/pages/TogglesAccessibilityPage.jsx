import Toggle from "../components/atoms/Toggle";
import SectionsWrapper from "../components/molecules/SectionsWrapper";
import TogglesSectionsTemplate from "../components/templates/TogglesListTemplate";

export const TogglesAccessibilityPage = () => {
  return (
    <TogglesSectionsTemplate>
      <SectionsWrapper>
        <Toggle />
      </SectionsWrapper>
    </TogglesSectionsTemplate>
  );
};
