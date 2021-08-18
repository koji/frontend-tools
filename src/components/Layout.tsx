import { Footer } from './Footer';
import { Header } from './Header';

export default function Layout({ children }: any) {
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
