# Lv.3 React-components

### 💡 Goal : 모달, 버튼을 포함한 웹페이지 연습하기


***

## ⚙️ features: 구현해야 할 기능
- 예시 사이트 : https://hh99-react-lv3.vercel.app/

### Modal
- 모달 2개를 구현합니다.
  - `취소`, `확인`이 있고, overlay를 클릭했을 때 모달이 닫히지 않는 형태
  - `닫기` 버튼만 있고, overlay를 클릭했을 때 모달이 닫히는 형태
  - 모달을 `on` 시키는 버튼의 형태는 각각 달라야 합니다. (위에서 만든 버튼을 재사용하는 것도 좋아요.)

### Button

- 총 6개 형태의 버튼을 구현합니다. (예시 페이지에서 확인)
    - `styled-components` 를 이용하여 구현하며, props를 적절하게 잘 활용하여 구현하세요.
    - 버튼 label에 선택적으로 아이콘을 넣을 수 있도록 구현하세요.

### Input

- 총 2개의 input을 구현합니다.
    - 일반형식의 input
    - 숫자를 넣었을 때, 3자리 수마다 `콤마 ,`가 찍히는 input
    - form을 구현하고 각 input에 값을 입력하고 `저장` 버튼을 눌렀을 때 `{name: '아무 텍스트', price: "콤마가 없는 금액"}` 을 `alert`에 표시해보세요.
 
### Select

- select를 구현합니다.
    - select를 클릭했을 때, option 들이 나오고 해당 option을 클릭하면 select의 값이 변경됩니다.
    - select를 클릭했을 때 부모 요소에 의해서 가려지지 않도록 구현합니다. 부모 요소에 `overflow: hidden`을 적용하면 자식 컴포넌트가 부모 컴포넌트를 넘어갔을 때 가려지게 됩니다. 부모 컴포넌트에 `hidden` 속성이 있다고 하더라도 select는 가려지지 않아야 합니다.


***

### ❓ Why: 과제 제출시에는 아래 질문의 답변과 함께 제출해주세요.

<details>
  <summary>1. 모달을 구현할 때 `react-portal`을 사용 하셨나요? `react-portal`이 무엇이고 어떻게 작동하는지 설명해 주세요.</summary>
  <div markdown="1">
 <br />   
`Modal.jsx` 파일에서 `react-portal`을 사용했습니다.
 <br/ >
    
>`react-portal`은 React에서 제공하는 기능으로, 컴포넌트 트리의 다른 부분에 렌더링해야 하는 자식 컴포넌트를 DOM 트리의 다른 부분으로 이동시켜줍니다. 주로 모달, 툴팁, 드롭다운과 같이 부모 요소의 스타일이나 레이아웃에 영향을 받지 않고 독립적으로 표시되어야 하는 UI 요소를 구현할 때 사용됩니다.
<br />
<ul> 작동 방식:
<li> ReactDOM.createPortal(child, container) 메서드를 사용합니다.</li>
<li> `child` : 렌더링할 React 컴포넌트</li>
<li> `container` : `child`를 렌더링할 DOM 노드</li>
</ul>
<br /> 
ReactDOM.createPortal(child, container)를 사용하여 child는 렌더링하려는 JSX, container는 자식을 렌더링할 DOM 요소를 지정합니다. 이는 모달, 툴팁 또는 오버레이와 같은 시나리오에서 부모 계층 외부에 컴포넌트를 렌더링해야 할 때 유용합니다.


  </div>
</details>

<details>
  <summary>2. 다양한 형태의 버튼을 만들 때, 공통된 스타일 요소와 각각의 특별한 스타일 요소를 어떤 방법으로 styled-component에 적용하셨나요?</summary>
  <div markdown="2">
  <br />
   공통 스타일과 고유 스타일을 가진 버튼을 만들기 위해 styled-component와 props를 사용했습니다.
  </div>
</details>

<details>
  <summary>3. 숫자 입력 필드에서 사용자가 입력한 콤마가 포함된 금액과 콤마가 제거된 실제 금액 값을 각각 어떻게 관리하셨나요? 이를 위해 여러 상태를 사용하셨나요, 아니면 단일 상태를 통해 처리하셨나요?</summary>
  <div>
  <br />
숫자 입력 필드에서 콤마가 포함된 금액을 나타내기 위해 `Number.toLocaleString`을 사용하였습니다. 실제 금액의 경우 상태에서 콤마를 제거하고 숫자만 저장하며 단일 상태로 유지하고, 표시할 때만 변한하여 사용합니다.
  
    
  </div>
</details>

<details>
  <summary>4. `overflow: hidden`이 적용된 부모 요소에도 영향을 받지 않고 옵션이 제대로 표시되게 하는 방법은 무엇인가요?</summary>
  <div>
  <br />
  `React Portal`을 사용하여 부모 요소 밖에서 렌더링하였습니다. Portal을 사용하게 되면 부모 요소의 `overflow` 속성에 영향을 받지 않습니다.
  </div>
</details>



  ***

🔗 https://react-rv3.vercel.app

 
