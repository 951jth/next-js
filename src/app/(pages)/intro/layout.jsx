import styles from "./layout.module.css";
// import Header from "@components/layout/Header";
import Footer from "@/app/(component)/_layout/Footer";
import Header from "@/app/(component)/_layout/Header";

export default function IntroLayout({ children }) {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.contents}>{children}</div>
      <Footer />
    </div>
  );
}
