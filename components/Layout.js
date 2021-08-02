import Link from "next/link";

export default function Layout({ children }) {
  return (
    <div className="layout">
      <header>
        <Link href="/">
          <a>
            {/* <h1>
              <span>FrontEnd</span>
              <span>Marmite</span>
            </h1> */}
            <h1>
              <span style={{ color: "#ff9f43" }}>Front</span>
              <span style={{ color: "#0abde3" }}>End</span>
              <span style={{ color: "#ee5253" }}>Tools</span>
              {/* <span style={{ color: "#00d2d3" }}>acti</span>
              <span style={{ color: "#5f27cd" }}>ons</span> */}
            </h1>
            <h2>Spread Joy & Usefulness</h2>
          </a>
        </Link>
      </header>

      <div className="page-content">{children}</div>

      <footer>
        <p>
          Copyright 2021{" "}
          <Link href="https://koji.thedev.id">
            <a>koji kanao</a>
          </Link>{" "}
          :)
        </p>
      </footer>
    </div>
  );
}
