import LoadingIcon from '../LoadingIcon'
import wavinghand from '../wavinghand.png'
import starstruck from '../starstruck.png'
import thumbsup from '../thumbssup.png';
import thumbsdown from '../thumbssdown.png'
import {Component} from 'react'
import Select from 'react-select'
import List from '../Home/List'
import styles from './index.module.css'
import {Animated} from "react-animated-css";
import {produce} from 'immer'
const data = [{"heading":"1 класс","subjects":[{"subject":"Математика","href":"/class-1/matematika/"},{"subject":"Английский язык","href":"/class-1/english/"},{"subject":"Русский язык","href":"/class-1/russkii_yazik/"},{"subject":"Информатика","href":"/class-1/informatika/"},{"subject":"Музыка","href":"/class-1/muzyka/"},{"subject":"Литература","href":"/class-1/literatura/"},{"subject":"Окружающий мир","href":"/class-1/okruzhajushhij_mir/"},{"subject":"Технология","href":"/class-1/tekhnologiya/"},{"subject":"Мир природы и человека","href":"/class-1/mir_prirody_i_cheloveka/"}]},{"heading":"2 класс","subjects":[{"subject":"Математика","href":"/class-2/matematika/"},{"subject":"Английский язык","href":"/class-2/english/"},{"subject":"Русский язык","href":"/class-2/russkii_yazik/"},{"subject":"Немецкий язык","href":"/class-2/nemeckiy_yazik/"},{"subject":"Французский язык","href":"/class-2/francuzskiy_yazik/"},{"subject":"Информатика","href":"/class-2/informatika/"},{"subject":"Музыка","href":"/class-2/muzyka/"},{"subject":"Литература","href":"/class-2/literatura/"},{"subject":"Окружающий мир","href":"/class-2/okruzhajushhij_mir/"},{"subject":"Технология","href":"/class-2/tekhnologiya/"},{"subject":"Испанский язык","href":"/class-2/spanish/"},{"subject":"Казахский язык","href":"/class-2/kazakhskiy_yazyk/"},{"subject":"Мир природы и человека","href":"/class-2/mir_prirody_i_cheloveka/"}]},{"heading":"3 класс","subjects":[{"subject":"Математика","href":"/class-3/matematika/"},{"subject":"Английский язык","href":"/class-3/english/"},{"subject":"Русский язык","href":"/class-3/russkii_yazik/"},{"subject":"Немецкий язык","href":"/class-3/nemeckiy_yazik/"},{"subject":"Французский язык","href":"/class-3/francuzskiy_yazik/"},{"subject":"Информатика","href":"/class-3/informatika/"},{"subject":"Музыка","href":"/class-3/muzyka/"},{"subject":"Литература","href":"/class-3/literatura/"},{"subject":"Окружающий мир","href":"/class-3/okruzhajushhij_mir/"},{"subject":"Технология","href":"/class-3/tekhnologiya/"},{"subject":"Испанский язык","href":"/class-3/spanish/"},{"subject":"Казахский язык","href":"/class-3/kazakhskiy_yazyk/"},{"subject":"Мир природы и человека","href":"/class-3/mir_prirody_i_cheloveka/"}]},{"heading":"4 класс","subjects":[{"subject":"Математика","href":"/class-4/matematika/"},{"subject":"Английский язык","href":"/class-4/english/"},{"subject":"Русский язык","href":"/class-4/russkii_yazik/"},{"subject":"Немецкий язык","href":"/class-4/nemeckiy_yazik/"},{"subject":"Французский язык","href":"/class-4/francuzskiy_yazik/"},{"subject":"Информатика","href":"/class-4/informatika/"},{"subject":"Музыка","href":"/class-4/muzyka/"},{"subject":"Литература","href":"/class-4/literatura/"},{"subject":"Окружающий мир","href":"/class-4/okruzhajushhij_mir/"},{"subject":"Технология","href":"/class-4/tekhnologiya/"},{"subject":"Испанский язык","href":"/class-4/spanish/"},{"subject":"Казахский язык","href":"/class-4/kazakhskiy_yazyk/"},{"subject":"Мир природы и человека","href":"/class-4/mir_prirody_i_cheloveka/"}]},{"heading":"5 класс","subjects":[{"subject":"Математика","href":"/class-5/matematika/"},{"subject":"Английский язык","href":"/class-5/english/"},{"subject":"Русский язык","href":"/class-5/russkii_yazik/"},{"subject":"Физика","href":"/class-5/fizika/"},{"subject":"Немецкий язык","href":"/class-5/nemeckiy_yazik/"},{"subject":"Украинский язык","href":"/class-5/ukrainskiy_yazik/"},{"subject":"Французский язык","href":"/class-5/francuzskiy_yazik/"},{"subject":"Биология","href":"/class-5/biologiya/"},{"subject":"История","href":"/class-5/istoriya/"},{"subject":"Информатика","href":"/class-5/informatika/"},{"subject":"ОБЖ","href":"/class-5/obj/"},{"subject":"География","href":"/class-5/geografiya/"},{"subject":"Природоведение","href":"/class-5/prirodovedenie/"},{"subject":"Музыка","href":"/class-5/muzyka/"},{"subject":"Литература","href":"/class-5/literatura/"},{"subject":"Обществознание","href":"/class-5/obshhestvoznanie/"},{"subject":"Технология","href":"/class-5/tekhnologiya/"},{"subject":"Естествознание","href":"/class-5/estestvoznanie/"},{"subject":"Испанский язык","href":"/class-5/spanish/"},{"subject":"Искусство","href":"/class-5/iskusstvo/"},{"subject":"Китайский язык","href":"/class-5/kitayskiy_yazyk/"},{"subject":"Кубановедение","href":"/class-5/kubanovedeniye/"},{"subject":"Казахский язык","href":"/class-5/kazakhskiy_yazyk/"}]},{"heading":"6 класс","subjects":[{"subject":"Математика","href":"/class-6/matematika/"},{"subject":"Английский язык","href":"/class-6/english/"},{"subject":"Русский язык","href":"/class-6/russkii_yazik/"},{"subject":"Физика","href":"/class-6/fizika/"},{"subject":"Немецкий язык","href":"/class-6/nemeckiy_yazik/"},{"subject":"Украинский язык","href":"/class-6/ukrainskiy_yazik/"},{"subject":"Французский язык","href":"/class-6/francuzskiy_yazik/"},{"subject":"Биология","href":"/class-6/biologiya/"},{"subject":"История","href":"/class-6/istoriya/"},{"subject":"Информатика","href":"/class-6/informatika/"},{"subject":"ОБЖ","href":"/class-6/obj/"},{"subject":"География","href":"/class-6/geografiya/"},{"subject":"Природоведение","href":"/class-6/prirodovedenie/"},{"subject":"Музыка","href":"/class-6/muzyka/"},{"subject":"Литература","href":"/class-6/literatura/"},{"subject":"Обществознание","href":"/class-6/obshhestvoznanie/"},{"subject":"Экология","href":"/class-6/ekologiya/"},{"subject":"Технология","href":"/class-6/tekhnologiya/"},{"subject":"Естествознание","href":"/class-6/estestvoznanie/"},{"subject":"Испанский язык","href":"/class-6/spanish/"},{"subject":"Искусство","href":"/class-6/iskusstvo/"},{"subject":"Китайский язык","href":"/class-6/kitayskiy_yazyk/"},{"subject":"Кубановедение","href":"/class-6/kubanovedeniye/"},{"subject":"Казахский язык","href":"/class-6/kazakhskiy_yazyk/"}]},{"heading":"7 класс","subjects":[{"subject":"Математика","href":"/class-7/matematika/"},{"subject":"Английский язык","href":"/class-7/english/"},{"subject":"Русский язык","href":"/class-7/russkii_yazik/"},{"subject":"Алгебра","href":"/class-7/algebra/"},{"subject":"Геометрия","href":"/class-7/geometria/"},{"subject":"Физика","href":"/class-7/fizika/"},{"subject":"Химия","href":"/class-7/himiya/"},{"subject":"Немецкий язык","href":"/class-7/nemeckiy_yazik/"},{"subject":"Украинский язык","href":"/class-7/ukrainskiy_yazik/"},{"subject":"Французский язык","href":"/class-7/francuzskiy_yazik/"},{"subject":"Биология","href":"/class-7/biologiya/"},{"subject":"История","href":"/class-7/istoriya/"},{"subject":"Информатика","href":"/class-7/informatika/"},{"subject":"ОБЖ","href":"/class-7/obj/"},{"subject":"География","href":"/class-7/geografiya/"},{"subject":"Музыка","href":"/class-7/muzyka/"},{"subject":"Литература","href":"/class-7/literatura/"},{"subject":"Обществознание","href":"/class-7/obshhestvoznanie/"},{"subject":"Технология","href":"/class-7/tekhnologiya/"},{"subject":"Испанский язык","href":"/class-7/spanish/"},{"subject":"Искусство","href":"/class-7/iskusstvo/"},{"subject":"Китайский язык","href":"/class-7/kitayskiy_yazyk/"},{"subject":"Кубановедение","href":"/class-7/kubanovedeniye/"},{"subject":"Казахский язык","href":"/class-7/kazakhskiy_yazyk/"}]},{"heading":"8 класс","subjects":[{"subject":"Математика","href":"/class-8/matematika/"},{"subject":"Английский язык","href":"/class-8/english/"},{"subject":"Русский язык","href":"/class-8/russkii_yazik/"},{"subject":"Алгебра","href":"/class-8/algebra/"},{"subject":"Геометрия","href":"/class-8/geometria/"},{"subject":"Физика","href":"/class-8/fizika/"},{"subject":"Химия","href":"/class-8/himiya/"},{"subject":"Немецкий язык","href":"/class-8/nemeckiy_yazik/"},{"subject":"Французский язык","href":"/class-8/francuzskiy_yazik/"},{"subject":"Биология","href":"/class-8/biologiya/"},{"subject":"История","href":"/class-8/istoriya/"},{"subject":"Информатика","href":"/class-8/informatika/"},{"subject":"ОБЖ","href":"/class-8/obj/"},{"subject":"География","href":"/class-8/geografiya/"},{"subject":"Литература","href":"/class-8/literatura/"},{"subject":"Обществознание","href":"/class-8/obshhestvoznanie/"},{"subject":"Экология","href":"/class-8/ekologiya/"},{"subject":"Технология","href":"/class-8/tekhnologiya/"},{"subject":"Испанский язык","href":"/class-8/spanish/"},{"subject":"Искусство","href":"/class-8/iskusstvo/"},{"subject":"Кубановедение","href":"/class-8/kubanovedeniye/"},{"subject":"Казахский язык","href":"/class-8/kazakhskiy_yazyk/"}]},{"heading":"9 класс","subjects":[{"subject":"Математика","href":"/class-9/matematika/"},{"subject":"Английский язык","href":"/class-9/english/"},{"subject":"Русский язык","href":"/class-9/russkii_yazik/"},{"subject":"Алгебра","href":"/class-9/algebra/"},{"subject":"Геометрия","href":"/class-9/geometria/"},{"subject":"Физика","href":"/class-9/fizika/"},{"subject":"Химия","href":"/class-9/himiya/"},{"subject":"Немецкий язык","href":"/class-9/nemeckiy_yazik/"},{"subject":"Французский язык","href":"/class-9/francuzskiy_yazik/"},{"subject":"Биология","href":"/class-9/biologiya/"},{"subject":"История","href":"/class-9/istoriya/"},{"subject":"Информатика","href":"/class-9/informatika/"},{"subject":"ОБЖ","href":"/class-9/obj/"},{"subject":"География","href":"/class-9/geografiya/"},{"subject":"Литература","href":"/class-9/literatura/"},{"subject":"Обществознание","href":"/class-9/obshhestvoznanie/"},{"subject":"Черчение","href":"/class-9/cherchenie/"},{"subject":"Технология","href":"/class-9/tekhnologiya/"},{"subject":"Испанский язык","href":"/class-9/spanish/"},{"subject":"Искусство","href":"/class-9/iskusstvo/"},{"subject":"Кубановедение","href":"/class-9/kubanovedeniye/"},{"subject":"Казахский язык","href":"/class-9/kazakhskiy_yazyk/"}]},{"heading":"10 класс","subjects":[{"subject":"Математика","href":"/class-10/matematika/"},{"subject":"Английский язык","href":"/class-10/english/"},{"subject":"Русский язык","href":"/class-10/russkii_yazik/"},{"subject":"Алгебра","href":"/class-10/algebra/"},{"subject":"Геометрия","href":"/class-10/geometria/"},{"subject":"Физика","href":"/class-10/fizika/"},{"subject":"Химия","href":"/class-10/himiya/"},{"subject":"Немецкий язык","href":"/class-10/nemeckiy_yazik/"},{"subject":"Французский язык","href":"/class-10/francuzskiy_yazik/"},{"subject":"Биология","href":"/class-10/biologiya/"},{"subject":"История","href":"/class-10/istoriya/"},{"subject":"Информатика","href":"/class-10/informatika/"},{"subject":"ОБЖ","href":"/class-10/obj/"},{"subject":"География","href":"/class-10/geografiya/"},{"subject":"Литература","href":"/class-10/literatura/"},{"subject":"Обществознание","href":"/class-10/obshhestvoznanie/"},{"subject":"Испанский язык","href":"/class-10/spanish/"},{"subject":"Кубановедение","href":"/class-10/kubanovedeniye/"},{"subject":"Казахский язык","href":"/class-10/kazakhskiy_yazyk/"}]},{"heading":"11 класс","subjects":[{"subject":"Математика","href":"/class-11/matematika/"},{"subject":"Английский язык","href":"/class-11/english/"},{"subject":"Русский язык","href":"/class-11/russkii_yazik/"},{"subject":"Алгебра","href":"/class-11/algebra/"},{"subject":"Геометрия","href":"/class-11/geometria/"},{"subject":"Физика","href":"/class-11/fizika/"},{"subject":"Химия","href":"/class-11/himiya/"},{"subject":"Немецкий язык","href":"/class-11/nemeckiy_yazik/"},{"subject":"Французский язык","href":"/class-11/francuzskiy_yazik/"},{"subject":"Биология","href":"/class-11/biologiya/"},{"subject":"История","href":"/class-11/istoriya/"},{"subject":"Информатика","href":"/class-11/informatika/"},{"subject":"ОБЖ","href":"/class-11/obj/"},{"subject":"География","href":"/class-11/geografiya/"},{"subject":"Литература","href":"/class-11/literatura/"},{"subject":"Обществознание","href":"/class-11/obshhestvoznanie/"},{"subject":"Испанский язык","href":"/class-11/spanish/"},{"subject":"Казахский язык","href":"/class-11/kazakhskiy_yazyk/"}]}]
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
  function filteredLS(term) {
    var filteredObj = [];
    Object.keys(localStorage)

        .filter(key => key.includes(term))

        .map(function (key) {
            console.log(key)
            filteredObj.push({name:key.replace("subject.",""),href:localStorage.getItem(key)})
        });
    return filteredObj;
}
export default class Training extends Component{
    constructor(){
        super();
        this.state = {
            phase:0,
            visible:false,
            data:{
                class:null,
                preferred:filteredLS("subject.")
            },
            booksRes:null,
            booksSubject:null
        }
        this.addValue = this.addValue.bind(this)
        this.selectSubject = this.selectSubject.bind(this)
        this.nextPhase = this.nextPhase.bind(this)
    }
    selectSubject(href,subject){
        this.nextPhase(5)
        this.setState(produce(draft => {draft.booksSubject = subject}))
        fetch("https://yundu.co/api/getbooks?url="+href).then(res => res.json()).then((res)=>{
            this.setState(produce(draft => {draft.booksRes = res}))
        })
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
    addValue(href){
        localStorage.setItem("subject."+this.state.booksSubject,href)
        let nowState = JSON.parse(JSON.stringify(this.state))
        const foundIndex = nowState.data.preferred.findIndex(obj => obj.name === this.state.booksSubject);
        if(foundIndex > -1){
            nowState.data.preferred[foundIndex].href = href;
        }
        else{
            nowState.data.preferred.push({name:this.state.booksSubject,href})
        }
        this.setState(nowState)
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
                <h3 style={{marginBottom:8}}>Выбери свой класс:</h3>
                <Select onChange={(t)=>{this.setState(produce(draft => {draft.data.class = t.value}))}} classNamePrefix="react-select" placeholder={<p>Выбери из списка...</p>} options={options}/>
                <button onClick={()=>{this.nextPhase();localStorage.setItem("class",this.state.data.class);}} disabled={!this.state.data.class}>Далее</button>
                </Animated>
            )
        case 2:
            return(
                <Animated animationIn="fadeInUp" animationOut="fadeOutUp" duration={500} isVisible={this.state.visible}>
                <h2>Настроим предпочитаемые учебники?</h2>
                <div style={{display:'flex'}}>
                    <button className={styles.imgbutton} onClick={()=>{this.nextPhase(4)}}><img src={thumbsdown}/></button>
                    <button style={{marginLeft:10}} className={styles.imgbutton} onClick={()=>{this.nextPhase()}}><img src={thumbsup}/></button>
                </div>
                </Animated>
            )
        case 3:
            return(
                <Animated animationIn="fadeInUp" animationOut="fadeOutUp" duration={500} isVisible={this.state.visible}>
                <h3>Выбери предмет, а затем предпочитаемый учебник:</h3>
                <div className={styles.menu}>
                {data.filter(obj => obj.heading === this.state.data.class + " класс").map((obj,index) => {
                    return(
                        <List isExact={true} noDelete={true} preferred={this.state.data.preferred} noLink={true} obj={obj} indexVar={index} onClick={this.selectSubject}/>
                    )
                })}
                </div>
                <button onClick={()=>{this.nextPhase(4)}}>Продолжить</button>
                </Animated>
            )
        case 4:
            return(
                <Animated animationIn="fadeInUp" animationOut="fadeOutUp" duration={500} isVisible={this.state.visible}>
                <h2>Всё готово!<img className={styles.emoji} src={starstruck} alt="emoji"/></h2>
                <button onClick={()=>{
                    window.location.reload()
                }}>Завершить</button>
                </Animated>
            )
        case 5:
            return(<>
                <Animated animationIn="fadeInUp" animationOut="fadeOutUp" duration={500} isVisible={this.state.visible}>
                <h2 style={{marginTop:0}}>Выбери учебник:</h2>
                <div className={styles.labelscontainer}>
                {this.state.booksRes ? this.state.booksRes.map((obj,index) => {

return(
    <label onClick={()=>{this.addValue(obj.href)}} for={"book" + index}>
    <div className={styles.book}>
    <div><img src={`data:image/jpeg;base64,${obj.cover}`}/></div>
        
    <div>
        <h4>{obj.heading}</h4>
        {obj.subs.map(elem => {
            return <p>{elem}</p>
        })}
    </div>
    <div style={{marginLeft:13}}>
    <label className={styles.radiocontainer}>
        <input type="radio" id={"book" + index} value={obj.href} name="book"/>
  <span className={styles.checkmark}></span>
</label>
    </div>
    </div>
    </label>
)
})
                
                : <LoadingIcon color="var(--brand)" selfalign/>}</div>
                <div style={{width:'100%',height:90}}/>
                
                </Animated><div className={styles.fixed}><button onClick={()=>{
                    this.setState(produce(draft => {draft.booksRes = null;draft.booksSubject = null;}));this.nextPhase(3);
                }}>Продолжить</button></div></>
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