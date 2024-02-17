import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { media } from "config/device";
import { FaCheckCircle } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { NextSeo } from "next-seo";

const Quiz = ({ quiz }) => {
    const [start, setStart] = useState(false);
    const [data, setData] = useState(quiz);
    const [next, setnext] = useState(0);
    const [score, setScore] = useState(0);
    var mySound;
    const checkAns = (e, i) => {
        mySound = new Audio("/sound/true.mp3")
        if (data[next].ans == i) {
            if (e.isTrusted) {
                setScore(s => s + 1);
            }
            e.currentTarget.classList = "correct";
            mySound.play();
        } else if (data[next].ans != i) {
            e.currentTarget.classList = "wrong";
            mySound.src = "/sound/false.mp3";
            mySound.playbackRate = 1.2;
            mySound.play();
        } else {
            e.currentTarget.classList = "";
        }
    };

    useEffect(() => {
        document.querySelectorAll(".que li").forEach(el => (el.classList = ""));

       if(start){
        var t = 100;
        const int = setInterval(() => {
            t = Number(t) - 1;

            document.querySelector(":root").style.setProperty("--twidth", `${100 - t}%`);
            if (t == 0) {
                clearInterval(int);
                setnext(p => (data.length - 1 > p ? Number(p) + 1 : clearInterval(int)));
                document.querySelector(":root").style = "";
               
            }
        }, 100);
        return () => {
            clearInterval(int);
        };
       }
    }, [next,start]);
    const showAns = () => {
        document.querySelectorAll(".que li").forEach(el => el.click());
    };
    return (
        <Pages>
            <NextSeo
                title="CSS Quiz With Answers 🔥"
                description="css quiz with ansswer , test your css knowledge with css quiz "
            />
            <div className="quiz">
                {start ? (
                    <div className="que">
                        <div className="left">
                            <h2 data-index={next + 1}>{data[next]?.que}</h2>
                            <ul>
                                {data[next]?.options.map((q, i) => (
                                    <li onClick={e => checkAns(e, i)}>
                                        {q} <FaCheckCircle className="true" color="lime" />
                                        <RxCross2 color="red" className="false" />
                                    </li>
                                ))}
                            </ul>
                            <div className="action">
                                <button
                                    onClick={e => setnext(v => v - 1)}
                                    className={`filled ${next < 1 && "disable"}`}
                                >
                                    Prev
                                </button>
                                <button onClick={e => showAns()} className="outline">
                                    show ans
                                </button>
                                <button
                                    onClick={e => setnext(v => v + 1)}
                                    className={`filled ${next > data.length && "disable"}`}
                                >
                                    Next
                                </button>
                            </div>
                        </div>
                        <div className="right">
                            <h3>score</h3>
                            <div className="score">
                                <span className="get">{score * 5}</span>
                                <span className="all">{data.length * 5}</span>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="start">
                        <button onClick={e => setStart(true)}>Start Quiz</button>
                    </div>
                )}
            </div>
        </Pages>
    );
};

export default Quiz;
const Pages = styled.div`
    * {
        user-select: none;
    }
    .quiz {
        padding: 30px 90px;
        .start {
            display: flex;

            justify-content: center;
            button {
                padding: 20px 50px;
                outline: none;
                border-radius: 10px;
                font-weight: 600;
                background: #f100f1;
                color: #fff;
                font-size: 20px;
                box-shadow: 0 3px 5px 1px #8f008f;
                transition: all 0.3s;
                &:focus {
                    box-shadow: none;
                }
            }
        }
        .que {
            display: flex;
            justify-content: space-between;
            .left {
                width: 60%;
            }
            .right {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                width: 30%;
                .score {
                    font-size: 70px;
                    font-weight: 700;
                    display: inline-flex;
                    align-items: center;
                    .get {
                        position: relative;
                        margin-right: 20px;
                        width: max-content;
                        padding: 0 10px;
                        &:after {
                            content: "";
                            height: 100%;
                            width: 10px;
                            display: inline-block;
                            background: lime;
                            transform: skew(-30deg);
                            position: absolute;
                            left: 110%;
                        }
                    }
                    .all {
                        margin-left: 10px;
                    }
                }
            }
            h2 {
                position: relative;
                padding: 30px 100px;
                box-shadow: 0 0 10px 3px #ddd;
                margin-bottom: 30px;
                text-align: center;
                border-radius: 10px;
                font-size: 20px !important;
                min-height: 180px;
                display: flex;
                justify-content: center;
                align-items: center;
                &::before {
                    display: inline-flex;
                    justify-content: center;
                    align-items: center;
                    content: attr(data-index);

                    height: 30px;
                    width: 30px;
                    border-radius: 50%;
                    position: absolute;
                    left: 20px;
                    top: 50%;
                    transform: translateY(-50%);
                    border: 5px solid pink;
                }
                &:after {
                    content: "";
                    width: var(--twidth);
                    height: 3px;
                    background: lime;
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    display: block;
                    transition: width 1s;
                }
            }
            @keyframes zoom {
                0% {
                    transform: scale(1);
                }
                100% {
                    transform: scale(1.1);
                }
            }
            ul {
                list-style: none;
                li {
                    position: relative;
                    font-size: 15px;

                    &.correct {
                        /* animation: zoom 0.3s linear forwards; */
                        border: 2px solid lime;
                        .true {
                            display: block;
                        }
                    }
                    &.wrong {
                        border: 2px solid red;
                        .false {
                            display: block;
                        }
                    }
                    padding: 14px 20px 14px 40px;
                    margin-bottom: 20px;
                    border-radius: 10px;
                    font-weight: 600;
                    cursor: pointer;
                    box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.24);
                    svg {
                        display: none;
                        position: absolute;
                        top: 50%;
                        right: 20px;
                        transform: translateY(-50%);
                    }
                }
            }
            .action {
                margin-top: 30px;
                display: flex;
                gap: 20px;
                justify-content: space-between;
                button {
                    font-weight: 600;
                    background: #fff;
                    padding: 15px 20px;
                    border-radius: 8px;
                    min-width: 130px;
                    width: 100%;
                    &.disable {
                        pointer-events: none;
                        opacity: 0.6;
                    }
                    &.outline {
                        border: 2px solid teal;
                    }
                    &.filled {
                        background: teal;
                        color: #fff;
                    }
                }
            }
        }
    }
    ${media.sm} {
        .quiz {
            padding: 20px;
            .que {
                flex-direction: column;
                gap: 100px;
                > div {
                    width: 100% !important;
                }

                ul {
                    li {
                        padding: 10px 40px 10px 20px;
                    }
                }
                h2 {
                    min-height: 100px;
                    &::before {
                        top: 0px;
                        left: 0px;
                        background: #fff;
                        z-index: 9;
                        height: 30px;
                        width: 30px;
                    }
                    padding: 20px;
                    margin-bottom: 20px;
                }
                .action {
                    flex-direction: column-reverse;
                }
            }
        }
    }
`;
