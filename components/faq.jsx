import { FAQPageJsonLd } from "next-seo";
import { useEffect } from "react";
import { FiChevronDown } from "react-icons/fi";
const Faq = ({ title, data, cssClass }) => {
    useEffect(() => {
        const faqs = document.querySelectorAll(".faq ");
        faqs.forEach(el => {
            el.onclick = e => {
                faqs.forEach(el => {
                    el != e.currentTarget && el.classList.remove("active");
                });
                el.classList.toggle("active");
            };
        });
    }, []);

    return (
        <>
            <FAQPageJsonLd
                mainEntity={data.map(el => ({ questionName: el.que, acceptedAnswerText: el.ans }))}
            />
            <div className="faqs">
                <style jsx global>{`
                    .faq .que:first-letter {
                        text-transform: capitalize;
                    }
                    .faq * {
                        transition: all 0.3s;
                        user-select: none;
                    }
                    .faq {
                        padding: 15px;
                        width: max-content;
                        max-width: 100%;
                        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
                        border-radius: 8px;
                        cursor: pointer;
                        overflow: hidden;
                        margin: 0 0 20px;
                        gap: 10px;
                        display: flex;
                        flex-direction: row-reverse;
                    }
                    .faq .que {
                        line-height: 1.4;
                        margin: 0;
                    }

                    .faq .icon {
                        float: right;
                    }
                    .faq svg {
                        min-width: max-content;
                        margin-top: 7px;
                    }

                    .faq .ans {
                        max-height: 0;
                        overflow: hidden;
                        transition: all 0.6s;
                        pointer-events: none;
                    }
                    .faq.active .ans {
                        margin: 10px 0 0;
                        max-height: 500px;
                        overflow: unset;
                    }
                `}</style>
                <h2>{title}</h2>
                <ul className="list-unstyled">
                    {data.map((faq, i) => (
                        <li className="faq" key={i}>
                            <FiChevronDown className="icon" size={18} />
                            <div>
                                <h3
                                    className="que"
                                    dangerouslySetInnerHTML={{ __html: `${i + 1}. ${faq.que}` }}
                                />
                                <div className="ans">
                                    <div dangerouslySetInnerHTML={{ __html: faq.ans }} />
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default Faq;
