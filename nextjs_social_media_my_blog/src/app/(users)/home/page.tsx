import Banner1 from "@/components/users/home/Banner1";
import UserHome from "../page";
import IntroduceWebAndUs from "@/components/users/home/IntroduceWebAndUs";

export default function Home() {
  return (
    <UserHome>
      <div className="bg-[#333] text-slate-200">
        <Banner1></Banner1>
        <IntroduceWebAndUs></IntroduceWebAndUs>
      </div>
    </UserHome>
  );
}
