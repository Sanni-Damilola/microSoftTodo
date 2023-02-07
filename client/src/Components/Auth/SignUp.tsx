import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import img from "../Images/image.svg";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { Link } from "react-router-dom";
import axios from "axios";

const SignUp = () => {
  const [email, setEmail] = React.useState("");
  const [fullName, setFullName] = React.useState("");
  const [password, setPassword] = React.useState("");

  const navigate = useNavigate();
  const registerUser = async (e: any) => {
    e.preventDefault();
    await axios
      .post("http://localhost:2001/api/post", {
        name: fullName,
        email,
        password,
      })
      .then((res) => {
        let captureData = window.localStorage.setItem(
          "microSoftData",
          JSON.stringify(res.data.data)
        );
        navigate("/signin");
        console.log(captureData);
      });
  };

  const [input, setInput] = React.useState(false);
  const eye = () => {
    setInput(!input);
  };

  return (
    <Container>
      <Card>
        <br />
        <br />
        <Image src={img} />
        <br />
        <br />
        <Link style={{ textDecoration: "none" }} to={"/signin"}>
          <span>Create account</span>
        </Link>
        <br />
        <br />
        <Input type="text" minLength={6} placeholder="name" /> <br />
        <Input required type="email" placeholder="sanni@example.com" /> <br />
        <Password>
          <PasswordInput
            required
            type={input ? "text" : "password"}
            placeholder="password"
            minLength={6}
          />

          {input ? (
            <IconEye onClick={eye}>
              <AiFillEye />
            </IconEye>
          ) : (
            <IconeEyeCancel onClick={eye}>
              <AiFillEyeInvisible />
            </IconeEyeCancel>
          )}
        </Password>
        <br />
        <Button type="submit">Next</Button>
      </Card>
    </Container>
  );
};

export default SignUp;

const Curve = styled.div`
  width: 150px;
  i {
    padding-top: 10px;
    color: white;
  }
  height: 60px;
  background-color: #0067b8;
  position: relative;
  display: flex;
  border-radius: 2px;
  justify-content: center;
  ::after {
    background-color: #0067b8;
    content: "";
    left: 4%;
    position: absolute;
    width: 15px;
    height: 15px;
    transform: rotate(45deg);
    margin-top: -7px;
  }
`;

const PasswordInput = styled.input`
  outline: 0;
  border: 0;
  width: 90%;
  padding-bottom: 10px;
  ::placeholder {
    font-size: 16px;
    font-weight: 450;
  }
`;

const Password = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: space-between;
  width: 410px;
  border-bottom: 1px solid rgb(0, 0, 0, 0.6);
`;
const IconEye = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgb(0, 0, 0, 0.5);
  font-size: 20px;
  cursor: pointer;
`;
const IconeEyeCancel = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgb(0, 0, 0, 0.5);

  font-size: 20px;
  cursor: pointer;
`;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #e0e2dd;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  object-fit: contain;
  height: 25px;
  margin: 0;
`;

const Card = styled.form`
  width: 460px;
  padding-left: 45px;
  flex-direction: column;
  background-color: rgb(255, 255, 255);
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  padding-bottom: 60px;

  span {
    font-size: 25px;
    color: rgb(0, 0, 0, 0.8);
    font-weight: 600;
  }
`;

const Input = styled.input`
  outline: 0;
  border: 0;
  border-bottom: 1px solid rgb(0, 0, 0, 0.6);
  width: 400px;
  margin-bottom: 10px;
  padding-bottom: 10px;
  ::placeholder {
    font-size: 16px;
    font-weight: 450;
  }
`;

const Button = styled.button`
  background-color: #0067b8;
  padding: 10px 40px;
  font-size: 14px;
  color: white;
  border: 0;
  float: right;
  margin-right: 56px;
  cursor: pointer;

  :hover {
    text-decoration: underline;
    background-color: #0067b8;
  }
`;
