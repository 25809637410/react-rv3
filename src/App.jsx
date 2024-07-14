import React from 'react';
import ButtonGroup from "./components/Button";
import Input from "./components/Input";
import Modal from "./components/Modal";
import Select from "./components/Select";
import styled from 'styled-components';

const Appcontainer = styled.div`
  padding: 20px;
`;

const Section = styled.section`
  margin-bottom: 30px;
`;

function App() {
  // const [ inputValue, setInputValue ] = useState('');

  return (
    <Appcontainer>
      <Section>
        <ButtonGroup />
      </Section>
      <Section>
        <Input />
      </Section>
      <Section>
        <Modal />
      </Section>
      <Section>
        <Select />
      </Section>
    </Appcontainer>   
  );
}

export default App;