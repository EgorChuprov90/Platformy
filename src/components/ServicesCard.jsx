import { Link } from "react-router-dom";
import arrowRight from "../img/arrowRight.svg"

function ServicesCard({ title, picture, path, pictureOpen }) {

    return (
          <Link to={path} preventScrollReset={false} className="services__card">
            <div className="services__card_img">
              <img src={picture} alt="." className="services__card_close" />
              <img src={pictureOpen} alt="." className="services__card_open" /> 
            </div>
              
              <div className="services__card_text"><p className="services__card_title">{title}</p><img src={arrowRight} alt="Стелка вправо" className="services__card_arrow" />  </div>
          </Link>
      );
  }
  
  export default ServicesCard;