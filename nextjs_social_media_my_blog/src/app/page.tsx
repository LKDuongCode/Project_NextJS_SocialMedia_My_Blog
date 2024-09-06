// import cpn-------------------------------------------------
import Banner1 from "@/components/users/home/Banner1";
import FooterUS from "@/components/users/home/FooterUS";
import HeaderUS from "@/components/users/home/HeaderUS";
//import cpn-------------------------------------------------------

// import logic and css-------------------------------------

// import logic and css-------------------------------------

export default function Home() {
  return (
    <div>
      <HeaderUS></HeaderUS>
      <section>
        <Banner1></Banner1>
        <div>what new</div>
        <div>Topic</div>
        <div>Top authors</div>
      </section>
      <FooterUS></FooterUS>
    </div>
  );
}
