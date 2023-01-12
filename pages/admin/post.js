import { AiOutlinePlusCircle } from "react-icons/ai";
import styles from "../../styles/post.module.css";
const post = () => {
  return (
    <div className={`container ${styles.post}`}>
      <form className="my-3">
        <h2>Add Post</h2>
        <div className="row">
          <div className="col-md-8">
            <input type="text" name="title" required placeholder="title" />
            <input type="text" name="keywords" placeholder="keywords" />
            <textarea
              className="textarea"
              required
              name="description"
              placeholder="Description"
            ></textarea>
            <input
              type="file"
              required
              accept="image/*"
              name="thumbnail "
              placeholder="thumbnail"
            />
            <div className={` p-3  rounded-3 my-3 ${styles.faq}`}>
              <input type="text" name="que" placeholder="Faq question" />
              <textarea
                required
                className="textarea"
                name="ans"
                placeholder="Faq answer"
              ></textarea>
              <AiOutlinePlusCircle className="pointer" />
            </div>
            <input type="text" name="category" placeholder="category" />
          </div>
          <div className="col-md-4"></div>
        </div>
        <div className="d-flex flex-wrap">
          <button className="submit-btn m-3" type="reset">
            Publish
          </button>
          <button className="cancel-btn rounded-pill  m-3" type="submit">
            cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default post;
