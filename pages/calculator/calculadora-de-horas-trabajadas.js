import { FAQPageJsonLd, NextSeo } from "next-seo";
import Image from "next/image";
import { useState } from "react";

const Page = () => {
    const [calculator, setcalculator] = useState({
        st: "",
        et: "",
        result: "",
    });
    const subsTime = (st, et) => {
        const diff = Math.abs(new Date(st) - new Date(et));
        return (diff / (1000 * 60 * 60 * 24)).toFixed(2);
    };
    <FAQPageJsonLd
        mainEntity={[
            {
                questionName: "¿Qué es una calculadora de horas?",
                acceptedAnswerText:
                    "Una calculadora de horas es una herramienta que te ayuda a calcular la cantidad de tiempo que ha transcurrido entre dos fechas u horas. Es comúnmente utilizado por empleados, dueños de negocios y autónomos para realizar un seguimiento del tiempo que dedican a tareas o proyectos específicos.",
            },
            {
                questionName: "cómo se calcula el pago de horas extras?",
                acceptedAnswerText:
                    "para calcular el pago de horas extras, simplemente ingrese la hora de inicio del trabajo y la hora de finalización del trabajo y podrá obtener el total de horas trabajadas",
            },
        ]}
    />;
    return (
        <div className="container my-4">
            <style jsx>{`
                .formula {
                    background: #e3f1ec;
                    padding: 1rem;
                    border: 2px solid #ddd;
                    border-radius: 8px;
                }
                /*button animation*/

                .create-button {
                    font-family: monospace;
                    font-weight: bold;
                    text-transform: uppercase;
                    background: #000;
                    color: #fff;
                    border: none;
                    border-radius: 0;
                    position: absolute;
                    left: 50%;
                    top: 50%;
                    position: relative;
                    transform: translate(-50%, -50%);
                    border-radius: 3px;
                    cursor: pointer;
                    padding: 0.8em 1.6em;
                    font-size: 18px;
                    overflow: hidden;
                }
                .create-button:focus,
                .create-button:active {
                    outline: none;
                }
                .create-button:before,
                .create-button:after {
                    content: "";
                    position: absolute;
                    bottom: 0;
                    top: 0;
                    left: 0;
                    right: 0;
                    height: auto;
                    width: auto;
                    z-index: -1;
                    border-radius: inherit;
                    background: inherit;
                }
                .create-button:before {
                    background: linear-gradient(
                        90deg,
                        #0ebeff,
                        #ffdd40,
                        #ae63e4,
                        #47cf73,
                        #0ebeff,
                        #ffdd40,
                        #ae63e4,
                        #47cf73
                    );
                    background-size: 200% 200%;
                }
                .create-button:after {
                    margin: 3px;
                }
                .create-button:before,
                .create-button:focus:before {
                    animation: rainbow-border 1.5s linear infinite;
                }
                @keyframes rainbow-border {
                    0% {
                        background-position: 0% 50%;
                    }
                    100% {
                        background-position: 200% 50%;
                    }
                }

                /*form css*/
                .form {
                    background: #115445;
                    margin: 2rem 0 4rem;
                    padding: 2rem 1rem !important;
                    line-height: 1;
                    border-radius: 4px;
                    position: relative;
                    height: max-content;
                    box-shadow: 1px 20px 20px 0px #12320794;
                }
                .form form {
                    margin-bottom: 70px;
                }
                li {
                    text-transform: capitalize;
                }
                .form-field {
                    display: flex;
                    align-items: center;
                    margin-bottom: 10px;
                    justify-content: space-between;
                }
                .form-field.radio span {
                    color: #fff;
                }
                .form-field.radio > div {
                    display: flex;
                    justify-content: space-between;
                }
                textarea {
                    min-height: 120px;
                    outline: none;
                    border: none;
                    width: 60%;
                    padding: 10px;
                    font-size: 16px;
                }
                .radio label {
                    min-width: 120px;
                    padding: 10px;
                    background: #044637;

                    display: flex;
                    border-radius: 8px;
                    display: flex;
                    cursor: pointer;
                }
                .radio label:last-child {
                    margin-left: 10px;
                }
                .radio-btn {
                    border-radius: 8px;
                    display: block;
                    margin-top: 10px;
                }
                input[type="radio"] {
                    padding: 0 !important;
                }
                .form-field.radio > div > div {
                    display: flex;
                    background-color: red;
                    padding: 20px;
                }
                .form-field label {
                    color: #ffffff;
                    font-size: 16px;
                }
                select option {
                    background: #000;
                    color: azure;
                    line-height: 1.8;
                    height: 50px;
                }
                select option:checked {
                    color: #fff;
                    background: green;
                }
                .form-field input,
                .form-field select {
                    padding: 0.8rem;
                    width: 50%;
                    border: none;
                    font-size: 16px;
                    border-radius: 4px;
                    outline: none;
                }
                textarea {
                    border-radius: 4px;
                    outline: none;
                }
                .get-solution {
                    display: flex;
                    justify-content: flex-end;
                    line-height: 1.3;
                    transition: all 0.3s ease-in-out;
                }

                .get-solution button {
                    margin-left: 3px;
                    padding: 0.8rem 1.2rem;
                    border: none;
                    border-radius: 4px;
                    background: #10ac84;
                    color: rgb(1, 6, 10);
                    font-size: 16px;
                    cursor: pointer;
                    outline: none;
                }

                @keyframes showresult {
                    0% {
                        opacity: 0;
                    }
                    100% {
                        opacity: 1;
                    }
                }
                #result {
                    padding: 10px 30px;
                    background: aquamarine;
                    animation: showresult 1s linear;
                    position: absolute;
                    bottom: 5%;

                    left: 50%;
                    display: flex;
                    align-items: center;
                    transform: translate(-50%, -5%);
                }
                #result img {
                    margin-right: 7px;
                }
                .formula {
                    margin: 30px 0;
                }

                .d-none {
                    display: none;
                }
                @media screen and (max-width: 500px) {
                    .form {
                        width: 100%;
                    }
                    .form-field {
                        flex-direction: column;
                        align-items: flex-start;
                    }
                    .form-field input,
                    .form-field select {
                        width: 100%;
                    }
                    .form-field label {
                        margin: 5px;
                    }
                    .get-solution {
                        justify-content: flex-start;
                    }

                    .form-field.radio {
                        flex-direction: row;
                        align-items: center;
                    }
                    textarea {
                        min-width: 100%;
                    }
                }
            `}</style>
            <NextSeo
                canonical={`${process.env.NEXT_PUBLIC_APP_URL}/calculator/calculadora-de-horas-trabajadas`}
                title="# Calculadora De Horas ✅ | calculadora de horas trabajadas"
                description="calculadora de horas es una herramienta que te ayuda a calcular la cantidad de tiempo que ha transcurrido entre dos fechas u horas. "
            />
            <h1>
                &nbsp;<strong>calculadora de horas</strong>
            </h1>
            <form
                className="form"
                onSubmit={e => {
                    e.preventDefault();
                    const { st, et } = calculator;
                    setcalculator(prev => ({ ...prev, result: subsTime(st, et) }));
                }}
            >
                <div className="form-field">
                    <label htmlFor="st">hora de inicio</label>
                    <input
                        value={calculator.st}
                        onChange={e => setcalculator(prev => ({ ...prev, st: e.target.value }))}
                        id="st"
                        type="datetime-local"
                    />
                </div>
                <div className="form-field">
                    <label htmlFor="et">hora de finalización</label>
                    <input
                        value={calculator.et}
                        onChange={e => setcalculator(prev => ({ ...prev, et: e.target.value }))}
                        id="et"
                        type="datetime-local"
                    />
                </div>
                <div className="solve">
                    {calculator.result && (
                        <button className="btn btn-default">{calculator.result} Horas</button>
                    )}
                    <button className="btn theme-btn">calcular horas</button>
                </div>
            </form>
        </div>
    );
};

export default Page;
