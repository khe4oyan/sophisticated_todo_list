// libs
import { useState } from "react";
import { useSelector } from "react-redux";
import { Space, Select } from "antd";
import styled from "styled-components";

// components
import ShowTodosWithFilters from '../../components/ShowTodosWithFilters';

const Root = styled.div`
  padding: 10px;
  max-width: 900px;
  margin: auto;
`;

export default function TodoPage() {
  const { filters } = useSelector((s) => s.filterSlice);
  const { allTodo } = useSelector(s => s.todoSlice);
  const [selectedFilters, setSelectedFilters] = useState([]);

  const onFilterChange = (filters) => {
    setSelectedFilters(filters);
  };

  return (
    <Root>
      <Space
        style={{
          width: "100%",
        }}
        direction="vertical"
      >
        <Select
          mode="multiple"
          allowClear
          style={{
            width: "fit-content",
            minWidth: "200px",
          }}
          placeholder="Filters"
          onChange={onFilterChange}
          options={filters}
        />
      </Space>

      <ShowTodosWithFilters 
        selectedFilters={selectedFilters}
        todos={allTodo}
      />
    </Root>
  );
}
