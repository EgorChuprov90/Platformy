import { useEffect } from "react";
import {ServicesData} from "../data/ServicesData";
import ServicesCard from "./ServicesCard";

function Services() {
  return (
<section className="services">
    <div className="container">
    <h2 className="services__title titlePage">Услуги</h2>
    <div className="services__text">
        <p>ООО «Морские платформы» предоставляет полный комплекс услуг по буровым работам и геологическому изучению объектов как на суше, так и на море.</p>
        <p>Мы предлагаем широкий спектр услуг для проведения геологоразведочных работ в различных условиях, обеспечивая высокое качество и профессиональный подход к каждому проекту. Наш опыт и компетенции позволяют нам эффективно решать самые сложные задачи в области геологии и разведки полезных ископаемых.</p>
    </div>
    <div className="services__list">
    {ServicesData.map(({ title, picture, path }, index) => (
          <ServicesCard key={index} title={title} picture={picture} path={path} />
        ))}
    </div>
    </div>
</section>
    );
}

export default Services;