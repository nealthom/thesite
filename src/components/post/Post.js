import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { PageLayout } from "components/common";
import PostItem from "../posts/PostItem";
import store from "../../store";
import { getPost } from "../../actions/post";

const Post = () => {
  const { id } = useParams();

  useEffect(() => {
    store.dispatch(getPost(id));
  }, [id]);

  const post = useSelector((store) => store.post.post);
  console.log(post);
  return (
    <PageLayout>
      <PostItem post={post} />
    </PageLayout>
  );
};

export default Post;
