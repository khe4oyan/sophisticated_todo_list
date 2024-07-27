// libs
import { Flex, Empty } from "antd";

// components
import TodoCard from "../TodoCard/TodoCard";

export default function ShowTodosWithFilters({ selectedFilters, todos }) {
  let filteredTodos = [];

  // list filtering
  if (selectedFilters.length === 0) {
    filteredTodos = todos;
  } else {
    for (let i = 0; i < todos.length; ++i) {
      const todo = todos[i];
      const { todoStatus, category, priority } = todo;
      if (
        selectedFilters.includes(todoStatus) ||
        selectedFilters.includes(category) ||
        selectedFilters.includes(priority)
      ) {
        filteredTodos.push(todo);
      }
    }
  }

  return (
    <Flex wrap vertical style={{ margin: "10px 0" }} gap="10px">
      {filteredTodos.length < 1 ? (
        <Empty
          description="Add your first todo!"
          image={Empty.PRESENTED_IMAGE_SIMPLE}
        />
      ) : (
        filteredTodos.map((todo, i) => (
          <TodoCard key={i} todoData={todo} ind={i} />
        ))
      )}
    </Flex>
  );
}
