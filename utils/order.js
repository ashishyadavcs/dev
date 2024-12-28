import { toast } from "react-toastify";
import { uploadFile } from "./upload";
export const createOrder = async (e, router, user) => {
    const uploadedFile = e.target.file.files[0];
    if (!uploadedFile) {
        toast.error("file is required");
        return;
    }
    await uploadFile(uploadedFile, async file => {
        const formdata = {
            description: e.target.description.value,
            file: file.url,
            whatsapp: e.target.mobile.value,
            userid: user.data._id,
        };

        const data = await fetch(`/api/order`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formdata),
        })
            .then(res => res.json())
            .catch(err => ({
                success: false,
                message: err.message,
            }));

        if (data.success) {
            toast.success("Order created successfully");
            router.push(`/dashboard/orders/${data.order._id}`);
            document.querySelector(".orderpop")?.classList.remove("active");
        } else {
            toast.error(JSON.stringify(data.message));
        }
    });
};
