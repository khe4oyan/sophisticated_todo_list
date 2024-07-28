// libs
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Flex, Empty } from "antd";
import styled from "styled-components";
import DragingHere from "../DragingHere/DragingHere";

// components
import TodoCard from "../TodoCard/TodoCard";

// slices
import { dragTodo } from "../../store/slices/todoSlice";

const Drag = styled.div`
  &.dragging {
    opacity: 0.3;
  }
`;

export default function ShowTodosWithFilters({ selectedFilters, todos }) {
  const dispatch = useDispatch();
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

  const [dragFromInd, setDragFromInd] = useState(-1);
  const [dragToInd, setDragToInd] = useState(-1);

  // handlers
  const handlerOnDragStart = (e, i) => {
    setDragFromInd(i);
  };

  const handlerOnDragEnd = (i) => {
    console.log("end", i, dragFromInd, dragToInd);
    if (dragToInd !== -1 && dragFromInd !== -1) {
      // dispatch from to
      dispatch(dragTodo({ fromInd: dragFromInd, toInd: dragToInd }));
      setDragToInd(-1);
    }

    setDragFromInd(-1);
  };

  const handlerOnDragEnter = (e, i) => {
    e.preventDefault();
    if (i !== dragFromInd && i - 1 !== dragFromInd) {
      setDragToInd(i);
    }
  };

  return (
    <Flex wrap vertical style={{ margin: "10px 0" }} gap="10px">
      {filteredTodos.length < 1 ? (
        <Empty
          description="Add your first todo!"
          image={Empty.PRESENTED_IMAGE_SIMPLE}
        />
      ) : (
        filteredTodos.map((todo, i) => (
          <Drag
            key={i}
            draggable
            onDragStart={(e) => handlerOnDragStart(e, i)}
            onDragEnd={() => handlerOnDragEnd(i)}
            onDragEnter={(e) => handlerOnDragEnter(e, i)}
            className={i === dragFromInd && "dragging"}
          >
            {i === dragToInd && <DragingHere />}
            <TodoCard todoData={todo} ind={i} />
          </Drag>
        ))
      )}
    </Flex>
  );
}
