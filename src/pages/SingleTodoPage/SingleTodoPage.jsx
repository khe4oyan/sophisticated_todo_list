// libs
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import Typography from "antd/es/typography/Typography";
import { Select, Space, message } from "antd";

// constant data
import PRIORITY_OPTIONS from "../../data/priorityOptions";
import STATUS_OPTIONS from "../../data/statusOptions";

// slices
import {
  toggleTodoStatus,
  editTodoText,
  editTodoCategory,
  editTodoPriority,
} from "../../store/slices/todoSlice";

const Root = styled.div`
  padding: 10px;
  width: fit-content;
  max-width: 400px;
  width: 100%;
  margin: auto;
`;

const TodoCard = styled.div`
  padding: 10px;
  border: 1px solid #0003;
  border-radius: 5px;
  width: 100%;
`;

export default function SingleTodoPage() {
  const { todoInd } = useParams();
  const { allTodo } = useSelector((s) => s.todoSlice);
  const { Title, Text } = Typography;
  const { categories } = useSelector((s) => s.categorySlice);

  const dispatch = useDispatch();

  const [todoData, setTodoData] = useState(allTodo[todoInd]);

  !todoData && message.error("Invalid param");

  // handlers
  const textChangeHandle = (changedText) => {
    const formatedText = changedText.trim();
    if (formatedText) {
      const newData = { todoInd, newValue: changedText };
      setTodoData(prev => ({...prev, text: formatedText}));
      dispatch(editTodoText(newData));
      message.success("Task title changed");
    } else {
      message.error("Enter task title");
    }
  };

  const statusChangeHandle = (changedStatus) => {
    if (changedStatus !== todoData.todoStatus) {
      dispatch(toggleTodoStatus(+todoInd));
      message.success("Task status changed");
    }
  };

  const categoryChangeHandle = (changedCategory) => {
    const newData = { todoInd, newValue: changedCategory };
    dispatch(editTodoCategory(newData));
    message.success("Task category changed");
  };

  const priorityChangeHandle = (changedPriority) => {
    const newData = { todoInd, newValue: changedPriority };
    dispatch(editTodoPriority(newData));
    message.success("Task priority changed");
  };

  return (
    <Root>
      {todoData ? (
        <TodoCard>
          <Title editable={{ onChange: textChangeHandle }} level={3}>
            {todoData.text}
          </Title>

          <Space direction="vertical" style={{ width: "100%" }}>
            <Space direction="vertical" style={{ gap: "0", width: "100%" }}>
              <Text>Status:</Text>
              <Select
                defaultValue={todoData.todoStatus}
                options={STATUS_OPTIONS}
                style={{ width: "100%" }}
                onChange={statusChangeHandle}
              />
            </Space>

            <Space direction="vertical" style={{ gap: "0", width: "100%" }}>
              <Text>Category:</Text>
              <Select
                defaultValue={todoData.category}
                options={categories}
                style={{ width: "100%" }}
                onChange={categoryChangeHandle}
              />
            </Space>

            <Space direction="vertical" style={{ gap: "0", width: "100%" }}>
              <Text>Priority:</Text>
              <Select
                defaultValue={todoData.priority}
                options={PRIORITY_OPTIONS}
                style={{ width: "100%" }}
                onChange={priorityChangeHandle}
              />
            </Space>
          </Space>
        </TodoCard>
      ) : (
        <div>Wrong param "{todoInd}" is not a valid parameter</div>
      )}
    </Root>
  );
}
