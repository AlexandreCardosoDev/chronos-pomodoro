import { Home } from "./pages/Home";
import { TaskContextProvider } from "./contexts/TaskContext";

import "./style/global.css";
import "./style/theme.css";

export function App() {
  return (
    <TaskContextProvider>
      <Home />;
    </TaskContextProvider>
  );
}
