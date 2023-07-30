import Image from 'next/image';
import styles from './page.module.css';

const UnderDevelopment: React.FC = () => {
  return (
    <div className={styles.underDevelopment}>
      <h1>Old one is deprecated.Website Under Development</h1>
      <p>Please check back later.</p>
    </div>
  );
};

export default function Home() {
  return (
    <main className={styles.main}>
      <UnderDevelopment />
    </main>
  );
}
