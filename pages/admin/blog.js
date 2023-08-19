import Image from "next/image";
import Link from "next/link";
import { AiFillDelete, AiOutlinePlusCircle } from "react-icons/ai";
import { toast } from "react-toastify";
import styles from "@/styles/blog.module.css";
import { FiEdit } from "react-icons/fi";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Editor from "@/components/ui/editor";


const Post = ({ posts, categories }) => {
  const router = useRouter();
  const [edit, setEdit] = useState(false);
  const addPost = async (e, faq, categories) => {
    e.preventDefault();
    const fdata = new FormData();
    fdata.append("file", e.target.thumbnail.files[0]);
    await fetch("/api/upload", {
      method: "POST",
      body: fdata,
    })
      .then((res) => res.json())
      .then(async (res) => {
        if (res.file.url) {
          const formdata = new FormData(e.target);
          formdata.append("thumbnail", res?.file?.url);
          formdata.append("faq", JSON.stringify(faq));
          formdata.append("category", categories);
          const data = await fetch("/api/post", {
            method: "Post",
            body: JSON.stringify(Object.fromEntries(formdata)),
          })
            .then((res) => res.json())
            .catch((err) => "");
          if (data.success) {
            router.push(`?published=${Math.random()}`);
            toast.success(data.message);
          } else {
            toast.error(data.message);
          }
        }
      })
      .catch((err) => toast.error(err?.message));
  };
  const deletePortfolio = async (id) => {
    const confirm = window.confirm("are you sure to delete ?");
    if (confirm) {
      const data = await fetch(`/api/post/${id}`, {
        method: "delete",
      })
        .then((res) => res.json())
        .catch((err) => err.message);
      if (data.success) {
        router.push(`?deleted=${id}`);
        toast.success(data.message);
      } else {
        toast.error(data.message);
      }
    }
  };
  const updatePost = async (e, id, faq) => {
    e.preventDefault();
    const formdata = new FormData(e.target);
    formdata.append("thumbnail", "");
    formdata.append("faq", JSON.stringify(faq));
    const data = await fetch(`/api/post/${id}`, {
      method: "put",
      body: JSON.stringify(Object.fromEntries(formdata)),
    })
      .then((res) => res.json())
      .catch((err) => "");
    if (data.success) {
      router.push(`?upadated=${Math.random()}`);
      toast.success(data.message);
    } else {
      toast.error(data.message);
    }
  };
  useEffect(() => {}, [edit]);

  return (
    <div className={`container my-4`}>
      <Editor
        data={{ categories: categories }}
        styles={styles}
        addPost={addPost}
        updatePost={updatePost}
        edit={edit}
      />
      <form>
        <input type="search" name="search" placeholder="search blog" />
      </form>
      <div className="my-4">
        {posts?.length > 0 &&
          posts?.map((post) => {
            return (
              <Link key={post._id} href={`/blog/${post.slug}`} passHref>
                <div className={styles.post} key={post._id}>
                  <span className={`d-flex ${styles.action}`}>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setEdit((v) => (v == false ? post : false));
                      }}
                      className={`badge me-2`}
                    >
                      <FiEdit className="pointer" size={20} />
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        deletePortfolio(post._id);
                      }}
                      className="badge"
                    >
                      <AiFillDelete className="pointer" size={20} />
                    </button>
                  </span>
                  <span className={styles.thumbnail}>
                    <Image
                      objectFit="cover"
                      layout="fill"
                      alt=""
                      src="https://media.istockphoto.com/id/1288739928/photo/its-boring.jpg?s=170667a&w=0&k=20&c=uO7tJnfS1ioV2UOdT0hAt4O6daNm4TGl1malL-7kDBg="
                    ></Image>
                  </span>
                  <div className={styles.content}>
                    <h3> {post.title}</h3>
                    <p>{post.description}</p>
                  </div>
                </div>
              </Link>
            );
          })}
      </div>
    </div>
  );
};

export default Post;
export async function getServerSideProps() {
  try {
    const [postsdata, categorydata] = await Promise.all([
      fetch(`${process.env.APP_URL}/api/post`).then((res) => res.json()),
      fetch(`${process.env.APP_URL}/api/category/`).then((res) => res.json()),
    ]);
  
    return {
      props: {
        posts: postsdata.posts.reverse() || [],
        categories: categorydata.categories || [],
      },
    };
  }
  catch {
    return {
      props: {
        
      }
    }
  }
}
