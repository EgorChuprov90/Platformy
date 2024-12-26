import PreeminenceCard from "./PreeminenceCard";
import { PreeminenceData } from '../data/PreeminenceData';

function Preeminence() {
  return (
<section className="preeminence">
    <div className="container">
      <p className="preeminence__title">Преимущества</p>
      <ul className="preeminence__list">
      {PreeminenceData.map(({ title, content, picture}, index) => (
          <PreeminenceCard key={index} title={title} content={content} picture={picture} />
        ))}
      </ul>
    </div>
</section>
    );
}

export default Preeminence;