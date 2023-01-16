import { toast } from "react-toastify";
export const createOrder = async (e, router) => {
  const formdata = {
    description: e.target.description.value,
    file: "https://kjhgy.com",
    mobile: e.target.mobile.value,
  };

  const data = await fetch(`/api/order`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formdata),
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));

  if (data.success) {
    toast.success("Order created successfully");
    router.push(`/dashboard/order/${data.order._id}`);
    document.querySelector(".orderpop")?.classList.add("d-none");
  } else {
    toast.error("something went wrong");
  }
};
