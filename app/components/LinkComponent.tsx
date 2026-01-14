'use client';

import Link from "next/link";
import linkStyles from "./LinkComponent.module.css";

// 1. LinkComponent を拡張（onClick を受け取れるようにする）
export function LinkComponent({
    linkPath = "/",
    linkName = "",
    onClick
}: {
    linkPath?: string,
    linkName?: string,
    onClick?: () => void // 追加
}) {
  return (
    <Link 
      className={linkStyles.linkButton} 
      href={linkPath} 
      onClick={onClick}
    >
      {linkName}
    </Link>
  )
}