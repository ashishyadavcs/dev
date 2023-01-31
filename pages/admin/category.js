import { toast } from "react-toastify";
import { useRouter } from "next/router";
import { FiEdit } from "react-icons/fi";
import { AiFillDelete } from "react-icons/ai";

const Category = ({ category }) => {
  const router = useRouter();
  console.log(category);
  const addcategory = async (e) => {
    e.preventDefault();
    const data = await fetch("/api/category", {
      method: "POST",
      body: JSON.stringify({
        name: e.target.name.value,
      }),
    })
      .then((res) => res.json())
      .catch((err) => ({
        success: false,
        message: err.message,
      }));
    data.success
      ? (toast.success(data.message),
        router.push(`?added=${data.category._id}`))
      : toast.error(data.message);
  };
  const deletecategory = async (id) => {
    event?.target.classList.add("disabled");
    const data = await fetch(`/api/category/${id}`, {
      method: "delete",
    })
      .then((res) => res.json())
      .catch((err) => "");
    event?.target.classList.remove("disabled");

    if (data.success) {
      toast.success(data.message);
      router.push(`?deleted=${id}`);
    }
  };
  return (
    <div className="container my-3">
      <div className="row">
        <div className="col-md-8">
          <form onSubmit={addcategory}>
            <input required name="name" type="text" />
            <button className="theme-btn" type="submit">
              add category
            </button>
          </form>
        </div>
        <div className="col-md-4">
          <h3>categories</h3>
          <ul className="list-unstyled my-3">
            {category.map((cat, i) => (
              <li
                className="border py-1 px-2 d-flex justify-content-between align-items-center"
                key={i}
              >
                <input value={cat.name} type="text" />
                <span className="d-flex">
                  <FiEdit className="pointer badge" size={20} />
                  <AiFillDelete
                    onClick={(e) => deletecategory(cat._id)}
                    className="pointer badge badge-danger ml-2"
                    size={20}
                  />
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Category;
export async function getServerSideProps({ req }) {
  const data = await fetch(`${process.env.APP_URL}/api/category`)
    .then((res) => res.json())
    .catch((err) => "");
  console.log(data);
  return {
    props: {
      category: data.categories || [],
    },
  };
}
