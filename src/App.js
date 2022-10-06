import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header/Header";
import MyRouter from "./router/MyRouter";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <MyRouter />
      </BrowserRouter>
    </>
  );
}

export default App;
