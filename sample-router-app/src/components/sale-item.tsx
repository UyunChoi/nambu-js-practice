import type { SaleData } from "@/types";
import style from './sale-item.module.css'
import Link from "next/link";
import Image from "next/image";

export default function SaleItem({id,productName,description,price,userName,photo}:SaleData) {
  //스토리지 - container
  const imageURL = `https://styangpa.blob.core.windows.net/yangpa/${photo}` //스토리지 계정의 주소/컨테이너명 (도커컨테이너랑 상관없음)
  
  //클릭 했을 때 -> 상세페이지로 이동
  return (
    <Link href={`./sale/${id}`} className={style.container}>
      <Image 
        src={imageURL} 
        alt={`${productName}의 이미지`}
        width={100}
        height={100}
        className={style.image}
      />
      <div>
        <div className={style.title}>{productName}</div>
        <div className={style.description}>{description}</div>
        <div className={style.price}>{price}</div>
      </div>
    </Link>
  );
}