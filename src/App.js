import "./App.css";
import { createContext, useState } from "react";
import { Navigation } from "./component/navbar/navbar";
import { Product } from "./component/productcomponent/Product";
export const themeContext = createContext([]);

function App() {
  const [image, setimage] = useState("");
  const handlechangeimage = (e) => {
    setimage(e.target.src);
  };
  // const handlequnty = (e) => {
  //   console.log(e);
  // };

  return (
    <themeContext.Provider
      value={{
        image,
        handlechangeimage,
      }}
    >
      <div className="App">
        <Navigation />
        <Product />
      </div>
    </themeContext.Provider>
  );
}

export default App;
