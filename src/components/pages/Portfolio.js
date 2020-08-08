import React from "react";
import { PageLayout, CardList } from "components/common";
import machine from "img/machine.png";

export default function Portfolio() {
  return (
    <PageLayout>
      <h1>Recent Projects</h1>
      <CardList
        results={[
          <a
            href="http://csb-1mhb6.netlify.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h1>Machine Search</h1>
            <img src={machine} alt="machine" />
            <p>
              I work at a casino. We have a lot of games and its difficult to
              remember them all. I made this to help find their locations on the
              floor when a guest asks about a particular machine. Try it out by
              typing wolf, we have several of those.
            </p>
          </a>
        ]}
      />
      <a
        href="http://github.com/nealthom"
        target="_blank"
        rel="noopener noreferrer"
      >
        <h3>more at my github</h3>
      </a>
    </PageLayout>
  );
}
