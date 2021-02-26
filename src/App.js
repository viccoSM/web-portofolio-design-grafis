import Routes from "./config/Route/Routes";
import { store } from "./config/Redux/Store/Store";
import { Provider } from "react-redux";

function App() {
  return (
    <>
      <Provider store={store}>
        <Routes />
      </Provider>
    </>
  );
}

export default App;
