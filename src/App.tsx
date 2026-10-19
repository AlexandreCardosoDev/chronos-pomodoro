import { TaskContextProvider } from "./contexts/TaskContext/TaskContextProvider";
import { Home } from "./pages/Home";

import "./style/global.css";
import "./style/theme.css";

export function App() {
  return (
    <TaskContextProvider>
      <Home />;
    </TaskContextProvider>
  );
}
