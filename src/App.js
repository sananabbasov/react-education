import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header/Header";
import store from "./redux/store";
import MyRouter from "./router/MyRouter";

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Header />
          <MyRouter />
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
