import Container from "@/components/Container";
import React from "react";
import styled from "styled-components";

const Ui = () => {
    return (
        <Pagestyle>
            <Container classname="py-4">
                <h1 className="mb-4">CSS only loader | source code</h1>
                <style jsx>
                    {`
                        * {
                            margin: 0;
                            padding: 0;
                            box-sizing: border-box;
                        }

                        body {
                            display: grid;
                            place-content: center;
                            height: 100vh;
                            background: #121212;
                        }

                        .loading-container {
                            position: relative;
                            height: 5rem;
                            width: 5rem;
                        }

                        .loading-progress {
                            position: absolute;
                            height: 100%;
                            width: 100%;
                            border-radius: 50%;
                            border: 5px solid #accaff36;
                            border-radius: 50%;
                        }
                        .loading-progress::before {
                            content: "";
                            position: absolute;
                            height: 100%;
                            width: 100%;
                            border-radius: 50%;
                            border: 5px solid transparent;
                            border-top-color: #accaff;
                            top: -5px;
                            left: -5px;
                            animation: spin 1s linear infinite;
                        }

                        @keyframes spin {
                            0% {
                                transform: rotate(0deg);
                            }
                            100% {
                                transform: rotate(360deg);
                            }
                        }
                    `}
                </style>
                <div class="loading-container">
                    <div class="loading-progress"></div>
                </div>
                <h2>Html</h2>
                <textarea
                    className="textarea"
                    value={`
                <div class="loading-container">
                    <div class="loading-progress"></div>
                </div>
                
            `}
                />
                <h2>CSS</h2>

                <textarea
                    className="textarea"
                    value={`
                * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  display: grid;
  place-content: center;
  height: 100vh;
  background: #121212;
}

.loading-container {
  position: relative;
  height: 5rem;
  width: 5rem;
}

.loading-progress {
  position: absolute;
  height: 100%;
  width: 100%;
  border-radius: 50%;
  border: 5px solid #ACCAFF36;
  border-radius: 50%;
}
.loading-progress::before {
  content: "";
  position: absolute;
  height: 100%;
  width: 100%;
  border-radius: 50%;
  border: 5px solid transparent;
  border-top-color: #ACCAFF;
  top: -5px;
  left: -5px;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
            `}
                />
            </Container>
        </Pagestyle>
    );
};

export default Ui;
const Pagestyle = styled.section`
    h2 {
        margin: 10px 0;
    }
    textarea {
        padding: 10px;
    }
`;
