import About from "./About";
import Carousel from "./Carousel";
import Certificates from "./Certificates";
import Preeminence from "./Preeminence";

function Main() {
  var items = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21]

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
