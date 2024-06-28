
import styles from "./page.module.css";
import Map from "./ui/home/map";

export default function Home() {
  return (
    <main className={styles.main}>
      <Map></Map>
    </main>
  );
}
