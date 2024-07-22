import { useEffect, useState } from "react";

export default function NewsSection(props: any) {
  const data = props;

  return (
    <div className="mt-4">
      <h1 className="font-semibold text-xl mb-4">Top News</h1>
      {JSON.stringify(data)}
    </div>
  );
}
