import MainTitle from "../components/mainTitle";
import styles from '../assets/styles/main.module.scss';
import Participation from "../components/participation";
import ModalBox from "../components/modalbox";

function Main() {
    return (
        <main className={styles.main}>
            <ModalBox/>
            <MainTitle/>
            <Participation/>
        </main>
    );
}

export default Main;
