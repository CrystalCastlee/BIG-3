import ReactDOM from "react-dom/client";

import { App } from "./App";
import { GlobalStyles } from "./ui/GlobalStyles";
import { BrowserRouter } from "react-router-dom";

import { store } from "./redux/Auth/store";
import { Provider } from "react-redux";

const rootElement = document.getElementById("root");
if (rootElement) {
  const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
  );

  root.render(
    <BrowserRouter>
      <Provider store={store}>
        <GlobalStyles />
        <App />
      </Provider>
    </BrowserRouter>
  );
}
