// libs
import { useSelector } from "react-redux";
import { useState } from "react";
import styled from "styled-components";
import Title from "antd/es/typography/Title";
import { Flex } from "antd";
import { FilterOutlined } from "@ant-design/icons";
import { Button, Dropdown, message, Space } from "antd";

const Header = styled.div`
  background-color: #06213d;
  padding: 10px 0;
`;

export default function HomePage() {
  const [filterValue, setFilterValue] = useState(-1);

  const handleMenuClick = (e) => {
    const key = e.key;
    if (key == 5) {
      message.info("Filter reseted");
      setFilterValue(-1);
    } else {
      message.info("Filter changed");
    }
  };

  const { filters } = useSelector((s) => s.filterSlice);
  const dropDownMenuProps = {
    items: filters,
    onClick: handleMenuClick,
  };

  return (
    <>
      <Header>
        <Flex align="center" justify="center">
          <Title
            level={2}
            style={{ marginBottom: "0", color: "rgb(255, 255, 255)" }}
          >
            TODO
          </Title>
        </Flex>
      </Header>
      <Dropdown menu={dropDownMenuProps}>
        <Button>
          <Space>
            Filters
            <FilterOutlined />
          </Space>
        </Button>
      </Dropdown>
    </>
  );
}
