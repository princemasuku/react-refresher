import { useContext } from "react";
import FavouritesContext from "../store/favourites-context";
import MeetupList from "../components/meetups/MeetupList";

function FavouritesPage() {
  const favouritesCtx = useContext(FavouritesContext);
  let content;

  if(favouritesCtx.totalFavourites===0)
  {
        content = <p>No favourites yet, Add some?</p>    
  }else{
    content = <MeetupList meetups={favouritesCtx.favourites}/>
  }
  return (
    <section>
      <h1>Favourites page</h1>
      {content}
    </section>
  );
}

export default FavouritesPage;
