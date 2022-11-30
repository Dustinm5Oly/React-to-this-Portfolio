import React from "react";
import PageContent from "../pages/PageContent";
import About from "../pages/About";
import Portfolio from "../pages/Portfolio";
import Contact from "../pages/Contact";
import Resume from "../pages/Resume";

export default function Page ({currentPage}){
    const renderPage = () => {
        switch (currentPage.name){
            case "About Me": 
            return <About />
            case "Portfolio":
            return <Portfolio />
            case "Contact":
            return <Contact />
            case "Resume":
            return <Resume />
            default: 
            return <About />
        }
    };
    return (
        <section>
            <h2>{currentPage.name}</h2>
            <PageContent>{renderPage()}</PageContent>
        </section>
    )

}