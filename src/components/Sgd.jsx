import arrowLeft from '../img/arrowLeft.png'
import sgdTech from '../img/sgdTech.png'
import sgdConditions from '../img/sgdConditions.png'
import tilda from '../img/tilda.png'
import principle from '../img/principle.png'
import principleM from '../img/sgdM.png'
import { Link } from 'react-router-dom'

function Sgd() {
  return (
<section className="sgd">
      <div className="container">
        <Link to='/services' className="sgd__title"><img src={arrowLeft} alt="Назад" /><p>СГД</p></Link>
        <p className="sgd__subtitle"><strong>Метод СГД</strong> заключается в добыче твердых полезных ископаемых через ствол скважины без вскрышных работ</p>
        <div className="sgd__tech">
            <div className="sgd__tech_text">
                <p className="sgd__tech_title">Базовые принципы технологии:</p>
                <ul className="sgd__tech_list">
                    <li className="sgd__tech_item"><p>1.</p><p>Вода, подаваемая под давлением, разрушает продуктивный пласт</p></li>
                    <li className="sgd__tech_item"><p>2.</p><p>Разрушенный грунт доставляется к забою эксплуатационной скважины и поднимается на поверхность с помощью эрлифта или гидроэлеватора в виде пульпы</p></li>
                    <li className="sgd__tech_item"><p>3.</p><p>На поверхности пульпа подается на пром. прибор для промывки</p></li>
                </ul>
            </div>
            <img src={sgdTech} alt="" className="sgd__tech_img" />
        </div>
        <div className="sgd__conditions">
        <img src={sgdConditions} alt="" className="sgd__conditions_img" />
            <div className="sgd__conditions_text">
                <p className="sgd__conditions_title">Оптимальные условия для внедрения СГД:</p>
                <ul className="sgd__conditions_list">
                    <li className="sgd__conditions_item"><img src={tilda} alt="tilda" /><p>Ровная поверхность без сильных уклонов</p></li>
                    <li className="sgd__conditions_item"><img src={tilda} alt="tilda" /><p>Минимизация валунов в разрезе, препятствующих эксплуатационному бурению Устойчивые породы кровли пласта (в том числе мерзлые)</p></li>
                    <li className="sgd__conditions_item"><img src={tilda} alt="tilda" /><p>Глубина заложения кровли пласта от 15м и до 100м</p></li>
                    <li className="sgd__conditions_item"><img src={tilda} alt="tilda" /><p>Ровный плотик без глубоких трещин</p></li>
                    <li className="sgd__conditions_item"><img src={tilda} alt="tilda" /><p>Мощный продуктивный пласт при небольшом содержании не является проблемой. Обводненность продуктивного пласта является преимуществом</p></li>
                    <li className="sgd__conditions_item"><img src={tilda} alt="tilda" /><p>Ровная поверхность без сильных уклонов</p></li>
                    <li className="sgd__conditions_item"><img src={tilda} alt="tilda" /><p>Рассматриваемая география применения</p></li>
                </ul>
            </div>
        </div>
        <p className="sgd__principle_title">Технология СГД. <span>Основные принципы</span></p>
        <img src={principle} alt="" className="sgd__principle_img" />
        <img src={principleM} alt="" className="sgd__principle_mobile" />
      </div>
</section>
    );
}

export default Sgd;