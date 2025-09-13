import { ThumbsDown, ThumbsUp } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function BlogDetails() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!id) return;

    async function fetchData() {
      try {
        const [postRes, commentsRes] = await Promise.all([
          fetch(`https://dummyjson.com/posts/${id}`),
          fetch(`https://dummyjson.com/posts/${id}/comments`),
        ]);

        if (!postRes.ok) throw new Error("Post not found");
        if (!commentsRes.ok) throw new Error("Comments not found");

        const postData = await postRes.json();
        const commentsData = await commentsRes.json();

        setPost(postData);
        setComments(commentsData.comments || []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false); 
      }
    }

    fetchData();
  }, [id]);

  if (loading) return <p className="p-6 text-center">Loading...</p>;
  if (error) return <p className="p-6 text-center text-red-500">{error}</p>;

  return (
    <div className="p-8 max-w-3xl mx-auto pt-20">
      {post && (
        <>
          <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
          <p className="text-gray-700 mb-6">{post.body}</p>

          <div className="flex gap-4 mb-8 ">
            <span className="px-4 py-2 bg-green-100 rounded-lg ">
              <ThumbsUp /> {post.reactions?.likes ?? 0}
            </span>
            <span className="px-4 py-2 bg-red-100 rounded-lg">
             <ThumbsDown /> {post.reactions?.dislikes ?? 0}
            </span>
          </div>

          <h2 className="text-2xl font-semibold mb-3">Comments</h2>
          {comments?.length > 0 ? (
            <ul className="space-y-3">
              {comments.map((comment) => (
                <li key={comment.id} className="border p-3 rounded">
                  <p className="font-semibold">{comment.user?.username}</p>
                  <p className="text-gray-600">{comment.body}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500">No comments yet.</p>
          )}
        </>
      )}
    </div>
  );
}

export default BlogDetails;
