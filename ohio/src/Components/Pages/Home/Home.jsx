import Offer from "../Home/Offer/Offer";
import Services from "../Home/Services/Services";
import ProductImg from "../Home/ProductImg/ProductImg";
import Capabilities from "./Capabilities/Capabilities";
import BrandInfo from "./BrandInfo/BrandInfo";
function Home() {
  return (
    <main>
      <Offer />
      <Services />
      <ProductImg />
      <Capabilities />
      <BrandInfo />
    </main>
  );
}

export default Home;
