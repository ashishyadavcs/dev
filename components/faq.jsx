import { useEffect } from "react";
import { FiChevronDown } from "react-icons/fi";
const Faq = ({ title, data, cssClass }) => {
    useEffect(() => {
        const faqs = document.querySelectorAll(".faq ");
        faqs.forEach(el => {
            el.onclick = () => {
                faqs.forEach(el => el.classList.remove("active"));
                el.classList.add("active");
            };
        });
    }, []);

    return (
        <div className="faqs" itemScope itemType="https://schema.org/FAQPage">
            <style jsx global>{`
                .faq .que:first-letter {
                    text-transform: capitalize;
                }
                .faq * {
                    transition: all 0.3s;
                    user-select: none;
                }
                .faq {
                    padding: 10px;
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
                    max-height: 500px;
                    overflow: unset;
                }
            `}</style>
            <h2>{title}</h2>
            <ul className="list-unstyled">
                {data.map((faq, i) => (
                    <li
                        className="faq"
                        itemScope
                        itemProp="mainEntity"
                        itemType="https://schema.org/Question"
                        key={i}
                    >
                        <FiChevronDown className="icon" size={18} />
                        <div>
                            <h3
                                itemProp="name"
                                className="que"
                                dangerouslySetInnerHTML={{ __html: `${i + 1}. ${faq.que}` }}
                            ></h3>
                            <div
                                className="ans"
                                itemScope
                                itemProp="acceptedAnswer"
                                itemType="https://schema.org/Answer"
                            >
                                <div
                                    itemProp="text"
                                    dangerouslySetInnerHTML={{ __html: faq.ans }}
                                />
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Faq;
