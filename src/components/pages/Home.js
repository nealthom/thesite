import React from "react";
import { useSelector } from "react-redux";
import { PageLayout, TextBox } from "components/common";

export default function Home() {
  const user = useSelector((state) =>
    state.auth.user ? state.auth.user.name : null
  );

  return (
    <PageLayout>
      <TextBox>
        Welcome {user ? user : "Visitor"}, I'm Thomas Neal, Have a look at my
        feed. More coming soon...
      </TextBox>
    </PageLayout>
  );
}
