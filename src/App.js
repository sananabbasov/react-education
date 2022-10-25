import { useEffect } from "react";
import { Provider, useDispatch } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header/Header";
import { GetByEmailAction } from "./redux/actions/AuthActions";
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
