import Link from "next/link";
import Group from "./group";
import Toc from "./tableofcontent";
import Inpostad from "./ads/inpostad";
import Facebookpage from "./facebookpage";
import Blogsearch from "./blog-search";
const Sidebar = ({ styles, categories }) => {
    return (
        <div className={`mb-2 sticky`}>
            <Blogsearch />
            <Toc />
            {categories?.length > 0 && (
                <>
                    <h2 className="mt-4 mb-3 related">Categories</h2>
                    <ul className={`list-unstyled d-flex flex-wrap ${styles.tag}`}>
                        {categories.map(tag => {
                            return (
                                <li key={Math.random()}>
                                    <Link href={`/blog/category/${tag.params.categoryName}`}>
                                        {tag.params.categoryName}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </>
            )}
            <Group />
            <Inpostad />
        </div>
    );
};

export default Sidebar;
