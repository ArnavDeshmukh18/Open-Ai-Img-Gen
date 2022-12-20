import { useState } from "react";
import "./App.css";
import { Configuration, OpenAIApi } from "openai";
function App() {
  const [title, setTitle] = useState("");
  const [img, setImg] = useState("");
 


  const configuration = new Configuration({
    apiKey: "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",
  });

  const openai = new OpenAIApi(configuration);
  var image_url = "";
  const getdata = async () => {
    const response = await openai.createImage({
      prompt: title,
      n: 1,
      size: "1024x1024",
    });
    image_url = response.data.data[0].url;
    setImg(image_url);
    
  };

  return (
    <div className="App">
      <h1>Image Generator</h1>
      <input type="text" placeholder="Type Something..."     onChange={(e) => setTitle(e.target.value)}/>
      <button onClick={getdata}>GENERATE IMAGE</button>
      {img.length > 0 ? (
            <img className="result-image" src={img} alt="result" />
          ) : (
            <></>
          )}
    
      
    </div>
  );
}

export default App;
