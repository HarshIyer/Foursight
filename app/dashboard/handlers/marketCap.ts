import { apiURL } from "@/app/components/apiURL";
import axios from "axios";
export default async function marketCap() {
  let results;
  try {
    results = await axios.post(apiURL + "/getMarketCap");
  } catch (e) {
    console.log(e);
  }

  return results;
}
