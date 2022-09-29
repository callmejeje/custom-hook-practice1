import "./styles.css";
import { useFetch } from "./util/useFetch";

export default function App() {
  let data = useFetch();

  return (
    <div className="App">
      <h1>To do List</h1>
      <div className="todo-list">
        {data &&
          data.todo.map((el) => {
            return <li key={el.id}>{el.todo}</li>;
          })}
      </div>
    </div>
  );
}
