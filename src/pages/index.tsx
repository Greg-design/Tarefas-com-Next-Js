import { collection, getDocs } from "firebase/firestore";
import { GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";
import heroImg from "../../public/assets/hero.png";
import styles from "../../src/styles/Home.module.css";
import { db } from "../services/firebaseConnection";

interface HomeProps {
  posts: number;
  comments: number;
}

export default function Home({ posts, comments }: HomeProps) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Tarefas+ | Organize suas tarefas de forma fácil</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.logoContent}>
          <Image className={styles.hero} alt="Logo Tarefas+" src={heroImg} priority />
        </div>
        <h1 className={styles.title}>
          Sistema feito para você organizar <br />
          seus estudos e tarefas
        </h1>

        <div className={styles.infoContent}>
          <section className={styles.box}>
            <span>+{posts} posts</span>
          </section>
          <section className={styles.box}>
            <span>+{comments} comentários</span>
          </section>
        </div>
      </main>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  // buscar do banco os numeros e mandar pro componente
  const commentRef = collection(db, "comments");
  const postRef = collection(db, "tarefas");

  const commentSnapshot = await getDocs(commentRef);
  const postSnapshot = await getDocs(postRef);

  return {
    props: {
      posts: postSnapshot.size || 0,
      comments: commentSnapshot.size || 0,
    },
    revalidate: 60, //seria revalidada a cada 60 segundos.
  };
};

/*
-criar um arquivo .env e colocar os seguintes códigos

GOOGLE_CLIENT_ID=303187119539-348r5d99m3p7b4m2d7adrqlg1hqsuld2.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=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

NEXTAUTH_URL=http://localhost:3000

JWT_SECRET=9eed2b3d46bf74b2288343816ba01c33

NEXT_PUBLIC_URL=http://localhost:3000

*/
