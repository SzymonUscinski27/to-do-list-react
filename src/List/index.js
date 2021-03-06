import "./style.css";

const List = ({ tasks, hideDone, toggleTaskDone, removeTask }) => (
    <ul className="list">
        {tasks.map(task => (
            <li
                key={task.id}
                className={`list__item${task.done && hideDone
                    ? " list__item--hidden"
                    : ""}`
                }
            >
                <button
                    className="list__button list__button--done"
                    onClick={() => toggleTaskDone(task.id)}>
                    {task.done ? "✓" : ""}
                </button>
                <span className={
                    `list__taskContent${task.done ? " list__taskContent--done" : ""}`
                }
                >
                    {task.content}
                </span>
                <button
                    className="list__button list__button--remove"
                    onClick={() => removeTask(task.id)}>
                    🗑
                </button>
            </li>
        ))}
    </ul>
);

export default List;