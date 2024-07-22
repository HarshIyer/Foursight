import axios from "axios";
import { apiURL } from "@/app/components/apiURL";
export default async function getTopMovers() {
  let results;
  try {
    results = await axios.post(apiURL + "/getTopMovers");
  } catch (e) {
    console.log(e);
  }

  return results;
}
