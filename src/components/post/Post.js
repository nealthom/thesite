import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { PageLayout } from "components/common";
import PostItem from "../posts/PostItem";
import store from "../../store";
import { getPost } from "../../actions/post";
import CommentForm from "./CommentForm";
import CommentItem from "./CommentItem";

const Post = () => {
  const { id } = useParams();

  useEffect(() => {
    store.dispatch(getPost(id));
  }, [id]);

  const post = useSelector((store) => store.post.post);

  return (
    <PageLayout>
      {post && (
        <div>
          <CommentForm postId={post._id} />
          <PostItem post={post} showActions={false} />

          {post.comments.map((comment) => (
            <CommentItem
              key={comment._id}
              comment={comment}
              postId={post._id}
            />
          ))}
        </div>
      )}
    </PageLayout>
  );
};

export default Post;
