import Link from "next/link";

export default NotFound = () => {
  return (
    <div className="not-found">
      <h1>404</h1>
      <h2>That page cannot be found :(</h2>
      <p>
        redirecting to the <Link href="/">home</Link>
      </p>

      <style.jsx>
        {" "}
        {`
        .not-found {
            background-color: #fff;
            padding: 20px;
            box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.1);
            trasform: rotateZ(-1deg);
        }
        h1 {
            font-size: 3em;
        }
        `}
      </style.jsx>
    </div>
  );
};
