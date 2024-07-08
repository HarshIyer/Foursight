import Navbar from "../components/navbar/Navbar";
import Watchlist from "../components/sections/Watchlist";

export default function WatchlistPage() {
  return (
    <div>
      <Navbar />
      <div className="my-8">
        <Watchlist />
      </div>
    </div>
  );
}
