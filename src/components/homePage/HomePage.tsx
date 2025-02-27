import styles from './homePage.module.css'
import HomePageConsultations from "../homePageConsultations/HomePageConsultations";

export default function HomePage():JSX.Element {
  return (
    <>
      <h2>alexs home page🏠</h2>
      <div className={styles.gridContainer}>
        <HomePageConsultations />
        {/* <Link to="lesson-01">
          <div>Lesson 1</div>
        </Link> */}
      </div>
    </>
  );
}

