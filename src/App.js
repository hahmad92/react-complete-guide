import React, { useCallback, useState, useMemo } from "react";
import Button from "./components/UI/Button/Button";

import "./App.css";
import DemoList from "./components/UI/Demo/DemoList";

function App() {
  // const [showParagraph, setShowParagraph] = React.useState(false);
  // const [allowToggle, setAllowToggle] = React.useState(false);

  // console.log("APP RUNNING");

  // // This function is created everytime the component is re-evaluated and hence a brand new function is created everytime.

  // const toggleParagraphHandler = useCallback(() => {
  //   if (allowToggle) {
  //     setShowParagraph((prevShowParagraph) => !prevShowParagraph);
  //   }
  // }, [allowToggle]);

  // const allowToggleHandler = useCallback(() => {
  //   setAllowToggle(true);
  // }, []);

  // return (
  //   <div className="app">
  //     <h1>Hi there!</h1>
  //     <DemoOutput show={showParagraph} />
  //     <Button onClick={toggleParagraphHandler}>Toggle Paragraph</Button>
  //     <Button onClick={allowToggleHandler}>Allow Toggle</Button>
  //   </div>
  // );

  const [listTitle, setListTitle] = useState("My List");

  const changeTitleHandler = useCallback(() => {
    setListTitle("New Title");
  }, []);

  const listItems = useMemo(() => [5, 3, 1, 10, 9], []);

  return (
    <div className="app">
      <DemoList title={listTitle} items={listItems} />
      <Button onClick={changeTitleHandler}>Change List Title</Button>
    </div>
  );
}

export default App;
