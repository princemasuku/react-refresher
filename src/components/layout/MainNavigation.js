import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";
import { useContext } from "react";
import FavouritesContext from "../../store/favourites-context";
function MainNavigation() {
  const favouritesCtx = useContext(FavouritesContext);
  return (
    <header className={classes.header}>
      <div className={classes.logo}>React Meetups</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All Meetups</Link>
          </li>

          <li>
            <Link to="/new-meetup">Add New Meetup</Link>
          </li>

          <li>
            <Link to="/favourites">My Favourites</Link>
            <span className={classes.badge}>{favouritesCtx.totalFavourites}</span>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
