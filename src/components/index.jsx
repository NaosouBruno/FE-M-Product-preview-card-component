import PerfumeMobile from "../assets/perfumeMobile.jpg";
import PerfumeDesktop from "../assets/perfumeDesktop.jpg";
import Cart from "../assets/cart.svg";

import "./cardContent.css";

const CardContent = () => {
  return (
    <div className="card">
      <img src={PerfumeMobile} className="card-imgProductMobile" />
      <img src={PerfumeDesktop} className="card-imgProductDesktop" />
      <div className="card-descriptionProduct">
        <div className="card-bodyContainer">
          <h4 className="card-nameProduct">P E R F U M E</h4>

          <h2 className="card-authorProduct">
            Gabrielle Essence Eau De Parfum
          </h2>

          <p>
            A floral, solar and voluptuous interpretation composed by Olivier
            Polge, Pergumer Creator for the Houve of CHANEL
          </p>

          <div className="card-prices">
            <span className="card-pricePromotion">$149.99</span>
            <span className="card-odlPrice">$169.99</span>
          </div>
        </div>
        <div className="card-footer">
          <button className="card-buy">
            <img src={Cart} />
            <span className="card-buy__title">Add to Cart</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardContent;
