import { toast } from "react-toastify";

export const uploadFile = async (file, cb) => {
    const fdata = new FormData();
    fdata.append("file", file);
    const result = await fetch("/api/upload", {
        method: "post",
        body: fdata,
    })
        .then(res => res.json())
        .catch(err => console.log(err));
    if (result.success) {
        cb(result.file);
    } else {
        toast.error(result.message);
        throw result.message;
    }
};
