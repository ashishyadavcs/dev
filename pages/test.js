import React from "react";
import { toast } from "react-toastify";

const test = () => {
    const data = JSON.stringify({
        class: 12,
        name: "ashish",
        education:"Btech",
        from:"mzp"
    });
    const updatedSetting = async () => {
        const result = await fetch("/api/setting", {
            method: "POST",
            headers:{
                "content-type":"application/json"
            },
            body: JSON.stringify({
                path: "utils/setting.json",
                data: data,
            }),
        });
        const res = await result.json();
        toast.success(res.message);
    };
    return (
        <button className="theme-btn" onClick={e => updatedSetting()}>
            update setting
        </button>
    );
};

export default test;
