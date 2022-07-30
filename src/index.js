import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import store,{Persistor} from "./Redux/Store";
import { PersistGate } from "redux-persist/integration/react";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <PersistGate persistor={Persistor}>
      {/* <React.StrictMode> */}
        <App />
      {/* </React.StrictMode> */}
    </PersistGate>
  </Provider>
);
reportWebVitals();
