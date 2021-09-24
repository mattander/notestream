// pages/index.js
import { useEffect, useState } from 'react';
import { AmplifyAuthenticator, 	AmplifySignUp,
	AmplifySignIn, } from "@aws-amplify/ui-react";
import { AuthState, onAuthUIStateChange } from '@aws-amplify/ui-components';
import { Amplify, API, Auth, withSSRContext } from "aws-amplify";
import Head from "next/head";
import awsExports from "../src/aws-exports";
import { createNote } from "../src/graphql/mutations";
import { listNotes } from "../src/graphql/queries";
import styles from "../styles/Home.module.css";

import { useRouter } from 'next/router'

Amplify.configure({ ...awsExports, ssr: true });
Amplify.DataStore.clear();

// export async function getServerSideProps({ req }) {
//   const SSR = withSSRContext({ req });
//   const response = await SSR.API.graphql({ query: listNotes });

//   return {
//     props: {
//       Notes: response.data.listNotes.items,
//     },
//   };
// }

// async function handleCreateNote(event) {
//   event.preventDefault();

//   const form = new FormData(event.target);

//   try {
//     const { data } = await API.graphql({
//       authMode: "AMAZON_COGNITO_USER_POOLS",
//       query: createNote,
//       variables: {
//         input: {
//           content: form.get("content"),
//         },
//       },
//     });

//     window.location.href = `/Notes/${data.createNote.id}`;
//   } catch ({ errors }) {
//     console.error(...errors);
//     throw new Error(errors[0].message);
//   }
// }

export default function Home({ Notes = [] }) {
	const [authState, setAuthState] = useState();
	const [user, setUser] = useState();
  const router = useRouter();

	useEffect(() => {
		return onAuthUIStateChange((nextAuthState, authData) => {
			setAuthState(nextAuthState);
			console.log({ authData });
			setUser(authData);
		});
	}, []);

	async function signOut() {
		try {
			await Auth.signOut();
		} catch (error) {
			console.log('error signing out: ', error);
		}
	}

  const handleSignIn = e => {
    console.log('signed in', {e});
  }
	return authState === AuthState.SignedIn && user ? (
    // <div className={styles.container}>
    //   <Head>
    //     <title>Amplify + Next.js</title>
    //     <link rel="icon" href="/favicon.ico" />
    //   </Head>

    //   <main className={styles.main}>
    //     <h1 className={styles.title}>Amplify + Next.js</h1>

    //     <p className={styles.description}>
    //       <code className={styles.code}>{Notes.length}</code>
    //       Notes
    //     </p>

    //     <div className={styles.grid}>
    //       {Notes.map((Note) => (
    //         <a className={styles.card} href={`/Notes/${Note.id}`} key={Note.id}>
    //           <p>{Note.content}</p>
    //         </a>
    //       ))}

    //       <div className={styles.card}>
    //         <h3 className={styles.title}>New Note</h3>

    //         <AmplifyAuthenticator>
    //           <form onSubmit={handleCreateNote}>
    //             <fieldset>
    //               <legend>Title</legend>
    //               <input
    //                 defaultValue={`Today, ${new Date().toLocaleTimeString()}`}
    //                 name="title"
    //               />
    //             </fieldset>

    //             <fieldset>
    //               <legend>Content</legend>
    //               <textarea
    //                 defaultValue="I built an Amplify app with Next.js!"
    //                 name="content"
    //               />
    //             </fieldset>

    //             <button>Create Note</button>
    //             <button type="button" onClick={() => Auth.signOut()}>
    //               Sign out
    //             </button>
    //           </form>
    //         </AmplifyAuthenticator>
    //       </div>
    //     </div>
    //   </main>
    // </div> 
    <div>{user.attributes.name} is logged in</div>
    ) : (
		<AmplifyAuthenticator usernameAlias='email'>
			<AmplifySignUp
				authState
				slot='sign-up'
				usernameAlias='email'
				formFields={[
					{
						type: 'name',
						label: 'Name',
						placeholder: 'Enter your name',
						hint: 'Your name is visible only to you',
						required: true,
					},
					{ type: 'email' },
					{ type: 'password' },
				]}
			/>
			<AmplifySignIn
				authState
				slot='sign-in'
				formFields={[{ type: 'email' }, { type: 'password' }]}
        onSignIn={handleSignIn}
			/>
		</AmplifyAuthenticator>
  );
}