import { Link } from 'react-router-dom';
import styles from './homePageConsultations.module.css'

export default function HomePageConsultations(): JSX.Element {
  return (
    <>
      <h2>Consultations:</h2>
      <div className={styles.gridContainer}>
       
        <Link to="consultation-04">
          <div>Consultation 4</div>
        </Link>
       
        
      
      </div>
    </>
  );
}
