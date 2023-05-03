import { Provider } from "react-redux";
import store from "./Redux/store";

//  components
import Nav from "./components/Nav";
import Home from "./components/Home";

const App = () => {
  return (
    <Provider store={store}>
      <Nav />
      <Home />
    </Provider>
  );
};

export default App;
