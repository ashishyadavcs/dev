import Inpostad from "@/components/ads/inpostad";
import Faq from "@/components/faq";
import { media } from "config/device";
import { NextSeo } from "next-seo";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Page = () => {
    const perc = [60, 65, 70, 75, 80, 85, 90, 95, 100];
    const [inputs, setinputs] = useState({
        percent: "75",
        present: "190",
        total: "280",
    });
    useEffect(() => {

        document.querySelector('.result').classList.add('active')
    }, [inputs]);
    const faq = [
        {
            que: `how to calculate attendance percentage`,
            ans: `To calculate attendance percentage, divide present days with total days`,
        },
        {
            que: "how to use this calculator",
            ans: `Just input the values, it is automatic calculator as you input values percentage will be calculated automaticaly.`,
        },
    ];
    return (
        <Calculator className="container my-4">
            <NextSeo
                title="# Attendance Percentage Calculator | calculate the required classes to attend"
                description="Attendance percentage calculator for college student to calculate required classes to attend to maintain their minimum attendance percentage"
                canonical={`${process.env.NEXT_PUBLIC_APP_URL}/calculator/attendance`}
            />
            
            <div className="row">
                <div className="col-md-4 sticky">
                    <Inpostad />
                </div>
                <div className="col-md-4">
                <h1 className="text-center">Attendance Calculator</h1>
                    <form onSubmit={e => e.preventDefault()}>
                        <label>
                            <span>Percentage Required</span>
                            <select
                                onChange={e => {
                                    setinputs(p => ({ ...p, percent: e.target.value }));
                                }}
                                value={inputs.percent}
                            >
                                {perc.map(per => (
                                    <option value={per}>{`${per}%`}</option>
                                ))}
                            </select>
                        </label>
                        <label>
                            <span>Present Days</span>
                            <input
                                value={inputs.present}
                                onChange={e => {
                                    setinputs(p => ({ ...p, present: e.target.value }));
                                }}
                                type="number"
                            />
                        </label>
                        <label>
                            <span> Total Days</span>
                            <input
                                value={inputs.total}
                                onChange={e => {
                                    setinputs(p => ({ ...p, total: e.target.value }));
                                }}
                                type="number"
                            />
                        </label>
                        <button>calculate</button>
                    </form>
                   
                    <div className="result">
                        You need to attend{" "}
                        <strong style={{ color: "red" }}>
                            {(
                                parseFloat((inputs.percent * inputs.total) / 100).toFixed(2) -
                                inputs.present
                            ).toFixed(2)}
                        </strong>{" "}
                        more classes to attain {inputs.percent}% attendance
                        <br></br>
                        <br></br>
                        Current Attendance:{" "}
                        <strong>
                            {inputs.present}/{inputs.total}
                        </strong>
                        &rarr;<strong>{((inputs.present * 100) / inputs.total).toFixed(2)}%</strong>
                        {/* {(inputs.present * 100) / inputs.total}% Attendance Required: 3/4 &rarr; 75.00% */}
                    </div>
                    <Image src="/images/attendance-percentage-calculator.webp" layout="responsive" width={1280} height={860} alt="attendance percentage calculator"/>
                    <Faq title={"frequently asked questions"} data={faq} />
                </div>
                <div className="col-md-4 sticky">
                    <Inpostad />
                </div>
            </div>
        </Calculator>
    );
};

export default Page;
const Calculator = styled.div`
.sticky{
    position: sticky;
    top: 70px;
    height: 100%;
}
    ${media.sm} {
        [class*="col-md"]:first-child {
            order: 3;
        }
        [class*="col-md"]:nth-of-type(2) {
            order: 1;
        }
        [class*="col-md"]:nth-of-type(3) {
            order: 2;
        }
    }
    .result {
        opacity: 0.2;
        transition: all 0.3s;
        width: 300px;
        margin: 30px auto;
        color: #047840;
        font-size: 18px;
        line-height: 2;
    }
    .result.active{
        opacity: 1;
    }
    form {
        margin: auto;
        width: max-content;
    }
    button {
        display: block;
        width: 100%;
        padding: 10px;
        text-align: center;
        background: #040428;
        color: #fff;
    }
    label {
        display: flex;
        gap: 10px;
        align-items: center;
        background: #f1f1f17d;
        margin: 8px 0;
        width: 300px;
        justify-content: space-between;
        border: 1px solid #ddd;
        border-collapse: collapse;

        span {
            padding: 10px;
            min-width: max-content;
        }
        input,
        select {
            padding: 10px;
            outline: none;
            font-size: 18px;
            border: 1px solid #ddd;
            margin: 0 !important;
            /* max-width: 80px; */
        }
        select {
            cursor: pointer;
        }
    }
`;
