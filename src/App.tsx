import { Container } from "./components/Container";
import { Heading } from "./components/Heading";

import "./style/global.css";
import "./style/theme.css";

export function App() {
  return (
    <>
      <Container>
        <Heading>LOGO</Heading>
      </Container>

      <Container>
        <Heading>MENU</Heading>
      </Container>
    </>
  );
}
