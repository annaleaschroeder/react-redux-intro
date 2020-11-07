import React from "react";
import { ConnectedList } from "./components/List";
import store from "./app/store";
import { Provider } from "react-redux";

function App() {
  return (
    <div>
      <Provider store={store}>
        <ConnectedList />
      </Provider>
    </div>
  );
}

export default App;
