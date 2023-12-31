import Head from "next/head";
import Image from "next/image";


export default function Home() {
  return (
    <>
      <Head>
        <title>Hunting Coders</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className="ultra">Hunting Coder</h1>
      <style jsx>
        {`
          .ultra {
            color: red;
            display: flex;
            justify-content: center;
            margin: 50px;
            font-size: 3rem;
          }
        `}
      </style>
      <div className="homeimage">
        <Image className="myImg" src="/coder.jpg"  alt="this is the landing page" width={400} height={300} />
      </div>

      <div className="personalblogs">
        <div className="blogs">
          <h1>Popular Blogs</h1>
          <div className="blogitem">
            <h2>This is my first Blog 2023</h2>
            <p>this is how easy to learn javascript in 2023</p>
          </div>
          <div className="blogitem">
            <h2>This is my first Blog 2023</h2>
            <p>this is how easy to learn javascript in 2023</p>
          </div>
          <div className="blogitem">
            <h2>This is my first Blog 2023</h2>
            <p>this is how easy to learn javascript in 2023</p>
          </div>
        </div>
      </div>
    </>
  );
}
