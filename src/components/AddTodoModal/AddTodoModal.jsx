// libs
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, Modal, Input, Select, Space, message } from "antd";

// slices
import { addTodo } from "../../store/slices/todoSlice";

// constants
import PRIORITY_OPTIONS from "../../data/priorityOptions";

export default function AddTodoModal() {
  const dispatch = useDispatch();
  const { categories } = useSelector((s) => s.categorySlice);

  // states
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [todoText, setTodoText] = useState("");
  const [priority, setPriority] = useState(null);
  const [category, setCategory] = useState(null);

  // handlers
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleButtonAdd = () => {
    dispatch(addTodo({todoText, priority, category}));
    setTodoText("");
    setPriority(null);
    setCategory(null);
    setIsModalOpen(false);
    message.success("New task added.");
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Add New Todo
      </Button>
      <Modal
        title="Add New Todo"
        open={isModalOpen}
        onCancel={handleCancel}
        footer={[
          <Button
            disabled={!(todoText.trim() && priority && category)}
            key="submit"
            type="primary"
            onClick={handleButtonAdd}
          >
            Add
          </Button>,
        ]}
      >
        <Space direction="vertical" style={{ width: "100%" }}>
          <Input
            placeholder="What you want to do ?"
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
