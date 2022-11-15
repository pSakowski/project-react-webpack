import { useSelector } from "react-redux";
import { getFavouriteCard } from "../../redux/store";
import Container from "../Container/Container";
import PageTitle from "../PageTitle/PageTitle";
import styles from "./Favorite.module.scss"
import Card from "../Card/Card";

const Favorite = () => {
    const favoriteCards = useSelector(getFavouriteCard);

    return (
        <Container>
            <div className={styles.favorite}>
                <PageTitle>Favorite</PageTitle>
                <p className={styles.subtitle}>lorem ipsum</p>
                <ul>
            {favoriteCards.map((card) => (
              <Card
                key={card.id}
                title={card.title}
                id={card.id}
                isFavorite={card.isFavorite}
              ></Card>
            ))}
          </ul>
            </div>
        </Container>
    )
}

export default Favorite;