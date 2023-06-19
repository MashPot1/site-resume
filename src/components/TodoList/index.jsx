import React from "react";
// import Task from "./Task";
import styles from "./TodoList.module.scss";
import { Button, Input } from "antd";

const TodoList = () => {
  const [tasks, setTasks] = React.useState([
    { text: "Первая задача", isEdit: false, isChecked: false },
    { text: "Вторая задача", isEdit: false, isChecked: false },
  ]);

  const deleteTask = (index) => {
    const newTasks = [
      ...tasks.filter((task, i) => {
        return i !== index;
      }),
    ];
    setTasks(newTasks);
  };

  const handleChange = (mode, i, text = "") => {
    const edited = tasks[i];

    if (mode === "isEdit") {
      edited.isEdit = !edited.isEdit;
    } else if (mode === "isChecked") {
      edited.isChecked = !edited.isChecked;
    } else edited.text = text;

    const newTasks = tasks.map((task, index) => {
      if (index === i) {
        return edited;
      }
      return task;
    });
    setTasks(newTasks);
  };
  return (
    <ul className={styles.list}>
      {tasks.length ? (
        <Button onClick={() => setTasks([])} danger>
          Удалить все задачи
        </Button>
      ) : (
        ""
      )}
      {tasks.map((task, index) => (
        <li key={index}>
          {task.isEdit ? (
            <>
              <Input
                defaultValue={task.text}
                className={styles.input}
                onChange={(e) => handleChange("", index, e.target.value)}
              />
              <Button onClick={() => handleChange("isEdit", index)}>
                Сохранить
              </Button>
            </>
          ) : (
            <>
              <span
                className={
                  task.isChecked ? styles.input__checked : styles.input
                }
                onClick={() => {
                  handleChange("isChecked", index);
                }}
              >
                {task.text}
              </span>
              {task.isChecked ? (
                ""
              ) : (
                <Button onClick={() => handleChange("isEdit", index)}>
                  Редактировать
                </Button>
              )}
            </>
          )}

          <Button danger onClick={() => deleteTask(index)}>
            Удалить
          </Button>
        </li>
      ))}
      {tasks.length <= 4 ? (
        <Button
          onClick={() =>
            setTasks([
              ...tasks,
              {
                text: `Новая задача#${tasks.length + 1}`,
                isEdit: false,
                isChecked: false,
              },
            ])
          }
        >
          Добавить задачу
        </Button>
      ) : (
        "Достигнут предел задач"
      )}
    </ul>
  );
};

export default TodoList;
