import { createComment, getComments } from "lib/comment";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import styled from "styled-components";

const Comments = ({ post }) => {
    const [comments, setcomments] = useState();
    const addComment = async e => {
        e.preventDefault();
        const btn = e.nativeEvent.submitter;
        const btntext = btn.innerText;
        btn.innerText = "processing...";

        const { name, email, comment } = e.target;
        try {
            const data = {
                name: name.value,
                email: email.value,
                comment: comment.value,
                id: post.databaseId,
            };
            const result = await createComment(data);
            if (!result) {
                throw Error("failed to add comment");
            }
            btn.innerText = btntext;
            toast.success("comment added");
        } catch (err) {
            toast.error(err.message);
        }
    };
    useEffect(() => {
        (async () => {
            const result = await getComments(post.slug);
            console.log(result);
            setcomments(p => ({
                count: result.commentCount,
                items: result.comments.nodes,
            }));
        })();
    }, [post.slug]);

    return (
        <CommentStyle>
            <h3>comment your feedback</h3>
            <form onSubmit={addComment}>
                <input name="name" type="text" placeholder="name" />
                <input name="email" type="email" placeholder="your email" />
                <textarea
                    minLength={10}
                    autoCorrect={true}
                    required
                    className="textarea"
                    name="comment"
                    type="comment"
                    placeholder="comment"
                />
                <button className="btn">add comment</button>
            </form>
            <div className="comment-list">
            {comments?.count>0 && <p>{comments?.count} comments so far</p>}
                <ul>
                    {comments?.items.length>0 &&
                        [...comments?.items].map(c => (
                            <li key={c?.id}>
                                <b> by - {c.author.node.name}</b>
                                <p dangerouslySetInnerHTML={{ __html: c.content }} />
                            </li>
                        ))}
                </ul>
            </div>
        </CommentStyle>
    );
};

export default Comments;
const CommentStyle = styled.div`
    margin: 50px 0 0;

    form {
        border-radius: 8px;
        margin: 10px 0;
        margin: 10px 0 0;
        display: flex;
        flex-direction: column;
        /* box-shadow: 0 1px 2px #666; */
        padding: 20px 0;
    }
    input {
        width: 100%;
        font-size: inherit;
        padding: 10px;
        outline: none;
        border: 2px solid #ddd;
        margin: 0 0 10px;
        &:focus {
            border-color: blue;
        }
    }
    .btn {
        padding: 10px 20px;
        background: blue;
        color: #fff;
        justify-self: flex-end;
    }
    .comment-list {
        margin: 40px 0;
        ul {
            list-style: none;
            li {
                border-left: 2px solid orangered;
                padding: 0 0 0 10px;
                margin: 0 0 10px;
            }
        }
    }
`;
