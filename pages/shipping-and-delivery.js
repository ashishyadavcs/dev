import { NextSeo } from "next-seo";

const ShippingAndDelivery = () => {
    const year = new Date().getFullYear();
    return (
        <>
            <NextSeo
                title="Shipping & Delivery Policy | frontendzone"
                description="Shipping and delivery information for orders placed via frontendzone."
                canonical={`${process.env.NEXT_PUBLIC_APP_URL || "https://frontendzone.com"}/shipping-and-delivery`}
                noindex
            />
            <div className="container my-4 entry-content" itemProp="text">
                <h1>Shipping &amp; Delivery Policy</h1>
                <p>
                    Most of our offerings are digital in nature and delivered instantly online. In
                    certain cases we may ship physical or hybrid products (such as bundled media,
                    merchandise, or documentation). This policy outlines how such deliveries are
                    handled.
                </p>

                <h2>1. Digital Delivery</h2>
                <p>
                    Access links, license keys, or downloadable assets are typically provided
                    immediately after successful payment. If you do not receive access within 30
                    minutes, please check spam folders or contact support.
                </p>

                <h2>2. Physical Shipments (If Applicable)</h2>
                <ul>
                    <li>
                        Dispatch Time: Usually within 3–5 business days unless otherwise stated.
                    </li>
                    <li>
                        Shipping Partners: We may use standard courier or postal services depending
                        on destination.
                    </li>
                    <li>Tracking: Tracking details will be emailed when available.</li>
                </ul>

                <h2>3. Delivery Time Estimates</h2>
                <p>
                    Domestic deliveries: 5–10 business days from dispatch. International deliveries:
                    10–21 business days, subject to customs clearance. These are estimates and
                    delays outside our control (weather, customs, carrier disruptions) may occur.
                </p>

                <h2>4. Address Accuracy</h2>
                <p>
                    You are responsible for providing a complete and accurate shipping address.
                    Re-delivery fees for returned packages due to incorrect address may apply.
                </p>

                <h2>5. Lost or Damaged Items</h2>
                <p>
                    Report loss or damage within 5 business days of the recorded delivery date (or
                    expected date if tracking is stalled). Provide order ID, photos (for damage),
                    and description. We may offer replacement, store credit, or refund at our
                    discretion.
                </p>

                <h2>6. Customs & Duties</h2>
                <p>
                    International recipients are responsible for any customs duties, taxes, or
                    import fees imposed by their local authorities.
                </p>

                <h2>7. Changes</h2>
                <p>
                    We may modify this policy periodically. Continued use after changes indicates
                    acceptance.
                </p>

                <p>
                    <em>Effective Date: {year}</em>
                </p>
            </div>
        </>
    );
};

export default ShippingAndDelivery;
