import { createContext, useContext } from "react";

export const ImageContext = createContext({
    images: [
        {
            id: 1,
            img: "https://picsum.photos/200/200",
        },
        {
            id: 2,
            img: "https://picsum.photos/200/201",
        },
        {
            id: 3,
            img: "https://picsum.photos/200/202",
        },
        {
            id: 4,
            img: "https://picsum.photos/200/203",
        },
        {
            id: 5,
            img: "https://picsum.photos/200/204",
        },
        {
            id: 5,
            img: "https://picsum.photos/200/204",
        },
        {
            id: 5,
            img: "https://picsum.photos/200/204",
        },
        {
            id: 5,
            img: "https://picsum.photos/200/204",
        },
        {
            id: 5,
            img: "https://picsum.photos/200/204",
        },
        {
            id: 5,
            img: "https://picsum.photos/200/204",
        },
        {
            id: 5,
            img: "https://picsum.photos/200/204",
        },
        {
            id: 5,
            img: "https://picsum.photos/200/204",
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