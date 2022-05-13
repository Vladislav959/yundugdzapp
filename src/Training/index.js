import wavinghand from '../wavinghand.png'
import starstruck from '../starstruck.png'
import thumbsup from '../thumbssup.png';
import thumbsdown from '../thumbssdown.png'
import {Component} from 'react'
import Select from 'react-select'
import styles from './index.module.css'
import {Animated} from "react-animated-css";
import {produce} from 'immer'
const options = [
    { value: '1', label: '1' },
    { value: '2', label: '2' },
    { value: '3', label: '3' },
    { value: '4', label: '4' },
    { value: '5', label: '5' },
    { value: '6', label: '6' },
    { value: '7', label: '7' },
    { value: '8', label: '8' },
    { value: '9', label: '9' },
    { value: '10', label: '10' },
    { value: '11', label: '11' }
  ]
export default class Training extends Component{
    constructor(){
        super();
        this.state = {
            phase:0,
            visible:false,
            data:{
                class:null
            }
        }
        this.nextPhase = this.nextPhase.bind(this)
    }
    nextPhase(phaseForce){
        let phaseNow;
        if(phaseForce){
            phaseNow = phaseForce
        }
        else{
            phaseNow = this.state.phase + 1
        }
        console.log(phaseNow)
        this.setState(produce(draft => {draft.visible = false}))
        setTimeout(()=>{
            this.setState(produce(draft => {draft.phase = phaseNow}),()=>{
        this.setState(produce(draft => {draft.visible = true}))
           })
        },1000)
    }
    componentDidMount(){
        this.setState(produce(draft => {draft.visible = true}))
        setTimeout(()=>{
            this.setState(produce(draft => {draft.visible = false}))
        },2500)
        setTimeout(()=>{
            this.setState(produce(draft => {draft.phase = 1}),()=>{
        this.setState(produce(draft => {draft.visible = true}))
           })
        },3500)
    }
    render(){
         switch(this.state.phase){
        case 0:
            return(
                <Animated animationIn="fadeInUp" animationOut="fadeOutUp" duration={500} isVisible={this.state.visible}>
                <h2>Приветствую тебя в Yundu!<img className={styles.emoji} src={wavinghand} alt="emoji"/></h2>
                </Animated>
            )
        case 1:
            return(
                <Animated animationIn="fadeInUp" animationOut="fadeOutUp" duration={500} isVisible={this.state.visible}>
                <h3>Выбери свой класс:</h3>
                <Select onChange={(t)=>{this.setState(produce(draft => {draft.data.class = t.value}))}} classNamePrefix="react-select" placeholder={<p>Выбери из списка...</p>} options={options}/>
                <button onClick={()=>{this.nextPhase()}} disabled={!this.state.data.class}>Далее</button>
                </Animated>
            )
        case 2:
            return(
                <Animated animationIn="fadeInUp" animationOut="fadeOutUp" duration={500} isVisible={this.state.visible}>
                <h2>Поставим учебники по умолчанию?</h2>
                <div style={{display:'flex'}}>
                    <button className={styles.imgbutton} onClick={()=>{this.nextPhase(4)}}><img src={thumbsdown}/></button>
                    <button style={{marginLeft:10}} className={styles.imgbutton} onClick={this.nextPhase}><img src={thumbsup}/></button>
                </div>
                </Animated>
            )
        case 4:
            return(
                <Animated animationIn="fadeInUp" animationOut="fadeOutUp" duration={500} isVisible={this.state.visible}>
                <h2>Всё готово!<img className={styles.emoji} src={wavinghand} alt="emoji"/></h2>
                <button onClick={()=>{
                    localStorage.setItem("class",this.state.data.class);
                    window.location.reload()
                }}>Завершить</button>
                </Animated>
            )
        default:
            return(
                <Animated animationIn="fadeInUp" animationOut="fadeOutUp" duration={500} isVisible={this.state.visible}>
                <h2>Приветствую тебя в Yundu!<img className={styles.emoji} src={starstruck} alt="emoji"/></h2>
                </Animated>
            )
    }
    }
   
}