import { apiURL } from "@/app/components/apiURL";
import axios from "axios";
export default async function getNews() {
  let results;
  try {
    results = await axios.post(apiURL + "/announcements");
  } catch (e) {
    console.log(e);
  }

  return results;
}
