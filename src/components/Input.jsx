import React, { useState } from "react";
import styled from "styled-components";

const Input = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  // 가격에 쉼표 추가
  const addComma = (price) => {
    if (price === "" || isNaN(price)) return price;
    return Number(price).toLocaleString("ko-KR");
  };

  const nameChangeHandler = (e) => setName(e.target.value);

  const priceChangeHandler = (e) => {
    const { value } = e.target;
    let money = value.replaceAll(",", "");
    setPrice(money);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!name.trim().length) {
      return alert("이름을 적어주세요!");
    }
    if (!price.trim().length) {
      return alert("가격을 입력하세요!");
    }
    alert(`{ name: ${name}, price: ${price} }`);
  };

  return (
    <>
      <h1>Input</h1>
      <StyledForm onSubmit={onSubmit}>
        <InputWrapper>
          <StyledLabel>Name</StyledLabel>
          <StyledInput
            type="text"
            name="name"
            value={name}
            onChange={nameChangeHandler}
          />
        </InputWrapper>
        <InputWrapper>
          <StyledLabel>Price</StyledLabel>
          <StyledInput
            type="text"
            name="price"
            value={addComma(price) || ""}
            onChange={(e) => priceChangeHandler(e)}
            placeholder="0"
          />
        </InputWrapper>

        <SaveButton type="submit">Save</SaveButton>
      </StyledForm>
    </>
  );
};

const StyledForm = styled.form`
  display: flex;
  align-items: center;
  gap: 20px;
`;
const InputWrapper = styled.div`
  display: flex;
  /* flex-direction: column; */
  gap: 10px;
  justify-content: center;
  align-items: center;
`;
const StyledLabel = styled.label`
  /* margin-bottom: 10px; */
  font-weight: bold;
`;
const StyledInput = styled.input`
  width: 160px;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 8px;
`;

const SaveButton = styled.button`
  width: 100px;
  height: 40px;
  background-color: #74edbb;
  color: #222;
  border: none;
  padding: 10px 20px;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background-color: #5cd6a4;
  }
`;

export default Input;
