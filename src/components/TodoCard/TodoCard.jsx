// libs
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { Typography, Dropdown } from "antd";

// slices
import { removeTodo } from "../../store/slices/todoSlice";

const { Title } = Typography;

const Root = styled.div`
  min-width: 260px;
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 10px;
  max-width: 300px;
  position: relative;
  overflow: hidden;
  --color: #c0c0c0;
  background: linear-gradient(150deg, #0000 30%, var(--color) 70%, #0006);

  &.high {
    --color: #eeb5b5;
  }
  &.medium {
    --color: #eedbb7;
  }
  &.low {
    --color: #c8eec8;
  }
`;

const TagsStyles = styled.div`
  position: absolute;
  right: 2px;
  padding: 1px 8px;
  border-radius: 10px;
`;

const Priority = styled(TagsStyles)`
  background-color: var(--color);
  border: 1px solid #0003;
  color: #fffe;
  bottom: 26px;

  &.high {
    --color: #e73939;
  }
  &.medium {
    --color: #c5943a;
  }
  &.low {
    --color: #379c37;
  }
`;

const Category = styled(TagsStyles)`
  position: absolute;
  bottom: 2px;
  background-color: white;
  border: 1px solid #0003;
  color: black;
`;

const items = [
  {
    key: "0",
    label: "View",
  },
  {
    key: "1",
    label: "Edit",
  },
  {
    key: "2",
    label: "Delete",
    danger: true,
  },
];

export default function TodoCard({ todoData, ind }) {
  const dispatch = useDispatch();

  const {
    // id,
    text,
    statusIsDone,
    category,
    priority,
  } = todoData;

  const onMenuClick = () => {
    console.log("click");
  };
  
  const onMenuItemClick = (e) => {
    const key = +e.key;
    switch(key) {
      case 0:
        break; 
      case 1:
        break; 
      case 2:
        dispatch(removeTodo(ind));
        break; 
      default: 
        console.error("Undefined menu item click");
    }
  };

  const lowecasePriority = priority.toLowerCase();

  return (
    <Root className={statusIsDone || lowecasePriority}>
      <Title level={3} style={statusIsDone && {textDecorationLine: "line-through", color: "gray"}}>{text}</Title>
      <Dropdown.Button
        menu={{
          items,
          onClick: onMenuItemClick,
        }}
        onClick={onMenuClick}
      >
        {statusIsDone ? "Undone" : "Done"}
      </Dropdown.Button>

      <Priority className={lowecasePriority}>{lowecasePriority}</Priority>
      <Category>{category.toLowerCase()}</Category>
    </Root>
  );
}
