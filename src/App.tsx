import { HomePage } from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import { TaskFind } from "./pages/Task/Find";
import { Task } from "./pages/Task/Task";

function App() {
  return (
      <Routes>
        <Route path="/" element={ <HomePage /> } />
        <Route path="/tasks/find" element={ <TaskFind /> } />
        <Route path="/tasks/:FindCode" element={ <Task /> } />
      </Routes>
  );
}

export default App;
