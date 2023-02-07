import React from "react";
import styled from "styled-components";
import Header from "../Header/Header";
import { HiOutlineSun } from "react-icons/hi";
import { AiOutlineMenu } from "react-icons/ai";
import { BsStar } from "react-icons/bs";
import { IoCalendarOutline } from "react-icons/io5";
import { MdOutlinePersonOutline } from "react-icons/md";
import { CgHome } from "react-icons/cg";
import Routes from "../Routes/Routes";
import { Link } from "react-router-dom";

const Body = () => {
  const [show, setShow] = React.useState(false);
  const func = () => {
    setShow(!show);
  };

  const [route, setRoute] = React.useState(false);
  const taskRoute = () => {
    setRoute(true);
    setImportanat(false);
    setAssigned(false);
    setMainTask(false);
    setIPlanned(false);
  };

  const [importantRoute, setImportanat] = React.useState(false);
  const importantTask = () => {
    setRoute(false);
    setImportanat(true);
    setAssigned(false);
    setMainTask(false);
    setIPlanned(false);
  };

  const [plannedRoute, setIPlanned] = React.useState(false);
  const plannedFunction = () => {
    setRoute(false);
    setImportanat(false);
    setAssigned(false);
    setMainTask(false);
    setIPlanned(true);
  };

  const [assignedRoute, setAssigned] = React.useState(false);
  const assignedFunction = () => {
    setRoute(false);
    setImportanat(false);
    setAssigned(true);
    setMainTask(false);
    setIPlanned(false);
  };

  const [mainRoute, setMainTask] = React.useState(true);
  const mainTask = () => {
    setRoute(false);
    setImportanat(false);
    setAssigned(false);
    setMainTask(true);
    setIPlanned(false);
  };

  return (
    <Container>
      <Header />
      <ToggleMenu onClick={func} dn={show ? "" : "value"}>
        <AiOutlineMenu />
      </ToggleMenu>
      <Wrapper>
        <Right dn={show ? "value" : ""}>
          <Menu onClick={func}>
            <AiOutlineMenu />
          </Menu>
          <Link style={{ textDecoration: "none" }} to={"/myday"}>
            <Wrap background={route ? "value" : ""} onClick={taskRoute}>
              <BlueLine b={route ? "value" : ""}></BlueLine>
              <Icon display={show ? "value" : ""}>
                <HiOutlineSun />
              </Icon>
              <TaskTitle>My Day</TaskTitle>
            </Wrap>
          </Link>
          <Link style={{ textDecoration: "none" }} to={"/importance"}>
            <Wrap
              background={importantRoute ? "value" : ""}
              onClick={importantTask}
            >
              <BlueLine b={importantRoute ? "value" : ""}></BlueLine>
              <Icon display={show ? "value" : ""}>
                <BsStar />
              </Icon>
              <TaskTitle>important</TaskTitle>
            </Wrap>
          </Link>
          <Link style={{ textDecoration: "none" }} to={"/planned"}>
            <Wrap
              background={plannedRoute ? "value" : ""}
              onClick={plannedFunction}
            >
              <BlueLine b={plannedRoute ? "value" : ""}></BlueLine>
              <Icon display={show ? "value" : ""}>
                <IoCalendarOutline />
              </Icon>
              <TaskTitle>planned</TaskTitle>
            </Wrap>
          </Link>
          <Link style={{ textDecoration: "none" }} to={"assigned"}>
            <Wrap
              background={plannedRoute ? "value" : ""}
              onClick={assignedFunction}
            >
              <BlueLine b={assignedRoute ? "value" : ""}></BlueLine>
              <Icon display={show ? "value" : ""}>
                <MdOutlinePersonOutline />
              </Icon>
              <TaskTitle>assigned to me</TaskTitle>
            </Wrap>
          </Link>
          <Link style={{ textDecoration: "none" }} to={"/task"}>
            <Wrap background={mainRoute ? "value" : ""} onClick={mainTask}>
              <BlueLine b={mainRoute ? "value" : ""}></BlueLine>
              <Icon display={show ? "value" : ""}>
                <CgHome />
              </Icon>
              <TaskTitle>Task</TaskTitle>
            </Wrap>
          </Link>
        </Right>
        <Middle>
          <Routes />
        </Middle>
        <Left></Left>
      </Wrapper>
    </Container>
  );
};

export default Body;

const Right = styled.div<{ dn: string }>`
  width: 280px;
  height: calc(100vh - 55px);
  display: ${({ dn }) => (dn ? "block" : "none")};
  background-color: rgb(255, 255, 255);
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  margin-right: 5px;
  flex-direction: column;
  overflow: hidden;
`;

const BlueLine = styled.div<{ b: string }>`
  width: 1.6px;
  margin-left: 1px;
  float: left;
  height: 100%;
  background-color: ${({ b }) => (b ? "rgb(37, 99, 207)" : "")};
`;

const TaskTitle = styled.span`
  color: rgb(0, 0, 0, 0.8);
  text-transform: capitalize;
`;
const Icon = styled.div<{ display: string }>`
  display: ${({ display }) => (display ? "flex" : "none")};
  justify-content: center;
  margin-left: 30px;
  align-items: center;
  color: rgb(0, 0, 0, 0.6);
  font-size: 20px;
  margin-right: 23px;
  margin-top: 5px;
`;
const Wrap = styled.div<{ background: string }>`
  display: flex;
  margin-top: 10px;
  align-items: center;
  width: 100%;
  height: 45px;
  background-color: ${({ background }) =>
    background ? "rgb(239, 246, 252)" : ""};
  cursor: pointer;
  :hover {
    background-color: lavender;
  }
`;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
`;
const Middle = styled.div`
  width: 50%;
  /* background-color: ; */
  height: calc(100vh - 55px);
`;
const Left = styled.div`
  width: 470px;
  display: flex;
  height: calc(100vh - 55px);
  margin-left: 6px;
  /* background-color: rgb(255, 255, 255); */
  background-color: red;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ToggleMenu = styled.div<{ dn: string }>`
  padding-left: 30px;
  margin-top: 35px;
  position: fixed;
  left: 0;
  top: 60px;
  font-size: 20px;
  color: rgb(0, 0, 0, 0.7);
  display: ${({ dn }) => (dn ? "block" : "none")};
  cursor: pointer;
`;

const Menu = styled.div`
  padding-left: 30px;
  margin-top: 35px;
  font-size: 20px;
  color: rgb(0, 0, 0, 0.7);
  cursor: pointer;
`;
