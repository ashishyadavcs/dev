export const intialiseGetRequest = () => {
    return {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    };
};

export const intialisePostRequest = () => {
    return {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
    };
};
