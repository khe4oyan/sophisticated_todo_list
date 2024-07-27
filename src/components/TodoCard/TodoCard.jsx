// libs
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { Typography, Dropdown } from "antd";
import { useNavigate } from "react-router-dom";

// components
import EditTodoModal from "../EditTodoModal";

// slices
import { removeTodo, toggleTodoStatus } from "../../store/slices/todoSlice";
import { useState } from "react";

// routes
import ROUTES from "../../routes/routes";

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
  const [isOpenedEditModal, setIsOpenedEditModal] = useState(false);
  const navigate = useNavigate();

  const {
    // id,
    text,
    todoStatus,
    category,
    priority,
  } = todoData;

  const onMenuClick = () => {
    dispatch(toggleTodoStatus(ind));
  };

  const onMenuItemClick = (e) => {
    const key = +e.key;
    switch (key) {
      case 0:
        navigate(`${ROUTES.SINGLE_TODO_PAGE_BY_IND}/${ind}`);
        break;
      case 1:
        setIsOpenedEditModal(true);
        break;
      case 2:
        dispatch(removeTodo(ind));
        break;
      default:
        console.error("Undefined menu item click");
    }
  };

  const lowecasePriorityValue = priority.toLowerCase();

  return (
    <Root className={todoStatus || lowecasePriorityValue}>
      <Title
        level={3}
        style={
          todoStatus && { textDecorationLine: "line-through", color: "gray" }
        }
      >
        {text}
      </Title>
      
      <Dropdown.Button
        menu={{
          items,
          onClick: onMenuItemClick,
        }}
        onClick={onMenuClick}
      >
        {todoStatus ? "Undone" : "Done"}
      </Dropdown.Button>

      <Priority className={lowecasePriorityValue}>
        {lowecasePriorityValue}
      </Priority>
      
      <Category>{category.toLowerCase()}</Category>

      {isOpenedEditModal && (
        <EditTodoModal
          todoInd={ind}
          isModalOpen={isOpenedEditModal}
          setIsModalOpen={setIsOpenedEditModal}
        />
      )}
    </Root>
  );
}
