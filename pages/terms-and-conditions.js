import { NextSeo } from "next-seo";

const TermsOfService = () => {
    const year = new Date().getFullYear();
    return (
        <>
            <NextSeo
                title="Terms & Conditions | frontendzone"
                description="Terms and Conditions governing the use of frontendzone products and services."
                canonical={`${process.env.NEXT_PUBLIC_APP_URL || "https://frontendzone.com"}/term-of-service`}
            />
            <div className="container my-4 entry-content" itemProp="text">
                <h1>Terms &amp; Conditions</h1>
                <p>
                    Welcome to frontendzone. These Terms &amp; Conditions ("Terms") outline the
                    rules and regulations for the use of our website and any related products or
                    services (collectively, the "Service"). By accessing or using the Service you
                    agree to be bound by these Terms. If you disagree with any part, you may
                    discontinue use.
                </p>

                <h2>1. Definitions</h2>
                <p>
                    <strong>"We" / "Us" / "Our"</strong> refers to frontendzone.{" "}
                    <strong>"User" / "You"</strong> means any individual or entity accessing the
                    Service. <strong>"Content"</strong> means any text, images, code, media, or data
                    made available via the Service.
                </p>

                <h2>2. Eligibility</h2>
                <p>
                    You represent that you are at least 13 years of age (or older where required by
                    local law) and have the legal capacity to enter into these Terms.
                </p>

                <h2>3. Use of the Service</h2>
                <ul>
                    <li>
                        You agree not to misuse the Service, attempt to access unauthorized areas,
                        or interfere with its operation.
                    </li>
                    <li>
                        Automated scraping or bulk extraction of data without prior written consent
                        is prohibited.
                    </li>
                    <li>
                        You are responsible for maintaining the confidentiality of your account
                        credentials.
                    </li>
                </ul>

                <h2>4. Accounts &amp; Security</h2>
                <p>
                    When you create an account you must provide accurate information. We may suspend
                    or terminate accounts that are fraudulent, inactive for extended periods, or
                    breach these Terms.
                </p>

                <h2>5. Intellectual Property</h2>
                <p>
                    All original Content, features, and functionality of the Service are owned by
                    frontendzone and protected by applicable copyright, trademark, and other
                    intellectual property laws. User-submitted content remains the property of its
                    respective owners; you grant us a non-exclusive, worldwide license to display
                    and distribute such content solely for operating the Service.
                </p>

                <h2>6. Payments (If Applicable)</h2>
                <p>
                    Certain features or products may be offered for a fee. Prices are listed in the
                    checkout flow and may change at any time. Taxes may apply. By submitting payment
                    information you represent that you are authorized to use the payment method and
                    agree to the applicable billing terms. See our{" "}
                    <a href="/cancellation-and-refund">Cancellation &amp; Refund Policy</a> for
                    refund terms.
                </p>

                <h2>7. Third-Party Links</h2>
                <p>
                    Our Service may contain links to third-party websites or resources. We are not
                    responsible for their content, policies, or availability. Accessing third-party
                    resources is at your own risk.
                </p>

                <h2>8. Prohibited Activities</h2>
                <ul>
                    <li>
                        Reverse engineering or attempting to derive source code (except where
                        open-source licenses explicitly allow).
                    </li>
                    <li>
                        Uploading malicious code, viruses, or performing denial-of-service attacks.
                    </li>
                    <li>Infringing on intellectual property or privacy rights of others.</li>
                    <li>Using the Service for unlawful, harmful, or misleading purposes.</li>
                </ul>

                <h2>9. Privacy</h2>
                <p>
                    Your use of the Service is also governed by our{" "}
                    <a href="/privacy-policy">Privacy Policy</a>. Please review it to understand our
                    practices.
                </p>

                <h2>10. Termination</h2>
                <p>
                    We may suspend or terminate access to the Service immediately, without prior
                    notice, for any breach of these Terms or for suspected abuse. Upon termination
                    your right to use the Service ceases.
                </p>

                <h2>11. Disclaimers</h2>
                <p>
                    The Service is provided on an "AS IS" and "AS AVAILABLE" basis. We make no
                    warranties, express or implied, including but not limited to fitness for a
                    particular purpose, non-infringement, or availability. We do not warrant that
                    the Service will be uninterrupted or error-free.
                </p>

                <h2>12. Limitation of Liability</h2>
                <p>
                    To the maximum extent permitted by law, frontendzone shall not be liable for
                    indirect, incidental, special, consequential, or punitive damages, or any loss
                    of profits, data, or goodwill, arising from your use of the Service.
                </p>

                <h2>13. Indemnification</h2>
                <p>
                    You agree to defend, indemnify, and hold harmless frontendzone and its
                    affiliates, officers, employees, and agents from any claims, damages,
                    liabilities, and expenses (including legal fees) arising out of your use of the
                    Service or violation of these Terms.
                </p>

                <h2>14. Changes to Terms</h2>
                <p>
                    We may update these Terms periodically. Revised versions will be posted with an
                    updated effective date. Continued use after changes constitutes acceptance.
                </p>

                <h2>15. Contact</h2>
                <p>
                    If you have questions about these Terms, contact us via the contact page or
                    email listed on the site.
                </p>

                <p>
                    <em>Effective Date: {year}</em>
                </p>
            </div>
        </>
    );
};

export default TermsOfService;
