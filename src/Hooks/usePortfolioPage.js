import { useEffect } from "react";

export const usePortfolioPage = (pageReady,setPageReady) => {
    
    useEffect(() => {
        const loadElements = () => {
            const mainPage = document.getElementById("home");
            mainPage.style.display = "block";
            setPageReady(true);
        }

        setTimeout( () => {
            ( () => loadElements())();
        }, 2000 );
    }, [pageReady])
}