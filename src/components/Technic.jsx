import TechnicAccordion from "./TechnicAccordion";
import {TechData} from '../data/TechnicData'
import {BurData} from '../data/TechnicData'
import {FlotData} from '../data/TechnicData'

function Technic() {
    return (
        <section className="technic">
            <div className="technic__about">
                <div className="container">
                    <h2 className="technic__about_title">
                    техника
                    </h2>
                    <p className="technic__about_text"> Для выполнения проектов используется новейшие техника и оборудование,
                    что исключает простои, основные технические средства имеют срок эксплуатации менее 3-х лет, регулярно обслуживаются и находятся в отличном состоянии. </p>
                    <p className="technic__about_text">Основа бурового дивизиона – 5 буровых геологоразведочных комплексов, а также бульдозерная и вспомогательная техника общим числом более 15 единиц.</p>
                </div>    
            </div>
            
                <div className="container">
                    <div className="technic__tech">  
                        <TechnicAccordion title='Буровые установки' data={BurData}/>
                        <TechnicAccordion title='Вспомогательная техника' data={TechData}/>
                        <TechnicAccordion title='Флот' data={FlotData}/>
                    </div>   
                </div>
            
        </section>
      );
  }
  
  export default Technic;