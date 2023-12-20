import Navigation from "@/components/navigation";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Navigation />
      <h1>Home</h1>
    </main>
  );
}
