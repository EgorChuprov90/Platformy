
import React from "react";
import Main1 from '../img/gallery/main1.png'
import Main2 from '../img/gallery/main2.png'
import Main3 from '../img/gallery/main3.png'
import Main4 from '../img/gallery/main4.png'





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
        console.log(this.state.active)
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
      const pop=[Main1, Main2, Main3, Main4, Main1, Main2, Main3, Main4]
        
        const className = 'item level' + this.props.level
        const id = this.props.id
        return(
            <div className={className}>
                  <img src={pop[id]} alt="" />
                  <p>Lorem ipsum dolor sit amet</p>
            </div>
        )
    }
}

export default Carousel;