// app/admin/layout.tsx

import HeaderAd from "@/components/admin/home/HeaderAd";
import FooterUS from "@/components/users/home/FooterUS";
import { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
};

export default function AdminLayout({ children }: LayoutProps) {
  return (
    <>
      <HeaderAd></HeaderAd>
      <main>{children}</main>
      <FooterUS></FooterUS>
    </>
  );
}
