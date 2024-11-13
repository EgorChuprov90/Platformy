function TechnicCard({ title, content, picture, count}) {
  return (
        <li className="technic__card">
          <img src={picture} alt="Техника" className="technic__card_img" />
          <div className="technic__card_title">
            <p className="technic__card_subtitle">{title}</p>
            <p className="technic__card_text">{content}</p>
            <p className="technic__card_count">{count}</p>
          </div>
        </li>
    );
}

export default TechnicCard;