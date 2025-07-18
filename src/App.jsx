import { useEffect, useState } from "react";
import { ImageProvider, useImage } from "./context/ImageContext";
import ThemeToggle from "./components/ThemeToggle";
import ImageCard from "./components/ImageCard";

function App() {
  const {images} = useImage();
  const [theme,setTheme] = useState("winter");
  console.log(images,"iamges");

  const lightTheme = () => {
    setTheme("winter");
  }

  const darkTheme = () => {
    setTheme("night");
  }

  
  useEffect(() => {
    const html = document.querySelector("html");
    html.setAttribute("data-theme","");
    html.setAttribute("data-theme",theme);
  },[])

  return (
    <ImageProvider value={{images,theme,lightTheme,darkTheme}}>
      <div className="min-h-screen max-w-7xl mx-auto p-3">
        <div className="flex items-center bg-base-300/40 z-50 backdrop-blur-lg justify-between shadow-md shadow-primary-content rounded-lg p-4 mb-4 sticky top-2 ">
          <h3 className="text-2xl font-semibold text-primary">Image Gallery</h3>
          <ThemeToggle />
        </div>

        {/* Images  */}
        <div className="grid gap-3 md:grid-cols-4 sm:grid-cols-2 grid-cols-1 p-3 bg-base-content/5 rounded-lg max-h-[80%] h-[80%]">
          {images.length > 0 ? images.map(image => <ImageCard image={image} />)  : <h3 className="bg-secondary-content text-sm">No Image Found</h3>}
        </div>
      </div>
    // </ImageProvider>
  );
}

export default App;
