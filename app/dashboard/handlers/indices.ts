import { apiURL } from "@/app/components/apiURL";
import axios from "axios";
export default async function getIndices() {
  let results;
  try {
    results = await axios.post(apiURL + "/getIndices");
  } catch (e) {
    console.log(e);
  }

  return results;
}
