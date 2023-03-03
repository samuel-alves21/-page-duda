import styled from "styled-components";
import { Section02 } from "./components/Section02";
import { Section01 } from "./components/Setion01";

function App() {
  return (
    <AppContainer className="App">
      <Section01 />
      <Section02 />
    </AppContainer>
  );
}

const AppContainer = styled.div `
  max-width: 1920px
`

export default App;
