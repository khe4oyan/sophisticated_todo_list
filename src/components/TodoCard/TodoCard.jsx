// libs
import styled from "styled-components";
import { Typography, Button, Flex } from "antd";
const { Title, Paragraph } = Typography;

const Root = styled.div`
  border: 1px solid #0003;
  padding: 10px;
  border-radius: 10px;
  width: fit-content;
  max-width: 200px;
`;

export default function TodoCard({ todoData }) {
  const {
    // id,
    text,
    statusIsDone,
    category,
    priority,
  } = todoData;

  return (
    <Root>
      <Title level={3}>{text}</Title>
      <div>
        <div>status</div>
        <div>category</div>
        <div>priority</div>
      </div>
      <Flex gap="5px">
        <Button>{statusIsDone ? "Undone" : "Done"}</Button>
        <Button danger>Delete</Button>
      </Flex>
    </Root>
  );
}
