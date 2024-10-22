const { toast } = require("react-toastify");

const sendreq = async (e, method, url, router) => {
    e.preventDefault();
    const fdata = new FormData();
    fdata.append("file", e.target.image.files[0]);
    await fetch("/api/upload", {
        method: "post",
        body: fdata,
    })
        .then(res => {
            return res.json();
        })
        .then(async res => {
            if (res.file?.name) {
                const formdata = new FormData(e.target);
                formdata.append("image", res.file.url);
                const data = await fetch(url, {
                    method: `${method}`,
                    body: JSON.stringify(Object.fromEntries(formdata)),
                })
                    .then(res => res.json())
                    .catch(err => ({ message: err.message }));
                if (data.success) {
                    router.push(`?published=${Math.random()}`);
                    toast.success(data.message);
                } else {
                    toast.success(data.message);
                }
            }
        });
};
const addPortfolio = async e => {
    sendreq(e, "Post", "/api/portfolio");
};

const deletePortfolio = async (id, router) => {
    const confirm = window.confirm("are you sure to delete ?");
    if (confirm) {
        const data = await fetch(`/api/portfolio/${id}`, {
            method: "delete",
        })
            .then(res => res.json())
            .catch(err => err.message);
        if (data.success) {
            router.push(`?deleted=${id}`);
            toast.success(data.message);
        } else {
            toast.error(data.message);
        }
    }
};

module.exports = { deletePortfolio, addPortfolio, sendreq };
