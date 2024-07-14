import React, { useState } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

// 모달 버튼
const ModalButton = styled.button`
  padding: 10px 20px;
  margin-right: 10px;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  background-color: ${(props) => (props.$primary ? "#74edbb" : "white")};
  color: ${(props) => (props.$primary ? "black" : "#f08080")};
  border: 2px solid ${(props) => (props.$primary ? "#74edbb" : "#f08080")};
`;

// 모달 오버레이
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

// 모달 내용
const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
`;

const ModalContentWithButtons = styled(ModalContent)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

function Modal() {
  const [isFirstModalOpen, setIsFirstModalOpen] = useState(false);
  const [isSecondModalOpen, setIsSecondModalOpen] = useState(false);

  const openFirstModal = () => setIsFirstModalOpen(true);
  const closeFirstModal = () => setIsFirstModalOpen(false);

  const openSecondModal = () => setIsSecondModalOpen(true);
  const closeSecondModal = () => setIsSecondModalOpen(false);

  return (
    <>
      <h1>Modal</h1>
      <ModalButton $primary onClick={openFirstModal}>
        open modal
      </ModalButton>
      <ModalButton onClick={openSecondModal}>open modal</ModalButton>

      {isFirstModalOpen &&
        ReactDOM.createPortal(
          <ModalOverlay>
            <ModalContentWithButtons onClick={(e) => e.stopPropagation()}>
              <h2>First Modal</h2>
              <p>This is the first modal content.</p>
              <ModalButton onClick={closeFirstModal}>취소</ModalButton>
              <ModalButton $primary onClick={closeFirstModal}>
                확인
              </ModalButton>
            </ModalContentWithButtons>
          </ModalOverlay>,
          document.getElementById("modal-root")
        )}

      {isSecondModalOpen &&
        ReactDOM.createPortal(
          <ModalOverlay onClick={closeSecondModal}>
            <ModalContent onClick={(e) => e.stopPropagation()}>
              <h2>Second Modal</h2>
              <p>This is the second modal content.</p>
              <ModalButton $primary onClick={closeSecondModal}>
                닫기
              </ModalButton>
            </ModalContent>
          </ModalOverlay>,
          document.getElementById("modal-root")
        )}
    </>
  );
}

export default Modal;
