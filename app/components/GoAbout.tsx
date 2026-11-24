
"use client";

import { useRouter } from "next/navigation";

export default function GoAbout() {
  const router = useRouter();

  return (
    <button onClick={() => router.push("/about")}>
      About səhifəsinə keç
    </button>
  );
}
