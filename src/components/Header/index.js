import Link from "next/link";

export const Header = () => {
  return (
    <header>
      <Link href="/">
        <a>
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
  );
};
