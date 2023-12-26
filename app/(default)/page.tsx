import Navigation from "@/components/navigation";
import styles from "./page.module.css";
import Form from "@/components/form";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Home</h1>
      <Form />
    </main>
  );
}
