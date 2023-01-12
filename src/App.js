import { useState } from "react";
import "./App.css";
import { Configuration, OpenAIApi } from "openai";

function App() {
  const [prompt, setPrompt] = useState("");
  const configuration = new Configuration({
    apiKey: "",
  });

  const openai = new OpenAIApi(configuration);
  const [result,setResult] = useState("");
  const generateImage = async () => {
  const res = await openai.createImage({
      prompt: prompt,
      n: 1,
      size: "512x512",
    });
    setResult(res.data.data[0].url);
  };

  return (
    <div className="app-main">
      <div className="app-container">
        <h2 className = "header-text">Type out ur dream</h2>

        <textarea
          className="app-input"
          placeholder="Search Bears with Paint Brushes the Starry Night, painted by Vincent Van Gogh.."
          onChange={(e) => setPrompt(e.target.value)}
          rows="10"
          cols="40"
        />
        <button className="black-button" onClick={generateImage}>Generate an Image</button>
        {result.length > 0 ? (
          <img className="result-image" src={result} alt="result" />
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default App;