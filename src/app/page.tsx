"use client";

import { Amplify } from "aws-amplify";
import awsconfig from "../aws-exports";
import "@aws-amplify/ui-react/styles.css";
import { Authenticator } from "@aws-amplify/ui-react";

Amplify.configure({ ...awsconfig, ssr: true });

function Home() {
  return (
    <Authenticator>
      {({ signOut, user }) => {
        console.log(user);
        return (
          <main>
            <h1>Hello,{user?.username}!</h1>
            <button onClick={signOut}>Sign out</button>
          </main>
        );
      }}
    </Authenticator>
  );
}

export default Home;
