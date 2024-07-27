// libs
import { useState } from "react";
import { Modal, Button, Space, Input, Flex, message } from "antd";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

// slices
import {
  addNewCategory,
  deleteCategory,
} from "../../store/slices/categorySlice";

const Text = styled.p`
  padding: 3px 10px;
  pointer-events: none;
`;

const Category = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 5px;
  border-radius: 5px;
  border: 1px solid #0003;
`;

const DeleteButton = styled.button`
  padding: 0px 10px;
  outline: none;
  background: none;
  border: none;
  background: #f001;
  color: #f007;
  cursor: pointer;
`;

export default function AddCustomCategory() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [customCategoryName, setCustomCategoryName] = useState("");
  const { categories } = useSelector((s) => s.categorySlice);
  const dispatch = useDispatch();

  const showModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleDeleteCategory = (ind) => {
    if (categories.length > 1) {
      dispatch(deleteCategory(ind));
      message.success("Category deleted!");
    } else {
      message.error("There must be at least 1 category");
    }
  };

  const handleAddCategory = () => {
    const formatedInputText = customCategoryName.trim();

    if (formatedInputText && formatedInputText.split(' ').length === 1) {
      dispatch(addNewCategory(formatedInputText));
      setCustomCategoryName("");
      message.success("Category added!");
    } else {
      message.error("Check for spaces in the name");
    }
  };

  return (
    <>
      <Button onClick={showModal}>Add New Category</Button>
      <Modal
        title="Add New Category"
        open={isModalOpen}
        onCancel={closeModal}
        footer={[
          <Button type="primary" onClick={closeModal} key={"ok_button"}>
            OK
          </Button>,
        ]}
      >
        <Flex gap="5px" wrap style={{ marginBottom: "10px" }}>
          <Input
            placeholder="Enter new category name"
            onChange={(e) => setCustomCategoryName(e.target.value)}
            value={customCategoryName}
            maxLength={15}
            style={{ width: "80%", minWidth: "100px" }}
          />
          <Button type="primary" onClick={handleAddCategory}>add</Button>
        </Flex>
        <Space wrap>
          {categories.map((category, i) => (
            <Category key={i}>
              <Text>{category.value}</Text>
              <DeleteButton onClick={() => handleDeleteCategory(i)}>X</DeleteButton>
            </Category>
          ))}
        </Space>
      </Modal>
    </>
  );
}
