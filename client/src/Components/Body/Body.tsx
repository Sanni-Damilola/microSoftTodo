import React from "react";
import styled from "styled-components";
import Header from "../Header/Header";
import { HiOutlineSun } from "react-icons/hi";

const Body = () => {
  const [show, setShow] = React.useState(false);
  const func = () => {
    setShow(!show);
  };

  return (
    <Container>
      <Header />
      <Wrapper>
        <Right dn={show ? "" : "value"}>
          <Wrap>
            <BlueLine></BlueLine>
            <Icon>
              <HiOutlineSun />
            </Icon>
            <TaskTitle>My Day</TaskTitle>
          </Wrap>
        </Right>
        <Middle></Middle>
        <Left></Left>
      </Wrapper>
    </Container>
  );
};

export default Body;

const Right = styled.div<{ dn: string }>`
  width: 400px;
  height: calc(100vh - 55px);
  display: ${({ dn }) => (dn ? "block" : "none")};
  /* background-color: rgb(255, 255, 255); */
  background-color: red;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  margin-right: 5px;
  flex-direction: column;
  overflow: hidden;
`;

const BlueLine = styled.div`
  width: 1.6px;
  margin-left: 1px;
  float: left;
  height: 100%;
  background-color: "rgb(37, 99, 207)";
`;

const TaskTitle = styled.span`
  color: rgb(0, 0, 0, 0.8);
  text-transform: capitalize;
`;
const Icon = styled.div`
  display: flex;
  justify-content: center;
  margin-left: 30px;
  align-items: center;
  color: rgb(0, 0, 0, 0.6);
  font-size: 20px;
  margin-right: 23px;
  margin-top: 5px;
`;
const Wrap = styled.div`
  display: flex;
  margin-top: 10px;
  align-items: center;
  width: 100%;
  height: 45px;
  background-color: "rgb(239, 246, 252)";
  cursor: pointer;
  :hover {
    background-color: lavender;
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: space-between;
`;
const Middle = styled.div``;
const Left = styled.div``;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
