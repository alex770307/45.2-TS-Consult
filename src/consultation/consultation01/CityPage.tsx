import styles from './CityPage.module.css'
const CityPage: React.FC = () => {
    return (
        <div className={styles.cityClass}>
            <div className={styles.h1_City}>
                <h1>Всё о городе</h1>  
            </div>
            <p>
                Lorem ipsum dolor sit amet,
                consectetur adipisicing elit.
                Distinctio quos aut,
                dolor fugit eos voluptates
                enim aliquam ex voluptatibus
                veritatis iusto exercitationem
                laborum esse laboriosam
                cupiditate unde libero
                corporis dolores.
            </p>
            <img 
                src="https://www.zukunftswerkstatt-kommunen.de/fileadmin/_processed_/c/5/csm_Frankfurt_1_9ceb854996.jpg" 
                alt="City View" 
            />
        </div>
    );
}

export default CityPage;