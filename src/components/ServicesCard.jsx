import { Link } from "react-router-dom";
import arrowRight from "../img/arrowRight.png"

function ServicesCard({ title, picture, path }) {
    return (
          <Link to={path} className="services__card">
              <img src={picture} alt="." className="services__card_img" />
              <div className="services__card_text"><p className="services__card_title">{title}</p><img src={arrowRight} alt="Стелка вправо" className="services__card_arrow" />  </div>
          </Link>
      );
  }
  
  export default ServicesCard;