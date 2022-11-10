import Container from "../Container/Container";
import PageTitle from "../PageTitle/PageTitle";
import styles from "./Favorite.module.scss"

const Favorite = () => {
    return (
        <Container>
            <div className={styles.favorite}>
                <PageTitle>Favorite</PageTitle>
                <p className={styles.subtitle}>lorem ipsum</p>
            </div>
        </Container>
    )
}

export default Favorite;