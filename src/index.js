import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root")); // 아이디가 root인 문서를 가져와서 react dom을 만든다
root.render(<App />, document.getElementById("root")); // root에 렌더링한다 app 컴포넌트를

// root.render(<App />);
// 생성된 root에 App 컴포넌트를 렌더링합니다.
// 두 번째 인자인 document.getElementById("root")는 불필요합니다.
//react 18에서는 이전 버전과 달리 reactDom.render() 대신 ReactDOM.createRoot()를 사용하여 렌더링 하는 새로운 방식 도입. => react의 동시성 기능을 지원하기 위한 변경사항

//React의 동시성 기능
//React 애플리케이션의 성능을 향상시키고, 사용자 경험을 개선하기 위해 설계된 기능입니다. 이 기능은 동시성(Concurrency)을 도입하여 UI를 더 부드럽고 반응성 있게 만들어 주고, 여러 작업을 효율적으로 처리할 수 있도록 함.
//기존 React에서는 Ui 업데이트가 순차적 진행. 작업이 큐에 들어가면 하나씩 처리. -> 동시성 모드에서는 여러 작업을 동시에 진행. 이를 통해 React는 UI 렌더링을 더욱 유연하게 관리하가고 사용자 경험 개선 가능.
// => React의 동시성 모드는 UI 응답성을 개선하고, 성능 최적화를 돕는 중요한 기능. 사용자가 상호 작용할 때 즉시 반응할수 있도록 하며, 중요한 작업을 우선 처리하고, 나머지 작업은 비동기적으로 효율적으로 처리함.
