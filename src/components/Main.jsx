import About from "./About";
import Carousel from "./Carousel";
import Certificates from "./Certificates";
import Preeminence from "./Preeminence";
import Preview from "./Preview";

function Main() {
  var items = [0, 1, 2, 3, 4, 5, 6, 7]

  return (
    <div className="main">
    
   <About/>
   <Preeminence/>
   <Carousel items={items} active={0}/>
   <Certificates/>
    </div>
  );
}

export default Main;
