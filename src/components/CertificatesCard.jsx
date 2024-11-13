function CertificatesCard({ title, content, picture }) {
  return (
        <li className="certificates__card">
            <img src={picture} alt="." className="certificates__card_img" />
            <p className="certificates__card_text"><strong>{title}</strong><br/>{content}</p>
        </li>
    );
}

export default CertificatesCard;