import { useSelector } from "react-redux";
import { getFavoriteCard } from "../../redux/cardsRedux";

import Container from "../Container/Container";
import PageTitle from "../PageTitle/PageTitle";
import styles from "./Favorite.module.scss"
import Card from "../Card/Card";

const Favorite = () => {
    
    const favoriteCards = useSelector(getFavoriteCard);

    if(favoriteCards.length === 0) {
        return (
            <>
            <Container>
                <PageTitle>No cards…</PageTitle>
            </Container>
            </>
        )
    }

    return (
        <Container>
            <div className={styles.favorite}>
                <PageTitle>Favorite</PageTitle>
                <article className={styles.column}>
                    <ul>
                        {favoriteCards.map(card => (<Card key={card.id} title={card.title} id={card.id} isFavorite={card.isFavorite}></Card>))}
                    </ul>
                </article>
            </div>
        </Container>
    )
}

export default Favorite;