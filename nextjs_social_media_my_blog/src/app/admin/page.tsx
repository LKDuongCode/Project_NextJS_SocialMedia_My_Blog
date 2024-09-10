// app/admin/layout.tsx

import HeaderAd from "@/components/admin/home/HeaderAd";
import SideBarAd from "@/components/admin/home/SideBarAd";
import FooterUS from "@/components/users/home/FooterUS";
import { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
};

export default function AdminLayout({ children }: LayoutProps) {
  return (
    <>
      <HeaderAd></HeaderAd>
      <main className="flex gap-5">
        <SideBarAd></SideBarAd>
        {children}
      </main>
      <FooterUS></FooterUS>
    </>
  );
}
