import { openwhatsapp } from "utils/common";
import styles from "../styles/orderform.module.css";
import { createOrder } from "../utils/order";
import { useRouter } from "next/router";
import {useSelector} from "react-redux";

const Orderform = ({ title }) => {
    const user=useSelector(state=>state.user)
    const router = useRouter();
    return (
        <div className={styles.orderform}>
            <span
                onClick={e =>
                    e.currentTarget.parentElement.parentElement.classList.remove("active")
                }
                className="close justify-content-center align-items-center"
            >
                x
            </span>
            {1 ? (
                <form
                    onSubmit={e => {
                        e.preventDefault();
                        createOrder(e, router,user);
                    }}
                >
                    <h2>{title || "Order for website design"}</h2>

                    <input hidden type="text" name="type" />
                    <textarea
                        autoFocus
                        placeholder="Enter your requirements..."
                        className="textarea"
                        required
                        name="description"
                    ></textarea>
                    <label>Reference website image or urls</label>
                    <input
                        accept=".xlsx,.xls,image/*,.doc,audio/*,.docx,video/*,.ppt,.pptx,.txt,.pdf"
                        multiple
                        name="file"
                        placeholder="reference website"
                        type="file"
                        onChange={e => {
                            e.currentTarget.nextElementSibling.setAttribute(
                                "src",
                                URL.createObjectURL(e.target.files[0])
                            );
                            e.target.nextElementSibling.setAttribute("height", "auto");
                        }}
                    ></input>
                    <iframe height={0} frameBorder="none" src=""></iframe>
                    <input
                        name="mobile"
                        className="w-100"
                        maxLength={10}
                        type="tel"
                        placeholder="whatsapp number"
                    ></input>
                    <button className="my-1 theme-btn d-block w-100">submit</button>

                    <h3 className="mt-4">
                        Help :
                        <button
                            className="linkbtn ml-2"
                            onClick={e => window.open(openwhatsapp("Hi, I need help"))}
                        >
                            click here
                        </button>
                    </h3>
                </form>
            ) : (
                ""
            )}
        </div>
    );
};
export default Orderform;
