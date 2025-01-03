import { Bannerstyle } from "@/styles/banner";
import Link from "next/link";
const Promotion = () => {
    return (
        <Bannerstyle>
            <div className="col-md-6 mx-auto">
                <p className="emoji">👨‍💻</p>
                <h1>Frontend development</h1>
                <p>
                    Learn frontend development with examples and practical exercise of
                    HTML,CSS,JS,React.js.
                </p>
                <ul>
                    <li>
                        <Link href="/free-html-css-templates">Free Website templates</Link>
                    </li>
                    <li>
                        <Link href="/blog">frontend blogs</Link>
                    </li>
                </ul>
            </div>
        </Bannerstyle>
    );
};

export default Promotion;
