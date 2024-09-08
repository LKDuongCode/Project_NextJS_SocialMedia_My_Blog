// app/admin/layout.tsx
import FooterAd from "@/components/admin/home/FooterAd";
import HeaderAd from "@/components/admin/home/HeaderAd";
import { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
};

export default function AdminLayout({ children }: LayoutProps) {
  return (
    <>
      <HeaderAd></HeaderAd>
      <main>{children}</main>
      <FooterAd></FooterAd>
    </>
  );
}
