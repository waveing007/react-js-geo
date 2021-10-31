import './App.css';
import SiderBar from './page/side-bar-page/side-bar';
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <SiderBar />
      </BrowserRouter>
      {/* <Login /> */}
    </>
  );
}

export default App;
