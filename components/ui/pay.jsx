import { useRouter } from "next/router";
import Script from "next/script";
import {toast} from "react-toastify";

const Paynow = ({ product }) => {
    const router = useRouter();
    const callbackurl = async () => {
        /*verify payment 
  node-api:  /api/verifypayment
    */
    };
    const pay = async () => {
        const { key } = await fetch("/api/paymentkey")
            .then(res => res.json())
            .catch(err => "");
        const data = await fetch("/api/payment", {
            method: "POST",
            body: JSON.stringify({
                amount: product.price,
            }),
        })
            .then(res => res.json())
            .catch(err => "");

        if(data.success){
            console.log({data})
            const issuccess = await fetch("/api/verifypayment", {
                method: "POST",
                body: {
                    razorpay_order_id: product.id,
                    razorpay_payment_id:data.order.id,
                },
            }).then(res=>res.json())
            console.log('is success',issuccess)
            if (issuccess) {
                router.push(`/dashboard/orders/${product.id}?success=true`);
            }else{
                toast.error(issuccess.message)
            }
        }
        const options = {
            key, // Enter the Key ID generated from the Dashboard
            amount: data.order.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
            currency: "INR",
            name: process.env.NEXT_PUBLIC_APP_NAME,
            description: "Test Transaction",
            image: "https://www.frontendzone.com/dev/favicon.svg",
            order_id: data.order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
            callback_url: callbackurl(),
            prefill: {
                //loggedin user details
                name: "Gaurav Kumar",
                email: "gaurav.kumar@example.com",
                contact: "9000090000",
            },
            notes: {
                address: "Razorpay Corporate Office",
            },
            theme: {
                color: "#3399cc",
            },
        };

        const razorpay = new Razorpay(options);
        if (!razorpay) return;
        razorpay.open();
    };

    return (
        <>
            <button onClick={pay}>pay now</button>
            <Script src="https://checkout.razorpay.com/v1/checkout.js" />
        </>
    );
};

export default Paynow;
