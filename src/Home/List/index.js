import styles from '../index.module.css'
import {useState} from 'react'
import {Link} from 'react-router-dom'
import technologyemoji from '../../technology.png'
import chinese from '../../chinese.png'
import math from '../../math.png';
import english from '../../english.png';
import music from '../../music.png'
import russian from '../../russian.png';
import algebra from '../../algebra.png';
import geometry from '../../geometry.png';
import physics from '../../physics.png';
import chemistry from '../../chemistry.png';
import germanian from '../../germanian.png';
import french from '../../french.png';
import biology from '../../biology.png';
import history from '../../history.png';
import informationtech from '../../informationtech.png';
import objEmoji from '../../obj.png';
import geography from '../../geography.png';
import literature from '../../literature.png';
import society from '../../society.png'
import ecology from '../../ecology.png'
import art from '../../art.png'
import spanish from '../../spanish.png'
import kazah from '../../kazah.png'
export default function List(props){
    const [closed,setClosed] = useState(true)
    if(props.isExact){
        return(
                <ul className={styles.submenu} style={{marginBottom:props.isHome ? 5 : 'auto'}}>
                {props.obj.subjects/*.filter((el) => {
                    if(props.preferred && props.preferred.length > 0 && !props.noDelete){
                        return props.preferred.every((f) => {
                            console.log(f.name !== el.subject);
    return f.name !== el.subject;
  });
                    }
                    else{
                        return true;
                    }
  
})*/.map(elem => {
                    let img;
                    switch(true){
                        case elem.subject.includes("Математика"):
                            img = math;
                            break;
                        case elem.subject.includes("Английский язык"):
                            img = english;
                            break;
                        case elem.subject.includes("Русский язык"):
                            img = russian;
                            break;
                        case elem.subject.includes("Алгебра"):
                            img = algebra;
                            break;
                        case elem.subject.includes("Геометрия"):
                            img = geometry;
                            break;
                        case elem.subject.includes("Физика"):
                            img = physics;
                            break;
                        case elem.subject.includes("Химия"):
                            img = chemistry;
                            break;
                        case elem.subject.includes("Немецкий язык"):
                            img = germanian;
                            break;
                        case elem.subject.includes("Французский язык"):
                            img = french;
                            break;
                        case elem.subject.includes("Китайский язык"):
                            img = chinese;
                            break;
                        case elem.subject.includes("Биология"):
                            img = biology;
                            break;
                        case elem.subject.includes("История"):
                            img = history;
                            break;
                        case elem.subject.includes("Информатика"):
                            img = informationtech;
                            break;
                        case elem.subject.includes("ОБЖ"):
                            img = objEmoji;
                            break;
                        case elem.subject.includes("География") || elem.subject.includes("Окружающий мир"):
                            img = geography;
                            break;
                        case elem.subject.includes("Литература"):
                            img = literature;
                            break;
                        case elem.subject.includes("Обществознание"):
                            img = society;
                            break;
                        case elem.subject.includes("Экология"):
                            img = ecology;
                            break;
                        case elem.subject.includes("Испанский язык"):
                            img = spanish;
                            break;
                        case elem.subject.includes("Искусство"):
                            img = art;
                            break;
                        case elem.subject.includes("Технология"):
                            img = technologyemoji;
                            break;
                        case elem.subject.includes("Казахский язык"):
                            img = kazah;
                            break;
                        case elem.subject.includes("Музыка"):
                            img = music;
                            break;
                        default:
                            img = null
                    }
                    if(props.noLink){
                        return(
                    <li style={{cursor:'pointer',margin:'7px 0',color:props.preferred.find(obj => obj.name === elem.subject) ? 'var(--brand)' :"initial"}} onClick={()=>{props.onClick(elem.href,elem.subject)}}>{elem.subject}{img ? <img className={styles.emoji} src={img}/> : null}</li>
                    )
                    }
                    else{
                     return(
                    <li><Link to={`/book${props.isPreferred ? "" : "s"}${elem.href}?title=${elem.subject}, ${localStorage.getItem("class")} класс`}>{elem.subject}{img ? <img className={styles.emoji} src={img}/> :null}</Link></li>
                    )   
                    }
                    
                    })}
                </ul>
        )
    }
    else{
       
    return(
        <div className={styles.row} onClick={()=>{setClosed(!closed)}}>
            <div className={styles.heading}><p>{props.obj.heading}</p>
            </div>
            <ul className={styles.submenu + (closed ? " " + styles.closed : "")}>
            {props.obj.subjects.map(elem => {
                return(
                    <li><Link to={`/books/${elem.href}`}>{elem.subject}</Link></li>
                )
                })}
            </ul>
        </div>
    ) 
    }
}