import { useContext } from "react";

import Card from "../ui/Card";
import styles from "./MeetupItem.module.css";
import FavoritesContext from "../../store/favorite-context";

const MeetupItem = (props) => {
    const favoritesCtx = useContext(FavoritesContext);

    const itemIsFavorite = favoritesCtx.itemIsFavorite(props.id);

    function toggleFavoriteStatusHandler() {
        if (itemIsFavorite) {
            favoritesCtx.removeFavorite(props.id);
        } else {
            favoritesCtx.addFavorite({
                id: props.id,
                title: props.tile,
                image: props.image,
                description: props.description,
                address: props.address,
            });
        }
    }

    return (
        <Card>
            <li className={styles.item}>
                <div className={styles.image}>
                    <img src={props.image} alt={props.title} />
                </div>
                <div className={styles.content}>
                    <h3>{props.title}</h3>
                    <address>{props.address}</address>
                    <p>{props.description}</p>
                </div>
                <div className={styles.actions}>
                    <button onClick={toggleFavoriteStatusHandler}>
                        {itemIsFavorite
                            ? "Remove from Favorites"
                            : "To Favorites"}
                    </button>
                </div>
            </li>
        </Card>
    );
};

export default MeetupItem;
