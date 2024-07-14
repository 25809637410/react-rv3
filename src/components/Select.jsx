import React, { useState, useRef, useEffect } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

const Container = styled.div`
  border: 1px solid #ccc;
  padding: 20px;
  width: 100%;
  max-width: 85vw;
`;
const Title = styled.h1`
  margin-bottom: 30px;
`;
const SelectContainer = styled.div`
  display: flex;
  /* flex-direction: column; */
  gap: 50px;
`;

const SelectWrapper = styled.div`
  position: relative;
  width: 100%;
`;

const StyledSelect = styled.div`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
/* width: {props => props.fullWidth ? '100%' : 'auto'}; */
/* width: {props => props.fullWidth ? '100%' : 'auto'}; */

const OptionList = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  margin: 0;
  padding: 0;
  border: 1px solid #ccc;
  border-top: none;
  border-radius: 0 0 4px 4px;
  background-color: #fff;
  z-index: 100;
  max-height: 200px;
  overflow-y: auto;
  list-style: none;
`;

const Option = styled.li`
  padding: 10px;
  cursor: pointer;
  &:hover {
    background-color: #f0f0f0;
  }
`;

const Arrow = styled.span`
  border: solid black;
  border-width: 0 2px 2px 0;
  display: inline-block;
  padding: 3px;
  transform: ${(props) =>
    props.$isOpen ? "rotate(-135deg)" : "rotate(45deg)"};
  transition: transform 0.3s ease;
`;

const PortalWrapper = styled.div`
  position: fixed;
  // z-index: 1000;
  width: 100%;
`;

function CustomSelect({ options, value, onChange, usePortal }) {
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef(null);
  const [portalPosition, setPortalPosition] = useState({
    top: 0,
    left: 0,
    width: 0,
  });

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleToggle = () => {
    if (!isOpen && usePortal) {
      const rect = selectRef.current.getBoundingClientRect();
      setPortalPosition({
        top: rect.bottom + window.scrollY,
        left: rect.left + window.scrollX,
        width: rect.width,
      });
    }
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    onChange(option);
    setIsOpen(false);
  };

  const renderOptionList = () => (
    <OptionList>
      {options.map((option) => (
        <Option key={option} onMouseDown={() => handleOptionClick(option)}>
          {option}
        </Option>
      ))}
    </OptionList>
  );

  return (
    <SelectWrapper ref={selectRef}>
      <StyledSelect onClick={handleToggle}>
        {value}
        <Arrow $isOpen={isOpen} />
      </StyledSelect>
      {isOpen &&
        (usePortal
          ? ReactDOM.createPortal(
              <PortalWrapper
                style={{
                  top: portalPosition.top,
                  left: portalPosition.left,
                  width: portalPosition.width,
                }}
              >
                {renderOptionList()}
              </PortalWrapper>,
              document.body
            )
          : renderOptionList())}
    </SelectWrapper>
  );
}

function Select() {
  const [selectedValue1, setSelectedValue1] = useState("React");
  const [selectedValue2, setSelectedValue2] = useState("React");

  const options = ["React", "Java", "Spring", "React Native"];

  return (
    <Container style={{ overflow: "hidden" }}>
      <Title>Select</Title>
      <SelectContainer>
        <CustomSelect
          options={options}
          value={selectedValue1}
          onChange={setSelectedValue1}
          usePortal={true}
          // fullWidth={false}
        />
        <CustomSelect
          options={options}
          value={selectedValue2}
          onChange={setSelectedValue2}
          usePortal={false}
          // fullWidth={true}
        />
      </SelectContainer>
    </Container>
  );
}

export default Select;
