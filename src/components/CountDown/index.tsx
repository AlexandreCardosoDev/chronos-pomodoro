import styles from "./styles.module.css";
import { useTaskContext } from "../../contexts/TaskContext";

export function CountDown() {
  const taskContext = useTaskContext();
  console.log(taskContext);

  return <h1 className={styles.container}>00:00</h1>;
}
