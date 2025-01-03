import Post from "./post";
const Relatedposts = ({ posts }) => {
    return (
        <>
            <h2 className=" my-4">Related Posts</h2>
            <div className="relatedposts">
                {posts?.length > 0 &&
                    posts?.map(post => {
                        return <Post key={post.slug} post={post} />;
                    })}
            </div>
        </>
    );
};

export default Relatedposts;
