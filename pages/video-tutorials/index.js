import React from "react";
import Styled from "@/styles/tutorials.styled";
import Banner from "@/components/web/banner";
const Page = () => {
    return (
        <>
        <Banner title={"video tutorials"}/>
        <Styled.Section>
            
            <div className="container">
                
                <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/videoseries?si=XXQ6EIy63MyA7Ene&amp;list=PLym_M-q19oHGBcROlwSOiIRgYM8WmqUiT"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen
                ></iframe>
               </div>
        </Styled.Section>
        </>
      
    );
};

export default Page;
