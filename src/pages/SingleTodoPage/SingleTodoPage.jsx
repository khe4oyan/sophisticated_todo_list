// libs
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Typography from "antd/es/typography/Typography";
import { Select, Space } from "antd";

// constant data
import PRIORITIES from "../../data/priority";

const Root = styled.div`
  padding: 10px;
  width: fit-content;
  margin: auto;
`;

const TodoCard = styled.div`
  padding: 10px;
  border: 1px solid #0003;
  border-radius: 5px;
`;

export default function SingleTodoPage() {
  const { todoInd } = useParams();
  const { allTodo } = useSelector((s) => s.todoSlice);
  const { Title } = Typography;
  const { categories } = useSelector((s) => s.categorySlice);

  const todoData = allTodo[todoInd];

  const statusOptions = [
    {
      label: "Done",
      value: true,
    },
    {
      label: "Undone",
      value: false,
    },
  ];

  return (
    <Root>
      {todoData ? (
        <TodoCard>
          <Title editable level={3}>
            {todoData.text}
          </Title>

          <Space direction="vertical" style={{width: "100%"}}>
            Status:
            <Select
              defaultValue={todoData.statusIsDone}
              options={statusOptions}
              style={{ width: "100%" }}
            />

            Category:
            <Select
              defaultValue={todoData.category}
              options={categories}
              style={{ width: "100%" }}
            />

            Priority:
            <Select
              defaultValue={todoData.priority}
              options={PRIORITIES}
              style={{ width: "100%" }}
            />
          </Space>
        </TodoCard>
      ) : (
        <div>Wrong param "{todoInd}" is not a valid parameter</div>
      )}
    </Root>
  );
}
