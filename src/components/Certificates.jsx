import CertificatesCard from "./CertificatesCard";
import { CertificatesData } from '../data/CertificatesData';

function Certificates() {
  return (
<section className="certificates">
    <div className="container">
      <p className="certificates__title">сертификаты</p>
      <ul className="certificates__list">
      {CertificatesData.map(({ title, content, picture }) => (
          <CertificatesCard title={title} content={content} picture={picture} />
        ))}
      </ul>
    </div>
</section>
    );
}

export default Certificates;