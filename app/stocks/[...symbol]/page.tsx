import Navbar from "@/app/components/navbar/Navbar";

export default function Page({
  params,
}: {
  params: {
    symbol: string;
  };
}) {
  return (
    <div>
      <Navbar />
    </div>
  );
}
