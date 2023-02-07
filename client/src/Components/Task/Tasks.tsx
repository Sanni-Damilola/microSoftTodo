import React from "react";
import { HiOutlineBell } from "react-icons/hi";
import styled from "styled-components";
import { IoCalendarOutline, IoRepeat } from "react-icons/io5";
import { CgHome } from "react-icons/cg";
import { BsChevronDown, BsChevronRight, BsStar } from "react-icons/bs";
import axios from "axios";
import { allowAccess } from "../Global/GlobalContext";

type task = {
  _id: string;
  title: string;
  date: number;
  reminder: string;
  note: string;
  status: boolean;
};

interface allUserTask {
  status: false;
  title: string;
  note: string;
  myDay: task[];
  task: task[];
  _id: string;
}

const Tasks = () => {
  const [show, setShow] = React.useState(false);
  const [text, setText] = React.useState("");
  const func = () => {
    setShow(true);
  };

  const [title, setTitle] = React.useState("");

  const context = React.useContext(allowAccess);

  // post task
  const postTask = async () => {
    await axios
      .post(`http://localhost:2001/api/createTask/${context?.userData._id}`, {
        title,
      })
      .then((res) => {
        window.location.reload();
      });
  };

  // read task
  // get all task
  const [userTask, setUserTask] = React.useState({} as allUserTask);
  const readAllTask = async () => {
    await axios
      .get(`http://localhost:2001/api/getone/${context?.userData._id}`)
      .then((res) => {
        setUserTask(res.data.data);
      });
  };

  // border for Date Icon
  const [border, setBorder] = React.useState(false);

  // done status
  const completed = async (id: string) => {
    await axios
      .patch(
        `http://localhost:2001/api/completeTask/${context?.userData._id}/${id}`
      )
      .then((res) => {
        window.location.reload();
      });
  };

  // unDone Task
  const Uncompleted = async (id: string) => {
    await axios
      .patch(
        `http://localhost:2001/api/uncompleteTask/${context?.userData._id}/${id}`
      )
      .then((res) => {
        window.location.reload();
      });
  };
  // get Completed Data
  const filterData = userTask?.myDay?.filter((e: any) => {
    return e.status === true;
  });

  const [complete, setComplte] = React.useState(false);
  const Complete = () => {
    setComplte(!complete);
  };

  React.useEffect(() => {
    readAllTask();
  }, [context?.userData]);
  return (
    <Container>
      <Wrapper>
        <Wrap>
          <Icon>
            <CgHome />
          </Icon>
          <TaskTitle>task</TaskTitle>
        </Wrap>
      </Wrapper>
      <br />
      <br />
      <MainWrapper>
        <>
          <AddTaskInput>
            <Radio></Radio>
            <Input
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              color={show ? "value" : ""}
              onClick={func}
              placeholder="Add a Task"
            />
          </AddTaskInput>
          {show ? (
            <>
              <Botton>
                <Hold>
                  <ButtonIcon>
                    <IoCalendarOutline />
                  </ButtonIcon>
                  <ButtonIcon>
                    <HiOutlineBell />
                  </ButtonIcon>
                  <ButtonIcon>
                    <IoRepeat />
                  </ButtonIcon>
                </Hold>
                {title === "" ? (
                  <Add color=" rgb(0, 0, 0, 0.5)" cur="not-allowed">
                    add
                  </Add>
                ) : (
                  <Add
                    onClick={postTask}
                    color="rgb(37, 99, 207)"
                    cur="pointer"
                  >
                    add
                  </Add>
                )}
              </Botton>
            </>
          ) : null}

          {userTask?.myDay?.map((e) => (
            <>
              {e.status === false ? (
                <TaskView key={e._id}>
                  <ViewWrapper>
                    <CheckBox
                      checked={e.status}
                      onClick={() => {
                        if (e.status) {
                          Uncompleted(e._id);
                        } else {
                          completed(e._id);
                        }
                      }}
                      type={"radio"}
                    />
                    <TitleHold>
                      <TaskViewTitle line_through={e.status ? "value" : ""}>
                        {e.title}
                      </TaskViewTitle>
                      <Task>task</Task>
                    </TitleHold>
                  </ViewWrapper>
                  <MarkAsImportant>
                    <BsStar />
                  </MarkAsImportant>
                </TaskView>
              ) : null}
            </>
          ))}
        </>
        <br />
        <Completed onClick={Complete}>
          <ArrowIcon>
            {complete ? <BsChevronRight /> : <BsChevronDown />}
          </ArrowIcon>
          <Span>Completed</Span>
          <Length>{filterData?.length}</Length>
        </Completed>
        {complete ? null : (
          <AllCompleted>
            {filterData?.map((e) => (
              <>
                {e.status === true ? (
                  <TaskView key={e._id}>
                    <ViewWrapper>
                      <CheckBox
                        checked={e.status}
                        onClick={() => {
                          if (e.status) {
                            Uncompleted(e._id);
                          } else {
                            completed(e._id);
                          }
                        }}
                        type={"radio"}
                      />
                      <TitleHold>
                        <TaskViewTitle line_through={e.status ? "value" : ""}>
                          {e.title}
                        </TaskViewTitle>
                        <Task>task</Task>
                      </TitleHold>
                    </ViewWrapper>
                    <MarkAsImportant>
                      <BsStar />
                    </MarkAsImportant>
                  </TaskView>
                ) : null}
              </>
            ))}
          </AllCompleted>
        )}
      </MainWrapper>
    </Container>
  );
};

export default Tasks;

const AllCompleted = styled.div``;

const Completed = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  width: 150px;
`;
const ArrowIcon = styled.div`
  color: rgb(0, 0, 0, 0.6);
  margin-top: 3px;
  margin-right: 15px;
`;
const Span = styled.div`
  font-weight: 600;
`;
const Length = styled.div`
  margin-left: 15px;
`;

const MainWrapper = styled.div`
  overflow-y: scroll;
  height: auto;
  width: 100%;
  padding-bottom: 20px;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const TaskViewTitle = styled.span<{ line_through: string }>`
  color: rgb(0, 0, 0, 0.6);
  text-decoration: ${({ line_through }) =>
    line_through ? "line-through" : ""};
`;

const CheckIcon = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  color: rgb(37, 99, 207);
  /* display: none; */
`;

const MarkAsImportant = styled.div`
  color: rgb(37, 99, 207);
  margin-right: 24px;
  cursor: pointer;
  font-size: 19px;
`;
const Task = styled.p`
  text-transform: capitalize;
  color: rgb(0, 0, 0, 0.7);
  font-size: 13px;
  margin: 0;
`;
const TitleHold = styled.div`
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 15px;
`;
const CheckBox = styled.input`
  width: 17px;
  cursor: pointer;
  border-radius: 50%;
  border: 1px solid rgb(37, 99, 207);
  height: 17px;
  margin-left: 28px;

  :hover ~ ${CheckIcon} {
    color: white;
  }
`;
const ViewWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const TaskView = styled.div`
  background-color: #eff6fb;
  height: 60px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px 0px;
  align-items: center;
  margin-top: 10px;
  width: 98%;
`;

const ButtonIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 21px;
  cursor: pointer;
  margin-right: 18px;
  color: rgb(0, 0, 0, 0.5);
`;

const Radio = styled.div`
  width: 17px;
  cursor: pointer;
  border-radius: 50%;
  border: 1px solid rgb(37, 99, 207);
  height: 17px;
  margin-left: 28px;
`;

const SortIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  margin-top: 3px;
  margin-right: 5px;
`;
const SuggestIcon = styled.div`
  display: flex;
  margin-right: 5px;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  margin-top: 3px;
`;

const Wrap = styled.div`
  display: flex;
  color: #2564cf;
  justify-content: center;
  align-items: center;
  position: relative;
  ::before {
    content: "${new Date().toDateString()}";
    position: absolute;
    bottom: -23px;
    width: 150px;
    z-index: 1;
    font-size: 13px;
    color: rgb(0, 0, 0, 0.7);
    text-transform: capitalize;
    left: 10%;
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Icon = styled.div`
  display: flex;
  margin-top: 3px;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  margin-left: 10px;
  margin-right: 10px;
`;
const TaskTitle = styled.span`
  font-size: 22px;
  text-transform: capitalize;
  font-weight: 500;

  cursor: default;
`;
// const Date = styled.p``;
const AddTaskInput = styled.div`
  width: 98%;
  height: 60px;
  display: flex;
  align-items: center;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px,
    rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;
`;
// const Plus = styled.div`
//   display: flex;
//   color: rgba(37, 99, 207, 0.699);
//   justify-content: center;
//   align-items: center;
//   margin-top: 3px;
// `;
const Input = styled.input<{ color: string }>`
  margin-left: 15px;
  height: 100%;
  font-size: 16px;
  font-weight: 500;
  flex: 1;
  outline: none;
  border: 0;

  ::placeholder {
    color: ${({ color }) => (color ? "rgb(37, 99, 207)" : "")};
  }
`;
const Botton = styled.div`
  display: flex;
  width: 98%;
  align-items: center;
  margin-top: 7px;
  height: 45px;
  justify-content: center;
  justify-content: space-between;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px 0px;
`;
const Hold = styled.div`
  display: flex;
  align-items: center;
  margin-left: 27px;
`;
const Add = styled.div<{ cur: string; color: string }>`
  padding: 6px;
  font-size: 14px;
  color: ${(color) => color.color};
  cursor: ${(cur) => cur.cur};
  font-weight: 500;
  margin-right: 20px;
  text-transform: capitalize;
  border: 1px solid rgb(0, 0, 0, 0.2);
`;
const Container = styled.div`
  margin-top: 30px;
  margin-left: 20px;
`;
