import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { store } from "./store/store";
import GlobalStyles from "./styles/GlobalStyles";
const container = document.getElementById("root");
if (container) {
    const root = createRoot(container);
    root.render(_jsxs(Provider, { store: store, children: [_jsx(GlobalStyles, {}), _jsx(BrowserRouter, { children: _jsx(App, {}) })] }));
}
else {
    throw new Error("Root element with ID 'root' was not found in the document. Ensure there is a corresponding HTML element with the ID 'root' in your HTML file.");
}
