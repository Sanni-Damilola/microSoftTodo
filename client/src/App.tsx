import React from "react";
import AuthRoutes from "./Components/Routes/AuthRoutes";
import Body from "./Components/Body/Body";
import styled from "styled-components";

function App() {
  return (
    <Container>
      {/* <AuthRoutes /> */}
      <Body />
    </Container>
  );
}

export default App;

const Container = styled.div`
  width: 100%;
  height: 100vh;
`;
