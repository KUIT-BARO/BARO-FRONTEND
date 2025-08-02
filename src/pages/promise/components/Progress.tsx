import * as styles from './Progress.css';

export default function Progress({ progress }: { progress: number }) {
  return (
    <div className={styles.progressWrapper}>
      <div className={styles.progressBar} style={{ width: `${progress}%` }} />
    </div>
  );
}
