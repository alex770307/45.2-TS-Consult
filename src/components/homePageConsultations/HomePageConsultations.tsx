import { Link } from "react-router-dom";
import styles from "./homePageConsultations.module.css";

export default function HomePageConsultations(): JSX.Element {
  return (
    <>
      <h2>Consultations:</h2>
      <div className={styles.gridContainer}>
        <Link to="consultation-01">
          <div>Consultation 1</div>
        </Link>
        <Link to="consultation-02">
          <div>Consultation 2</div>
        </Link>
        <Link to="consultation-03">
          <div>Consultation 3</div>
        </Link>
        <Link to="consultation-04">
          <div>Consultation 4</div>
        </Link>
        <Link to="consultation-05">
          <div>Consultation 5</div>
        </Link>
        <Link to="consultation-06">
          <div>Consultation 6</div>
        </Link>
        <Link to="consultation-07">
          <div>Consultation 7</div>
        </Link>
        <Link to="consultation-08">
          <div>Consultation 8</div>
        </Link>
        <Link to="consultation-09">
          <div>Consultation 9</div>
        </Link>
        <Link to="consultation-10">
          <div>Consultation 10</div>
        </Link>
        <Link to="consultation-11">
          <div>Consultation 11</div>
        </Link>
        <Link to="consultation-12">
          <div>Consultation 12</div>
        </Link>
        <Link to="consultation-13">
          <div>Consultation 13</div>
        </Link>
        <Link to="consultation-14">
          <div>Consultation 14</div>
        </Link>
      </div>
    </>
  );
}
