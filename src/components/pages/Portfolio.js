import React from "react";
import styled from "styled-components";
import { PageLayout, CardList } from "components/common";
import machine from "img/machine.png";
import sanitize from "img/sanitize.jpg";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: black;
  padding: 2rem;
  border: white solid 3px;
`;

const Completed = styled.li`
  text-decoration: line-through;
`;
export default function Portfolio() {
  return (
    <PageLayout>
      <Container>
        <p>
          This webpage is my current project. I have lost interest in the walled
          gardens of social media, and want to express myself more creatively in
          my own space on the web.
        </p>
        <h3>What I'm working on</h3>
        <ul>
          <Completed>Login page, to use for logging into the feed</Completed>
          <Completed>Backend for posts to the feed</Completed>
          <li>Dashboard section to create posts on front end</li>
        </ul>
        <h1>Recent Projects</h1>

        <CardList
          results={[
            <a
              href="https://csb-fpo06.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h1>Machine Search</h1>
              <img src={machine} alt="machine" />
              <p>
                I work at a casino. We have a lot of games and its difficult to
                remember them all. I made this to help find their locations on
                the floor when a guest asks about a particular machine. Try it
                out by typing wolf, we have several of those.
              </p>
            </a>,
            <a
              href="https://the-sanitizers.herokuapp.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h1>The Sanitizers</h1>
              <img src={sanitize} alt="machine" />
              <p>
                A new company opened this past march to sanitize homes and
                businesses for Covid-19.
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
      </Container>
    </PageLayout>
  );
}
