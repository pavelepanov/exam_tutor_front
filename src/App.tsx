import { HeaderSimple } from "./components/header/HeaderSimple";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
      <Routes>
        <Route path="/" element={ <HeaderSimple /> } />
      </Routes>
  );
}

export default App;
