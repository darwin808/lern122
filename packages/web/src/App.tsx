import React from "react";
import "./App.css";
import { Button, Input } from "@darwin/common";
function App() {
  const [name, setname] = React.useState<string>("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setname(e.target.value);
  };
  return (
    <div className="App">
      <Button onClick={() => alert("btn from common")}>
        darwin from webbbb
      </Button>
      <Input value="darwin" onChange={handleChange} />
      {process.env.REACT_APP_DARWIN}
    </div>
  );
}

export default App;
