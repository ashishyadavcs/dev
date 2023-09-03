import { media } from "config/device";
import { NextSeo } from "next-seo";
import { useEffect } from "react";
import { styled } from "styled-components";
import { clickToCopy } from "utils/common";

const Page = () => {
    useEffect(() => {
        document.querySelectorAll(".biolist li").forEach(li => (li.onclick = clickToCopy));
    }, []);
    return (
        <div className="container  my-4">
            <NextSeo
                title="# Best Instagram Bio For Girls"
                description="Generate best instagram bio for girls , top 100 best instagram bio for first impression"
            />
            <h1 className="text-center">
                Craft the perfect<br></br> Instagram Bio For Girls
            </h1>
            <strong className="my-2">Top 100 instagram bio for girls</strong>
            <span className="notice d-block text-center">click to copy</span>
            <Biolist className="biolist">
                <li>"Sassy but classy 💁‍♀️"</li>
                <li>"Living life one filter at a time 📸"</li>
                <li>"Smiles are always in fashion 😄💄"</li>
                <li>"Chasing dreams and sunsets 🌅✨"</li>
                <li>"Confidence level: Selfie with no filter 🤳"</li>
                <li>"Making the days count, not counting the days ⏳"</li>
                <li>"Dancing through life's ups and downs 💃"</li>
                <li>"Happiness is homemade 🏡❤️"</li>
                <li>"On a journey to discover my own magic ✨🌟"</li>
                <li>"Life is short, make every hair flip count 💁‍♀️💅"</li>
                <li>"Queen of my own world 👑🌍"</li>
                <li>"Creating my own sunshine on cloudy days ☀️"</li>
                <li>"In a relationship with adventures and good vibes only 🌍✌️"</li>
                <li>"I believe in pink and a positive attitude 💖🌸"</li>
                <li>"Just a girl with a heart full of wanderlust ✈️🌎"</li>
                <li>"Living the moments that make the best memories 📷🎉"</li>
                <li>"Strong women lift each other up 👭💪"</li>
                <li>"Chasing dreams, not boys 🌟💫"</li>
                <li>"Elegance is when the inside is as beautiful as the outside 💫👗"</li>
                <li>"Turning my dreams into plans 🌠📝"</li>
            </Biolist>

            <p>
                Top instagram bios for girls to decorate and make your instagram profile
                outstanding. Select and copy styles for your instagram bio
            </p>
           
            <h2>How to use instagram bio for girls tool</h2>
            <p>
                It is very easy to use this tool . There are two ways to use this tool either you
                can use use readymade style or you can make you own style from this tool for each
                line for your bio.
            </p>
            <h2>Why to use this instagram bio tool</h2>
            <p>
                In this era of social media instagram is the most famous social site for young
                peoples over the globe.To make the first impression on your instagram profile
                visitor it is most important to make your instagram bio look most attractive and
                professional.
            </p>
        </div>
    );
};

export default Page;
const Biolist = styled.ul`
    list-style: none;
    li {
        padding: 10px;
        border-radius: 8px;
        width: max-content;
        min-width: 300px;
        max-width: 100%;
        text-align: center;
        border: 3px solid teal;
        margin: 10px auto;
        transition: all 0.3s;
        cursor: pointer;
        position: relative;
        &::before{
            position: absolute;
            min-width: max-content;
            transition: all 0.3s;
                top: 50%;
                left: 150%;
                ${media.sm} {
                    top: 110%;
                    left: 0%;
                }
                transition: all 2s;
                padding: 10px;
                border-radius: 8px;
                display: inline-block;
                background: #000;
                color: #fff;
                z-index: 3;
        }
        &:hover {
            background: teal;
            color: #fff;
           ${media.minsm}{
            &::before {
                content: "click to copy";
            }
           }
        }
        &:active {
            &::before {
                content: "copied";
              
            }
        }
    }
`;
