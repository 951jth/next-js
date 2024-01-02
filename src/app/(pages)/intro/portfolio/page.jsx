"use client";
import DelphiSCPServiceSection from "./_compoent/DelphiSCPServiceSection";
import DelphiSig2Section from "./_compoent/DelphiSig2Section";
import PortSolutionSection from "./_compoent/PortSolutionSection";
import PortTopSection from "./_compoent/PortTopSection";
import styles from "./page.module.css";

export default function PortpolioPage() {
  return (
    <div className={styles.container}>
      <PortTopSection />
      <PortSolutionSection />
      <DelphiSig2Section />
      <DelphiSCPServiceSection />
    </div>
  );
}
