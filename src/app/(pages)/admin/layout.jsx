"use client";
import { useEffect } from "react";
import styles from "./layout.module.css";
import { useLocalStore } from "@/store/LocalStore";
import { useUserStore } from "@/store/UserStore";
import { SessionProvider, useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";

export default function AdminLayout({ children, ...others }) {
  const router = useRouter();
  const pathname = usePathname();
  const session = useSession();

  useEffect(() => {
    if (!!!session?.data && pathname !== "/admin/login") {
      console.log("/admin/login");
      router.replace("/admin/login");
    }
  }, [session?.data]);

  return (
    <div className={`${styles.container} rowCenterCenter`}>{children}</div>
  );
}
