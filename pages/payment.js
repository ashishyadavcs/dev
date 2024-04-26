import { loadStripe } from "@stripe/stripe-js";
import Image from "next/image";

const payment = () => {
    const item = {
        name: "Apple AirPods",
        description: "Latest Apple AirPods.",
        image: "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80",
        quantity: 0,
        price: 999,
    };
    const stripePromise = loadStripe(`${process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY}`);
    const createCheckOutSession = async () => {
        const stripe = await stripePromise;
        const checkoutSession = await fetch("/api/create-stripe-session", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            redirect: "follow",
            referrerPolicy: "no-referrer",
            body: JSON.stringify(item),
        }).then(response => response.json());

        const result = await stripe.redirectToCheckout({
            sessionId: checkoutSession.data.id,
        });
        if (result.error) {
        }
    };

    return (
        <>
            {/* https://dev.to/byteslash/stripe-checkout-with-next-js-the-complete-guide-3i1 */}
            <div className="container">
                <div>
                    <Image src={item.image} alt="" height={300} width={300}></Image>
                    <h2>{item.name}</h2>
                    <p>{item.description}</p>
                    <p>{item.price}$</p>
                    <button onClick={createCheckOutSession} className="theme-cta">
                        pay now
                    </button>
                </div>
            </div>
        </>
    );
};

export default payment;
