import { createRoot } from "react-dom/client";

import "../index.scss";

import { TogglesAccessibilityPage } from "../pages/TogglesAccessibilityPage";

const container = document.createElement("div");

document.body.appendChild(container);

createRoot(container).render(<TogglesAccessibilityPage />);
console.log("Current page title:", document.title);
