import { NextSeo } from "next-seo";

const CancellationAndRefund = () => {
    const year = new Date().getFullYear();
    return (
        <>
            <NextSeo
                title="Cancellation & Refund Policy | frontendzone"
                description="Cancellation and refund policy for purchases made on frontendzone."
                canonical={`${process.env.NEXT_PUBLIC_APP_URL || "https://frontendzone.com"}/cancellation-and-refund`}
                noindex
            />
            <div className="container my-4 entry-content" itemProp="text">
                <h1>Cancellation &amp; Refund Policy</h1>
                <p>
                    We aim to deliver quality digital services and downloadable resources. This
                    policy explains when cancellations or refunds may be granted.
                </p>

                <h2>1. Digital Products</h2>
                <p>
                    Due to the non-returnable nature of downloadable or access-based digital
                    products, all sales are generally final once access is granted or a file has
                    been downloaded.
                </p>

                <h2>2. Service Subscriptions / One-time Services</h2>
                <ul>
                    <li>
                        <strong>Subscription services</strong>: You may cancel future renewals at
                        any time before the next billing cycle. Access continues until the end of
                        the current paid term.
                    </li>
                    <li>
                        <strong>One-time service engagements</strong>: Cancellations requested
                        before work begins may be eligible for a partial or full refund depending on
                        preparation already completed.
                    </li>
                </ul>

                <h2>3. Eligibility for Refunds</h2>
                <ul>
                    <li>Incorrect duplicate payment (refunded in full upon verification).</li>
                    <li>
                        Failure to deliver a purchased service within the stated timeframe AND
                        inability to provide a reasonable alternate schedule.
                    </li>
                    <li>
                        Accidental purchase of the same digital asset multiple times (only unused
                        license keys qualify).
                    </li>
                </ul>
                <p>
                    <strong>Refunds are NOT issued</strong> for change of mind, lack of usage, or
                    failure to review product descriptions before purchasing.
                </p>

                <h2>4. How to Request a Cancellation or Refund</h2>
                <p>
                    Submit a request through our contact page including order reference, date of
                    purchase, and reason. We may request additional verification for security.
                </p>

                <h2>5. Processing Timeline</h2>
                <p>
                    Approved refunds are processed within 5–10 business days. Depending on your
                    payment provider, funds may take additional time to appear.
                </p>

                <h2>6. Chargebacks</h2>
                <p>
                    Initiating a chargeback without first contacting us may delay resolution. We
                    reserve the right to suspend accounts involved in fraudulent or abusive
                    disputes.
                </p>

                <h2>7. Changes</h2>
                <p>
                    We may update this policy periodically. Continued use after changes indicates
                    acceptance.
                </p>

                <p>
                    <em>Effective Date: {year}</em>
                </p>
            </div>
        </>
    );
};

export default CancellationAndRefund;
