import NewMeetupForm from "../components/meetups/NewMeetupForm";
import { useHistory } from "react-router-dom";

function NewMeetUpPage() {
  const history = useHistory();
  function addMeetupHandler(meetupData) {
    fetch(
      "https://react-refresher-a0e0a-default-rtdb.firebaseio.com/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(meetupData),
        headers: { "Content-Type": "application/json" },
      }
    ).then(() => {
      //This is used to navigate away after data it submitted
      history.replace("/");
    });
  }
  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
}

export default NewMeetUpPage;
