import SearchBarLayout from "@/components/searchbar-layout";
import { useRouter } from "next/router";
import { ReactNode } from "react";

export default function Page() {
  const router = useRouter();
  const query = router.query.q;
  return (
    <div>
      <h1>검색 페이지입니다.</h1>
    </div>
  );
}

Page.getLayout = (page:ReactNode) => {
  return<SearchBarLayout>{page}</SearchBarLayout>
}