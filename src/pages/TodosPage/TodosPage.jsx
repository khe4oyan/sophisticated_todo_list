// libs
import { useState } from "react";
import { useSelector } from "react-redux";
import { Space, Select } from "antd";
import styled from "styled-components";

// components
import ShowTodosWithFilters from '../../components/ShowTodosWithFilters';
import AddTodoModal from "../../components/AddTodoModal/AddTodoModal";
import AddCustomCategory from "../../components/AddCustomCategory/AddCustomCategory";

const Root = styled.div`
  padding: 10px;
  max-width: 900px;
  margin: auto;
`;

const MySpace = styled.div`
  z-index: 20;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 5px;
  
  @media (width < 500px) {
    display: block;
    width: 100%;
  }
`;

const Buttons = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 5px;
  
  @media (width < 500px) {
    position: fixed;

    width: 100%;
    background-color: red;
    bottom: 0px;
    left: 0;
    padding: 5px 10px;
    background-color: white;
    z-index: 20;
    flex-wrap: wrap;
  }

  @media (width < 290px) {
    grid-template-columns: 1fr;
  }
`;

export default function TodoPage() {
  const { filters } = useSelector((s) => s.filterSlice);
  const { categories } = useSelector(s => s.categorySlice);
  const { allTodo } = useSelector(s => s.todoSlice);
  const [selectedFilters, setSelectedFilters] = useState([]);

  const onFilterChange = (filters) => {
    setSelectedFilters(filters);
  };

  return (
    <Root>
      <MySpace
        style={{
          width: "100%",
        }}
        direction="horizontal"
      >
        <Select
          mode="multiple"
          allowClear
          style={{
            minWidth: "200px",
            width: "100%",
          }}
          placeholder="Filters"
          onChange={onFilterChange}
          options={[...filters, ...categories]}
        />
        <Buttons>
          <AddCustomCategory />
          <AddTodoModal />
        </Buttons>
      </MySpace>
      <ShowTodosWithFilters 
        selectedFilters={selectedFilters}
        todos={allTodo}
      />
    </Root>
  );
}
