import BannerAD from "@/components/admin/home/BannerAd";
import AdminLayout from "../page";
import StatisticsAd from "@/components/admin/home/StatisticsAd";

export default function Dashboard() {
  return (
    <AdminLayout>
      <div className="ml-14">
        <BannerAD></BannerAD>
        <StatisticsAd></StatisticsAd>
      </div>
    </AdminLayout>
  );
}
