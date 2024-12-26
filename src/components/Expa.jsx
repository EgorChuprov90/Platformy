import Popup from './Popup';
import {ExpaData1,ExpaData2,ExpaData3} from '../data/ExpaData'
import Inzh from './Inzh';
import Nork from './Nork';
import Rusburmash from './Rusburmash';
import Aopriisk from './Aopriisk';
import Kolali from './KolalI';
import Kolaggk from './Kolaggk';
import Asphalt from './Asphalt';
import Dikson from './Dikson';
import Uran from './Uran';
import Sarilah from './Sarilah';


function Expa() {
  return (
<section className="expa">
            <div className="expa__about">
                <div className="container">
                    <h2 className="expa__about_title">
                    Опыт и география
                    </h2>
                    <p className="expa__about_text">ООО «Морские платформы» обладает богатым опытом работы в самых сложных условиях, включая крайний север России.</p>
                    <p className="expa__about_text">Наш профессионализм и надежность позволяют нам выполнять проекты
                    в экстремальных условиях и обеспечивать высокое качество услуг на протяжении всего процесса работ.</p>
                </div>    
            </div>

            <div className="container">
                <p className="expa__subtitle">Карта проектной деятельности</p>
                <div className="expa__map">
                    <Popup name={'expa__kolalI'} comp={<Kolali/>}/> 
                    <Popup name={'expa__kolaggk'} comp={<Kolaggk/>}/>
                    <Popup name={'expa__asphalt'} comp={<Asphalt/>}/>
                    <Popup name={'expa__dikson'} comp={<Dikson/>}/>
                    <Popup name={'expa__ingeo'} comp={<Inzh/>}/>
                    <Popup name={'expa__aopriisk'} comp={<Aopriisk/>}/>
                    <Popup name={'expa__rusburmash'} comp={<Rusburmash/>}/>
                    <Popup name={'expa__hork'} comp={<Nork/>}/>
                    <Popup name={'expa__uran'} comp={<Uran/>}/>
                    <Popup name={'expa__sarilah'} comp={<Sarilah/>}/>
                </div>
            </div>

            <div className="container">
                <p className="expa__subtitle">Партнеры</p>
                <div className="expa__partners expa__partners_pc">
                    <div className='expa__partners__line1'>
                {ExpaData1.map(({ picture }, index) => (
                    <img key={index} src={picture} className='expa__partners_logo'/>
        ))}
        </div>
                <div className='expa__partners__line2'>
        {ExpaData2.map(({ picture }, index) => (
                    <img key={index} src={picture} className='expa__partners_logo'/>
        ))}
        </div>
                <div className='expa__partners__line3'>
        {ExpaData3.map(({ picture },  index) => (
                    <img key={index} src={picture} className='expa__partners_logo'/>
        ))}
        </div>
                </div>
                <div className="expa__partners expa__partners_mobile">
                {ExpaData1.map(({ picture }, index) => (
                    <img key={index} src={picture} className='expa__partners_logo'/>
        ))}
        {ExpaData2.map(({ picture }, index) => (
                    <img key={index} src={picture} className='expa__partners_logo'/>
        ))}
        {ExpaData3.map(({ picture }, index) => (
                    <img key={index} src={picture} className='expa__partners_logo'/>
        ))}
                </div>
            </div>
            </section>

    );
}

export default Expa;