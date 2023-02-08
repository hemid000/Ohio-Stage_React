import Offer from "../Home/Offer/Offer";
import Services from "../Home/Services/Services";
import ProductImg from "../Home/ProductImg/ProductImg";
import Capabilities from "./Capabilities/Capabilities";
function Home() {
  return (
    <main>
      <Offer />
      <Services />
      <ProductImg />
      <Capabilities />
    </main>
  );
}

export default Home;
