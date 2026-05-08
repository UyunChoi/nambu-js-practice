import SearchBarLayout from "@/components/searchbar-layout";
import styles from './index.module.css';
import { ReactNode } from "react";
//테스트
import sales from '@/mockup/sales.json';
import SaleItem from "@/components/sale-item";

export default function Home() {
  return (
    <div className={styles.title}>
      <section>
        <h1>인덱스 페이지 입니다.</h1>
        {sales.map((sale)=>(
          <SaleItem key={sale.id} item={sale}/>
        ))}
      </section>
    </div>
  );
}

Home.getLayout = (page: ReactNode) => { // _app.tsx를 거침 -> document > main
  return <SearchBarLayout>{page}</SearchBarLayout>
};
