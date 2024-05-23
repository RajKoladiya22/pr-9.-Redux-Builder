import { toast } from "react-toastify";

const intState = {
  card: [],
};

export const cardReducer = async (state = intState, action) => {
  switch (action.type) {
    case "addCard":
      try {
        let all = await fetch(`http://localhost:3000/card`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title: action.payload.title,
            description: action.payload.description,
          }),
        });
        let res = await all.json();
        if (res) {
          console.log(`done`);
          return state;
        } else {
          toast.error("please try again");
        }
      } catch (err) {
        console.log(err);
        return false;
      }

    default:
      return state;
  }
};
