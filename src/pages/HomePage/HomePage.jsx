// libs
import styled from "styled-components";
import Title from "antd/es/typography/Title";
import { Flex } from "antd";
import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

// routes
import ROUTES from "../../routes/routes";

const Header = styled.div`
  background-color: #06213d;
  padding: 10px 0;
`;

const Content = styled.div`
  height: calc(100dvh - 58px);
  overflow: auto;
`;

export default function HomePage() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === ROUTES.HOME_PAGE) {
      navigate(ROUTES.TODOS_PAGE);
    }
  }, [location.pathname]);

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
      
      <Content>
        <Outlet />
      </Content>
    </>
  );
}
