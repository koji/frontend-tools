import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export default function Layout({ children }) {
  return (
    <>
      <div className="layout">
        <Header />
        <main className="page-content">{children}</main>
        <Footer />
      </div>
    </>
  );
}
