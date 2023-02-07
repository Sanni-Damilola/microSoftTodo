import React from "react";
import { IoIosCheckmark } from "react-icons/io";
import { MdOutlinePersonOutline } from "react-icons/md";
import { RxDotsHorizontal } from "react-icons/rx";
import styled from "styled-components";
import img from "../Images/assigned.png";

const AssignedTask = () => {
  const [show, setShow] = React.useState(false);
  const func = () => {
    setShow(!show);
  };
  return (
    <Container>
      <Wrapper>
        <Hold>
          <Icon>
            <MdOutlinePersonOutline />
          </Icon>
          <Text>Assigned to me</Text>
          <MenuIcon onClick={func}>
            <RxDotsHorizontal />
          </MenuIcon>
          {show ? (
            <CompleteTask>
              <Options>options</Options>
              <Wrap>
                <DoneIcon>
                  <IoIosCheckmark />
                </DoneIcon>
                <Span>Show completed tasks</Span>
              </Wrap>
            </CompleteTask>
          ) : null}
        </Hold>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <ImageWrapper>
          <Image src={img} />
        </ImageWrapper>
      </Wrapper>
    </Container>
  );
};

export default AssignedTask;

const CompleteTask = styled.div`
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  position: absolute;
  top: 30px;
  right: -30px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 230px;
  height: 150px;
  flex-direction: column;
  border-radius: 3px;
  background-color: white;
`;

const Options = styled.span`
  text-transform: capitalize;
  font-size: 15px;
  cursor: default;
  font-weight: 500;
  color: rgb(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid rgb(0, 0, 0, 0.2);
  width: 100%;
  height: 40px;
`;
const Wrap = styled.div`
  display: flex;
  width: 100%;
  cursor: pointer;
  justify-content: center;
  margin-top: 10px;
  height: 40px;
  :hover {
    background-color: lavender;
  }
  align-items: center;
`;
const Span = styled.div`
  color: rgb(0, 0, 0, 0.8);
`;
const DoneIcon = styled.div`
  display: flex;
  width: 16px;
  margin-right: 10px;
  height: 16px;
  border: 1px solid rgb(0, 0, 0, 0.8);
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  color: rgb(0, 0, 0, 0.8);
`;

const MenuIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 4px;
  margin-left: 10px;
  cursor: pointer;
  font-size: 20px;
`;

const Container = styled.div`
  flex-direction: column;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  width: 95%;
  height: 90%;
`;
const Hold = styled.div`
  display: flex;
  justify-content: baseline;
  align-items: center;
  position: relative;
  width: 300px;
`;
const Icon = styled.div<{ dp: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 3px;
  margin-right: 10px;
  font-size: 30px;
  color: #5ca52d;
`;
const Image = styled.img`
  object-fit: contain;
  width: 430px;
  height: 430px;
`;
const ImageWrapper = styled.div`
  display: flex;

  justify-content: center;
  align-items: center;
`;
const Text = styled.div`
  color: #5ca52d;
  font-size: 22px;
  font-weight: 500;
  cursor: default;
`;
