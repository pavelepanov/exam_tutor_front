import { HomePage } from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import { TaskFind } from "./pages/Task/Find";

function App() {
  return (
      <Routes>
        <Route path="/" element={ <HomePage /> } />
        <Route path="/tasks/find" element={ <TaskFind /> } />
      </Routes>
  );
}

export default App;
