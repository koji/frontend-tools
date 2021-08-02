import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export default function Layout({ children }) {
  return (
    <div className="layout">
      <Header />
      <div className="page-content">{children}</div>
      <Footer />
    </div>
  );
}
