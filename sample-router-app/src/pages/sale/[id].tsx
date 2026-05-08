import { useRouter } from "next/router";

export default function Page() {
  const router = useRouter();
  const id = router.query.id;
  
  return (
    <div>
      <h1>상품 상세 페이지 : 상품코드 (id)</h1>
    </div>
  );
}