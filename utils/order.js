export const createOrder = async (e) => {
  const formdata = {
    description: e.target.description.value,
    file: await getimage(e.target.file.files[0]),
    mobile: e.target.mobile.value,
  };

  const data = await fetch(`http://localhost:4000/order`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formdata),
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        return {
          error: {
            message: res.status,
            status: res.statusText,
          },
        };
      }
    })
    .catch((err) => console.log(err));

  if (data?.error) {
    toast.error(data?.error.message);
  } else {
    toast.success("Order created successfully");
    document.querySelector(".orderpop")?.classList.add("d-none");
  }
};
