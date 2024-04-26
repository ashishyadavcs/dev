import React from "react";

const Select = ({ options }) => {
    return (
        <div className="select">
            <ul>
                {options.map((li, i) => {
                    return (
                        <>
                            <li key={i}>{li}</li>
                        </>
                    );
                })}
            </ul>
        </div>
    );
};
export default Select;
