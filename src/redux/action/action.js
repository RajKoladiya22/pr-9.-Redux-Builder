// export const ADD_CARD =(data)=>{
//     return{
//         type : "addCard",
//         payload : data
//     }
// }

import axios from "axios";
import { toast } from "react-toastify";

export const fetchCards = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get("http://localhost:3000/card");
      dispatch({
        type: "SET_CARDS",
        payload: response.data,
      });
    } catch (err) {
      console.log(err);
      toast.error("Failed to fetch cards");
    }
  };
};

export const ADD_CARD = (card) => {
  return async (dispatch) => {
    try {
      await axios.post("http://localhost:3000/card", card);

      const response = await axios.get("http://localhost:3000/card");

      dispatch({
        type: "SET_CARDS",
        payload: response.data,
      });
      toast.success("Card successfully created");
    } catch (err) {
      console.log(err);
      toast.error("Failed to add card");
    }
  };
};

export const DELET_CARD = (id) => {
  return async (dispatch) => {
    try {
      await axios.delete(`http://localhost:3000/card/${id}`);
      const response = await axios.get("http://localhost:3000/card");
      dispatch({
        type: "SET_CARDS",
        payload: response.data,
      });
      toast.success("Card successfully deleted");
    } catch (err) {
      console.log(err);
      toast.error("Failed to delete card");
    }
  };
};
