// libs
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import Typography from "antd/es/typography/Typography";
import { Select, Space } from "antd";

// constant data
import PRIORITY_OPTIONS from "../../data/priorityOptions";
import STATUS_OPTIONS from "../../data/statusOptions";

// slices
import {
  editTodoText,
  editTodoStatus,
  editTodoCategory,
  editTodoPriority,
} from "../../store/slices/todoSlice";

const Root = styled.div`
  padding: 10px;
  width: fit-content;
  margin: auto;
`;

const TodoCard = styled.div`
  padding: 10px;
  border: 1px solid #0003;
  border-radius: 5px;
  min-width: 250px;
`;

export default function SingleTodoPage() {
  const { todoInd } = useParams();
  const { allTodo } = useSelector((s) => s.todoSlice);
  const { Title, Text } = Typography;
  const { categories } = useSelector((s) => s.categorySlice);

  const dispatch = useDispatch();

  const todoData = allTodo[todoInd];

  // handlers
  const textChangeHandle = (changedText) => {
    const formatedText = changedText.trim();
    if (formatedText) {
      const newData = { todoInd, newValue: changedText };
      dispatch(editTodoText(newData));
    }
  };

  const statusChangeHandle = (changedStatus) => {
    const newData = { todoInd, newValue: changedStatus };
    dispatch(editTodoStatus(newData));
  };

  const categoryChangeHandle = (changedCategory) => {
    const newData = { todoInd, newValue: changedCategory };
    dispatch(editTodoCategory(newData));
  };

  const priorityChangeHandle = (changedPriority) => {
    const newData = { todoInd, newValue: changedPriority };
    dispatch(editTodoPriority(newData));
  };

  return (
    <Root>
      {todoData ? (
        <TodoCard>
          <Title editable={{ onChange: textChangeHandle }} level={3}>
            {todoData.text}
          </Title>

          <Space direction="vertical" style={{ width: "100%" }}>
            <Space direction="vertical" style={{ gap: "0" }}>
              <Text>Status:</Text>
              <Select
                defaultValue={todoData.statusIsDone}
                options={STATUS_OPTIONS}
                style={{ width: "100%" }}
                onChange={statusChangeHandle}
              />
            </Space>

            <Space direction="vertical" style={{ gap: "0" }}>
              <Text>Category:</Text>
              <Select
                defaultValue={todoData.category}
                options={categories}
                style={{ width: "100%" }}
                onChange={categoryChangeHandle}
              />
            </Space>

            <Space direction="vertical" style={{ gap: "0" }}>
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
