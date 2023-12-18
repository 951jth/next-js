import { isMobile } from "@/util/Responsive";
import { useEffect, useState } from "react";

export default function useResponsive() {
  const isMob = isMobile();
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    setMobile(isMob);
  }, [isMob]);
  return { mobile };
}
