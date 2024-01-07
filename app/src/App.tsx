import { useState } from "react";
import "./App.css";
import { useQuery } from "react-query";
import { queryClient } from "./utils/query";
import { Button, TextField } from "@mui/material";

function App() {
  const [text, setText] = useState<string>("");

  const { data = [] } = useQuery("notes", () => {
    return queryClient.getQueryData<string[]>("notes") ?? [];
  });

  const handleClick = () => {
    if (!text) {
      return;
    }
    queryClient.setQueryData("notes", [...data, text]);
    queryClient.invalidateQueries("notes");
    setText("");
  };

  return (
    <>
      <h1>Apache - Docker</h1>
      <h2>Running</h2>
      <div className="card">
        <TextField
          placeholder="Enter your note"
          className="note-input form-control"
          defaultValue=""
          value={text}
          onChange={(e) => setText(e.target.value)}
          sx={{
            width: "100%",
            marginBottom: "20px",
            background: "#fff",
            borderRadius: "10px",
            border: "none",
          }}
        />
        <Button
          className="button"
          onClick={handleClick}
          sx={{
            width: "100%",
            marginBottom: "20px",
            borderRadius: "10px",
            color: "#fff",
            background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
          }}
        >
          Add note
        </Button>
        <div
          className="notes-list"
          style={{
            marginTop: "20px",
          }}
        >
          {data?.map((note) => (
            <div
              className="note-card"
              key={note}
              style={{
                background: "#fffd6cd5",
                padding: "10px",
                borderRadius: "10px",
                marginBottom: "10px",
                color: "#000",
              }}
            >
              {note}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
