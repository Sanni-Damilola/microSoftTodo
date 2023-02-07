import React from "react";
import styled from "styled-components";
import { TbGridDots } from "react-icons/tb";
import { VscSearch } from "react-icons/vsc";
import { SlSettings } from "react-icons/sl";
import { RiQuestionMark } from "react-icons/ri";
import { AiOutlineNotification } from "react-icons/ai";

const Header = () => {
  const [show, setShow] = React.useState(false);

  const func = () => {
    setShow(true);
  };

  const RemoveInput = () => {
    setShow(false);
  };

  return (
    <Container>
      <Right>
        <Menu>
          <TbGridDots />
        </Menu>
        <span>to do</span>
        <Search wd={show ? "value" : ""}>
          <SearchIcon onClick={func}>
            <VscSearch />
          </SearchIcon>
          <SearchInput dn={show ? "value" : ""} placeholder="search" />
          <Cancel onClick={RemoveInput} dn={show ? "value" : ""}>
            X
          </Cancel>
        </Search>
      </Right>
      <Midsearch>
        <MidIcon>
          <VscSearch />
        </MidIcon>
        <Input type="search" placeholder="search" />
      </Midsearch>
      <Left>
        <Icon>
          <SlSettings />
        </Icon>
        <Icon>
          <RiQuestionMark />
        </Icon>
        <Notification dn={show ? "" : "value"}>
          <Notify>0</Notify>
          <AiOutlineNotification />
        </Notification>
        <NameWrap>
          <Name>e</Name>
        </NameWrap>
      </Left>
    </Container>
  );
};

export default Header;

const SearchIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const Cancel = styled.div<{ dn: string }>`
  cursor: pointer;
  font-size: 13px;
  height: 100%;
  display: ${({ dn }) => (dn ? "block" : "none")};
`;

const SearchInput = styled.input<{ dn: string }>`
  display: ${({ dn }) => (dn ? "block" : "none")};
  margin-left: 10px;
  flex: 1;
  ::placeholder {
    font-size: 16px;
    text-transform: capitalize;
  }
  flex: 1;
  border: 0;
  outline: none;
`;

const MidIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgb(0, 103, 184);
  font-size: 19px;
`;

const Midsearch = styled.div`
  width: 450px;
  height: 35px;
  background-color: white;
  overflow: hidden;
  border-radius: 5px;
  padding-left: 10px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
const Input = styled.input`
  margin-top: 3px;
  ::placeholder {
    font-size: 16px;
    text-transform: capitalize;
  }
  flex: 1;
  border: 0;
  outline: none;
  margin-left: 16px;
`;

const NameWrap = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 55px;
  height: 100%;
  :hover {
    background-color: rgba(0, 0, 0, 0.3);
  }
`;

const Name = styled.div`
  width: 55px;
  height: 100%;
  width: 35px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid white;
  border-radius: 50%;
  color: white;
  text-transform: uppercase;
`;

const Notify = styled.div`
  font-size: 10px;
  position: absolute;
  top: 10px;
  right: 4px;
  width: 18px;
  height: 18px;
  display: flex;
  z-index: 1;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: #004578;
`;

const Notification = styled.div<{ dn: string }>`
  display: ${({ dn }) => (dn ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  color: white;
  cursor: pointer;
  font-size: 22px;
  margin-right: 20px;
  position: relative;
  height: 100%;
  width: 55px;
  :hover {
    background-color: rgba(0, 0, 0, 0.3);
  }
`;

const Icon = styled.div`
  display: flex;
  font-size: 22px;
  justify-content: center;
  align-items: center;
  color: white;
  width: 55px;
  height: 100%;
  cursor: pointer;
  :hover {
    background-color: rgba(0, 0, 0, 0.3);
  }
`;

const Search = styled.div<{ wd: string }>`
  display: none;
  overflow: hidden;
  @media screen and (max-width: 768px) {
    display: flex;
    width: ${({ wd }) => (wd ? "400px" : "auto")};
    justify-content: flex-start;
    cursor: auto;
  }

  justify-content: center;
  align-items: center;
  background-color: white;
  padding: 10px;
  font-size: 17px;
  border-radius: 3px;
  color: rgb(0, 103, 184);
  cursor: pointer;
`;

const Right = styled.div`
  display: flex;
  height: 100%;

  span {
    color: white;
    font-size: 17px;
    font-weight: 600;
    text-transform: capitalize;
    padding: 20px 18px 20px 10px;
    cursor: pointer;

    :hover {
      text-decoration: underline;
    }
  }
  justify-content: center;
  align-items: center;
`;
const Left = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const Menu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 23px;
  color: white;
  width: 50px;
  cursor: pointer;
  height: 100%;

  :hover {
    background-color: rgba(0, 0, 0, 0.3);
  }
`;

const Container = styled.div`
  width: 100%;
  height: 55px;
  justify-content: center;
  align-items: center;
  justify-content: space-between;
  display: flex;
  background-color: rgb(37, 100, 207);
`;
