// libs
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, Modal, Input, Select, Space, message } from "antd";

// slices
import { editTodo } from "../../store/slices/todoSlice";

// constants
import PRIORITY_OPTIONS from "../../data/priorityOptions";

export default function EditTodoModal({
  todoInd,
  isModalOpen,
  setIsModalOpen,
}) {
  const dispatch = useDispatch();
  const { categories } = useSelector((s) => s.categorySlice);
  const {
    text: editableTodoText,
    priority: editableTodoPriority,
    category: editableTodoCategory,
  } = useSelector((s) => s.todoSlice.allTodo)[todoInd];

  // states
  const [todoText, setTodoText] = useState(editableTodoText);
  const [priority, setPriority] = useState(editableTodoPriority);
  const [category, setCategory] = useState(editableTodoCategory);

  // handlers
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleButtonAdd = () => {
    const newTodoData = [ todoText, priority, category ];
    dispatch(editTodo({ todoInd, newTodoData }));
    setIsModalOpen(false);
    message.success("Task edited.");
  };

  return (
    <>
      <Modal
        title="Edit Todo"
        open={isModalOpen}
        onCancel={handleCancel}
        footer={[
          <Button key="cancel" onClick={handleCancel}>
            Discard
          </Button>,
          <Button
            disabled={!(todoText.trim() && priority && category)}
            key="submit"
            type="primary"
            onClick={handleButtonAdd}
          >
            Edit
          </Button>,
        ]}
      >
        <Space direction="vertical" style={{ width: "100%" }}>
          <Input
            placeholder="Change todo text."
            value={todoText}
            onChange={(e) => setTodoText(e.target.value)}
          />

          <Select
            placeholder="Priority"
            value={priority}
            options={PRIORITY_OPTIONS}
            onSelect={setPriority}
            style={{ width: "100%" }}
          />
          <Select
            placeholder="Category"
            value={category}
            options={categories}
            onSelect={setCategory}
            style={{ width: "100%" }}
          />
        </Space>
      </Modal>
    </>
  );
}
