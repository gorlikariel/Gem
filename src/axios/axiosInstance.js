import axios from "axios";

const blueMarble = axios.create({
  baseURL: "https://bluemarble-a4f07.firebaseio.com/"
});
export default blueMarble;
