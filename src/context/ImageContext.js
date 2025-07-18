import { createContext, useContext } from "react";

export const ImageContext = createContext({
    images: [
        {
            id: 1,
            img: "https://picsum.photos/100/100"
        },
        {
            id: 1,
            img: "https://picsum.photos/100/100"
        },
        {
            id: 1,
            img: "https://picsum.photos/100/100"
        },
        {
            id: 1,
            img: "https://picsum.photos/100/100"
        },
        {
            id: 1,
            img: "https://picsum.photos/100/100"
        },
        
    ],
    theme: "winter",
    lightTheme: () => {},
    darkTheme: () => {},
})

export const ImageProvider = ImageContext.Provider;

export const useImage = () => {
    return useContext(ImageContext);
}