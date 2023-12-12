import { useMediaQuery } from "react-responsive";
import { Breakpoints } from "./CommonStyle";

const HELPER_NAME = "ResponsiveHelper";

export function isMobile() {
  return useMediaQuery({ maxWidth: Breakpoints[1] });
}

export function isSmallDevice() {
  return useMediaQuery({ maxWidth: Breakpoints[0] });
}
