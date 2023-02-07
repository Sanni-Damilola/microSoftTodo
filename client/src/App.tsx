import React from "react";
import AuthRoutes from "./Components/Routes/AuthRoutes";
import Body from "./Components/Body/Body";
import styled from "styled-components";
import { allowAccess } from "./Components/Global/GlobalContext";

function App() {
  const context = React.useContext(allowAccess);

  return (
    <Container>
      <AuthRoutes />
      {context?.userData?.name !== ? <Body /> : null}
    </Container>
  );
}

export default App;

const Container = styled.div`
  width: 100%;
  height: 100vh;
`;
