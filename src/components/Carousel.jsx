
import React from "react";

import photo1 from '../img/gallery/photo1.jpg'
import photo2 from '../img/gallery/photo2.jpg'
import photo3 from '../img/gallery/photo3.jpg'
import photo4 from '../img/gallery/photo4.jpg'
import photo5 from '../img/gallery/photo5.jpg'
import photo6 from '../img/gallery/photo6.jpg'
import photo7 from '../img/gallery/photo7.jpg'
import photo8 from '../img/gallery/photo8.jpg'
import photo9 from '../img/gallery/photo9.jpg'
import photo10 from '../img/gallery/photo10.jpg'
import photo11 from '../img/gallery/photo11.jpg'
import photo12 from '../img/gallery/photo12.jpg'
import photo13 from '../img/gallery/photo13.jpg'
import photo14 from '../img/gallery/photo14.jpg'
import photo15 from '../img/gallery/photo15.jpg'
import photo16 from '../img/gallery/photo16.jpg'
import photo17 from '../img/gallery/photo17.jpg'
import photo18 from '../img/gallery/photo18.jpg'
import photo19 from '../img/gallery/photo19.jpg'
import photo20 from '../img/gallery/photo20.jpg'
import photo21 from '../img/gallery/photo21.jpeg'
import photo22 from '../img/gallery/photo22.jpeg'





class Carousel extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {
            items: this.props.items,
            active: this.props.active,
            direction: ''
        }
        this.rightClick = this.moveRight.bind(this)
        this.leftClick = this.moveLeft.bind(this)
    }

    generateItems() {
        var items = []
        var level
        for (var i = this.state.active - 2; i < this.state.active + 3; i++) {
            var index = i
            if (i < 0) {
                index = this.state.items.length + i
            } else if (i >= this.state.items.length) {
                index = i % this.state.items.length
            }
            level = this.state.active - i
            items.push(<Item key={index} id={this.state.items[index]} level={level} />)
        }
        return items
    }
    
    moveLeft() {
        var newActive = this.state.active
        newActive--
        this.setState({
            active: newActive < 0 ? this.state.items.length - 1 : newActive,
            direction: 'left'
        })
    }
    
    moveRight() {
        var newActive = this.state.active
        this.setState({
            active: (newActive + 1) % this.state.items.length,
            direction: 'right'
        })
    }
    
    render() {
        return(
          <div className="gallery">
            <h2 className="gallery__title">Галерея</h2>           
            <div className="gallery__button">
            <div className="arrow arrow-left" onClick={this.leftClick}></div>
            <div className="arrow arrow-right" onClick={this.rightClick}></div>
            </div>
                        <div id="carousel" className="noselect">
                {this.generateItems()}
                <div className="gallery__button_mobile">
            <div className="arrow arrow-left" onClick={this.leftClick}></div>
            <div className="arrow arrow-right" onClick={this.rightClick}></div>
            </div>
            </div>
          </div>

        )
    }
}

class Item extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {
            level: this.props.level,
            id: this.props.id
        }
    }
    
    render() {
      const pop=[photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8, photo9, photo10, photo11, photo12, photo13, photo14, photo15, photo16, photo17, photo18, photo19, photo20, photo21, photo22]
      const cop=[`Бульдозер Shantui SD32. Подготовка буровой площадки на месторождении Пиль, Оймяконский улус, республика Саха (Якутия)`,`бульдозер Shantui SD32. Проходка канав на месторожении Тан, Оймяконский Улус, республика Саха (Якутия)`,`Опробование канавы на месторождении Тан, Оймяконский улус, республика Саха (Якутия)`,`Заброска смены машинистов буровой установки на Вилючинский Вулкан (высота над уровнем моря 2 173м.) Камчатский край, Елизовский район`,`Вилючинский вулкан (высота над уровнем моря 2 173 м.) Камчатский край, Елизовский район`,`Вилючинский вулкан (высота над уровнем моря 2 173 м.) Камчатский край, Елизовский район`,`Вилючинский вулкан (высота над уровнем моря 2 173 м.) Камчатский край, Елизовский район`,`Доставка сотрудников для проведения литогеохимического опробования по вторичным ореолам рассеяния. Камчатский край, Елизовский район`,`Временный полевой лагерь на месторождении Тан, Оймяконский улус, республика Саха (Якутия)`,`Рекогносцировочное обследование участка работ. Камчатский край, Елизовский район`,`Полевой лагерь. Параметрическое бурение близ месторождения Бованенково, Ямало-Ненецкий автономный округ`,`Самоподъемная платформа "Федор Ушаков"`,`Заезд на месторождение Дражное. Оймяконский Улус, республика Саха (Якутия)`,`Заезд на месторождение Дражное. Оймяконский улус, Республика Саха (Якутия)`,`Рекогносцировочное обследование участка работ. Карагинский район, Камчатский край.`,`Буровые работы на месторождении Хапчагай. Оймяконский улус, Республика Саха (Якутия)`,`Месторождение Тан, Оймяконский улус, республика Саха (Якутия)`,`Рекогносцировочные работы, ХМАО, Приполярный Урал`,`Рекогносцировочные работы, ХМАО, Приполярный Урал`,`Перевозка буровой установки на точку бурения. Таймырский Долгано-Ненецкий район, Красноярский край`, `Снегоболотоход Трэкол. Ямало-Ненецкий автономный округ`, `Снегоболотоход Трэкол. Ямало-Ненецкий автономный округ`,
]

        const className = 'item level' + this.props.level
        const id = this.props.id
        return(
            <div className={className}>
                  <img src={pop[id]} alt="" />
                  <p>{cop[id]}</p>
            </div>
        )
    }
}

export default Carousel;