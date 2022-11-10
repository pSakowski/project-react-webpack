import Container from "../Container/Container";
import PageTitle from "../PageTitle/PageTitle";
import styles from "./About.module.scss"

const About = () => {
    return (
        <Container>
            <div className={styles.about}>
                <PageTitle>About</PageTitle>
                <p className={styles.subtitle}>lorem ipsum</p>
            </div>
        </Container>
    )
}

export default About;