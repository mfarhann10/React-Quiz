import { useEffect } from "react";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  useEffect(function () {
    fetch("http://localhost:9000/questions")
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((e) => console.error(e.message));
  }, []);

  return (
    <div className="flex flex-col items-center justify-between">
      <Header />
      <Main>
        <p>1/15</p>
        <p>Question</p>
      </Main>
    </div>
  );
}

export default App;
