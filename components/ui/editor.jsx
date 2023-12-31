import dynamic from "next/dynamic";
import {  useState } from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { inputfiledata } from "utils/input";
const Contenteditor = dynamic(() => import("@/components/ui/ckeditor"), {
  ssr: false,
});
const Editor = ({ styles, addPost, updatePost, edit, data }) => {
  const [categories, setcategories] = useState([]);
  const [content, setcontent] = useState(edit ? edit.content : "");
  const [thumbnail, setthumbnail] = useState(edit ? edit.thumbnail : false);
  const [faq, setfaq] = useState(edit.faq ? faq : []);

  return (
    <div className={`${styles.addpost}`}>
      <form
        className="my-3"
        onSubmit={(e) =>
          edit ? updatePost(e, edit._id, faq) : addPost(e, faq, categories)
        }
        encType="multipart/form-data"
      >
        <h2>Add Post</h2>
        <div className="row">
          <div className="col-md-8">
            <div className={styles.left}>
              <Contenteditor
                setcontent={setcontent}
                content={edit.content ? `${edit?.content}` : content}
              />
            </div>
          </div>
          <div className="col-md-4">
            <label>
              title
              <input
                type="text"
                maxLength={59}
                name="title"
                defaultValue={edit?.title}
                required
                placeholder="title"
              />
            </label>
            <textarea hidden name="content" value={content}></textarea>
            <label>
              Description
              <textarea
                className="textarea"
                maxLength={163}
                defaultValue={edit?.description}
                name="description"
                placeholder="Description"
              ></textarea>
            </label>
            <label>
              Keyword
              <input
                defaultValue={edit?.keywords}
                type="text"
                name="keywords"
              />
            </label>
            <label>
              thumbnail
              <input
                type="file"
                required
                onChange={(e) =>
                  e.currentTarget.files[0]
                    ? setthumbnail(
                        URL.createObjectURL(e.currentTarget.files[0])
                      )
                    : ""
                }
                accept="image/*"
                name="thumbnail"
                placeholder="thumbnail"
              />
            </label>
            {thumbnail && (
              <img
               
                height={'auto'}
                width="100%"lo
                src={thumbnail}
                alt=""
              />
            )}
            {faq.map((item, i) => (
              <div key={i} className={`my-2 ${styles.faq}`}>
                <label>
                  Que
                  <input
                    type="text"
                    value={item.que}
                    onChange={(e) =>
                      setfaq((prev) =>
                        prev.map((el, index) => {
                          if (index == i) {
                            return {
                              ...el,
                              que: e.target.value,
                            };
                          } else {
                            return el;
                          }
                        })
                      )
                    }
                    placeholder="Faq question"
                  />
                </label>
                <label>
                  Ans
                  <textarea
                    className="textarea"
                    value={item.ans}
                    onChange={(e) =>
                      setfaq((prev) =>
                        prev.map((el, index) => {
                          if (index == i) {
                            return {
                              ...el,
                              ans: e.target.value,
                            };
                          } else {
                            return el;
                          }
                        })
                      )
                    }
                    placeholder="Faq answer"
                  ></textarea>
                </label>
                {faq.length - 1 == i && (
                  <AiOutlinePlusCircle
                    onClick={(e) =>
                      setfaq((prev) => [
                        ...prev,
                        {
                          que: "",
                          ans: "",
                        },
                      ])
                    }
                    className="pointer"
                  />
                )}
              </div>
            ))}
            <div className={styles.category}>
              <span>category</span>
              <ul>
                {data.categories.length > 0 &&
                  data.categories.map((category) => (
                    <li
                      key={category}
                      className="d-flex bg-info text-white mb-1 align-items-center"
                    >
                      <label className="d-flex justify-content-between w-100 pointer">
                        <input
                          className="w-25"
                          value={category._id}
                          onChange={(e) =>
                            e.target.checked
                              ? setcategories((prev) => [
                                  ...prev,
                                  e.target.value,
                                ])
                              : setcategories((prev) =>
                                  prev.filter((el) => el !== category._id)
                                )
                          }
                          type="checkbox"
                        />
                        {category.name}
                      </label>
                    </li>
                  ))}
                
              </ul>
            </div>
          </div>
        </div>
        <div className="d-flex flex-wrap">
          <button className="submit-btn m-3" type="submit">
            {edit ? "Update" : " Publish"}
          </button>
          <button className="cancel-btn rounded-pill  m-3" type="button">
            cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default Editor;
