import {Link} from 'react-router-dom'
import Select from 'react-select'
import styles from './index.module.css'
import LoadingIcon from '../LoadingIcon'
import List from './List'
import editemoji from '../edit.png'
import {useState,useEffect } from 'react'
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
            filteredObj.push({name:key.replace("subject.",""),href:localStorage.getItem(key)})
        });
    return filteredObj;
}
export default function Home(){
    const [res,setRes] = useState(null)
    useEffect(()=>{
      document.title = "Главная | Yundu"
        const data = [{"heading":"1 класс","subjects":[{"subject":"Математика","href":"/class-1/matematika/"},{"subject":"Английский язык","href":"/class-1/english/"},{"subject":"Русский язык","href":"/class-1/russkii_yazik/"},{"subject":"Информатика","href":"/class-1/informatika/"},{"subject":"Музыка","href":"/class-1/muzyka/"},{"subject":"Литература","href":"/class-1/literatura/"},{"subject":"Окружающий мир","href":"/class-1/okruzhajushhij_mir/"},{"subject":"Технология","href":"/class-1/tekhnologiya/"},{"subject":"Мир природы и человека","href":"/class-1/mir_prirody_i_cheloveka/"}]},{"heading":"2 класс","subjects":[{"subject":"Математика","href":"/class-2/matematika/"},{"subject":"Английский язык","href":"/class-2/english/"},{"subject":"Русский язык","href":"/class-2/russkii_yazik/"},{"subject":"Немецкий язык","href":"/class-2/nemeckiy_yazik/"},{"subject":"Французский язык","href":"/class-2/francuzskiy_yazik/"},{"subject":"Информатика","href":"/class-2/informatika/"},{"subject":"Музыка","href":"/class-2/muzyka/"},{"subject":"Литература","href":"/class-2/literatura/"},{"subject":"Окружающий мир","href":"/class-2/okruzhajushhij_mir/"},{"subject":"Технология","href":"/class-2/tekhnologiya/"},{"subject":"Испанский язык","href":"/class-2/spanish/"},{"subject":"Казахский язык","href":"/class-2/kazakhskiy_yazyk/"},{"subject":"Мир природы и человека","href":"/class-2/mir_prirody_i_cheloveka/"}]},{"heading":"3 класс","subjects":[{"subject":"Математика","href":"/class-3/matematika/"},{"subject":"Английский язык","href":"/class-3/english/"},{"subject":"Русский язык","href":"/class-3/russkii_yazik/"},{"subject":"Немецкий язык","href":"/class-3/nemeckiy_yazik/"},{"subject":"Французский язык","href":"/class-3/francuzskiy_yazik/"},{"subject":"Информатика","href":"/class-3/informatika/"},{"subject":"Музыка","href":"/class-3/muzyka/"},{"subject":"Литература","href":"/class-3/literatura/"},{"subject":"Окружающий мир","href":"/class-3/okruzhajushhij_mir/"},{"subject":"Технология","href":"/class-3/tekhnologiya/"},{"subject":"Испанский язык","href":"/class-3/spanish/"},{"subject":"Казахский язык","href":"/class-3/kazakhskiy_yazyk/"},{"subject":"Мир природы и человека","href":"/class-3/mir_prirody_i_cheloveka/"}]},{"heading":"4 класс","subjects":[{"subject":"Математика","href":"/class-4/matematika/"},{"subject":"Английский язык","href":"/class-4/english/"},{"subject":"Русский язык","href":"/class-4/russkii_yazik/"},{"subject":"Немецкий язык","href":"/class-4/nemeckiy_yazik/"},{"subject":"Французский язык","href":"/class-4/francuzskiy_yazik/"},{"subject":"Информатика","href":"/class-4/informatika/"},{"subject":"Музыка","href":"/class-4/muzyka/"},{"subject":"Литература","href":"/class-4/literatura/"},{"subject":"Окружающий мир","href":"/class-4/okruzhajushhij_mir/"},{"subject":"Технология","href":"/class-4/tekhnologiya/"},{"subject":"Испанский язык","href":"/class-4/spanish/"},{"subject":"Казахский язык","href":"/class-4/kazakhskiy_yazyk/"},{"subject":"Мир природы и человека","href":"/class-4/mir_prirody_i_cheloveka/"}]},{"heading":"5 класс","subjects":[{"subject":"Математика","href":"/class-5/matematika/"},{"subject":"Английский язык","href":"/class-5/english/"},{"subject":"Русский язык","href":"/class-5/russkii_yazik/"},{"subject":"Физика","href":"/class-5/fizika/"},{"subject":"Немецкий язык","href":"/class-5/nemeckiy_yazik/"},{"subject":"Украинский язык","href":"/class-5/ukrainskiy_yazik/"},{"subject":"Французский язык","href":"/class-5/francuzskiy_yazik/"},{"subject":"Биология","href":"/class-5/biologiya/"},{"subject":"История","href":"/class-5/istoriya/"},{"subject":"Информатика","href":"/class-5/informatika/"},{"subject":"ОБЖ","href":"/class-5/obj/"},{"subject":"География","href":"/class-5/geografiya/"},{"subject":"Природоведение","href":"/class-5/prirodovedenie/"},{"subject":"Музыка","href":"/class-5/muzyka/"},{"subject":"Литература","href":"/class-5/literatura/"},{"subject":"Обществознание","href":"/class-5/obshhestvoznanie/"},{"subject":"Технология","href":"/class-5/tekhnologiya/"},{"subject":"Естествознание","href":"/class-5/estestvoznanie/"},{"subject":"Испанский язык","href":"/class-5/spanish/"},{"subject":"Искусство","href":"/class-5/iskusstvo/"},{"subject":"Китайский язык","href":"/class-5/kitayskiy_yazyk/"},{"subject":"Кубановедение","href":"/class-5/kubanovedeniye/"},{"subject":"Казахский язык","href":"/class-5/kazakhskiy_yazyk/"}]},{"heading":"6 класс","subjects":[{"subject":"Математика","href":"/class-6/matematika/"},{"subject":"Английский язык","href":"/class-6/english/"},{"subject":"Русский язык","href":"/class-6/russkii_yazik/"},{"subject":"Физика","href":"/class-6/fizika/"},{"subject":"Немецкий язык","href":"/class-6/nemeckiy_yazik/"},{"subject":"Украинский язык","href":"/class-6/ukrainskiy_yazik/"},{"subject":"Французский язык","href":"/class-6/francuzskiy_yazik/"},{"subject":"Биология","href":"/class-6/biologiya/"},{"subject":"История","href":"/class-6/istoriya/"},{"subject":"Информатика","href":"/class-6/informatika/"},{"subject":"ОБЖ","href":"/class-6/obj/"},{"subject":"География","href":"/class-6/geografiya/"},{"subject":"Природоведение","href":"/class-6/prirodovedenie/"},{"subject":"Музыка","href":"/class-6/muzyka/"},{"subject":"Литература","href":"/class-6/literatura/"},{"subject":"Обществознание","href":"/class-6/obshhestvoznanie/"},{"subject":"Экология","href":"/class-6/ekologiya/"},{"subject":"Технология","href":"/class-6/tekhnologiya/"},{"subject":"Естествознание","href":"/class-6/estestvoznanie/"},{"subject":"Испанский язык","href":"/class-6/spanish/"},{"subject":"Искусство","href":"/class-6/iskusstvo/"},{"subject":"Китайский язык","href":"/class-6/kitayskiy_yazyk/"},{"subject":"Кубановедение","href":"/class-6/kubanovedeniye/"},{"subject":"Казахский язык","href":"/class-6/kazakhskiy_yazyk/"}]},{"heading":"7 класс","subjects":[{"subject":"Математика","href":"/class-7/matematika/"},{"subject":"Английский язык","href":"/class-7/english/"},{"subject":"Русский язык","href":"/class-7/russkii_yazik/"},{"subject":"Алгебра","href":"/class-7/algebra/"},{"subject":"Геометрия","href":"/class-7/geometria/"},{"subject":"Физика","href":"/class-7/fizika/"},{"subject":"Химия","href":"/class-7/himiya/"},{"subject":"Немецкий язык","href":"/class-7/nemeckiy_yazik/"},{"subject":"Украинский язык","href":"/class-7/ukrainskiy_yazik/"},{"subject":"Французский язык","href":"/class-7/francuzskiy_yazik/"},{"subject":"Биология","href":"/class-7/biologiya/"},{"subject":"История","href":"/class-7/istoriya/"},{"subject":"Информатика","href":"/class-7/informatika/"},{"subject":"ОБЖ","href":"/class-7/obj/"},{"subject":"География","href":"/class-7/geografiya/"},{"subject":"Музыка","href":"/class-7/muzyka/"},{"subject":"Литература","href":"/class-7/literatura/"},{"subject":"Обществознание","href":"/class-7/obshhestvoznanie/"},{"subject":"Технология","href":"/class-7/tekhnologiya/"},{"subject":"Испанский язык","href":"/class-7/spanish/"},{"subject":"Искусство","href":"/class-7/iskusstvo/"},{"subject":"Китайский язык","href":"/class-7/kitayskiy_yazyk/"},{"subject":"Кубановедение","href":"/class-7/kubanovedeniye/"},{"subject":"Казахский язык","href":"/class-7/kazakhskiy_yazyk/"}]},{"heading":"8 класс","subjects":[{"subject":"Математика","href":"/class-8/matematika/"},{"subject":"Английский язык","href":"/class-8/english/"},{"subject":"Русский язык","href":"/class-8/russkii_yazik/"},{"subject":"Алгебра","href":"/class-8/algebra/"},{"subject":"Геометрия","href":"/class-8/geometria/"},{"subject":"Физика","href":"/class-8/fizika/"},{"subject":"Химия","href":"/class-8/himiya/"},{"subject":"Немецкий язык","href":"/class-8/nemeckiy_yazik/"},{"subject":"Французский язык","href":"/class-8/francuzskiy_yazik/"},{"subject":"Биология","href":"/class-8/biologiya/"},{"subject":"История","href":"/class-8/istoriya/"},{"subject":"Информатика","href":"/class-8/informatika/"},{"subject":"ОБЖ","href":"/class-8/obj/"},{"subject":"География","href":"/class-8/geografiya/"},{"subject":"Литература","href":"/class-8/literatura/"},{"subject":"Обществознание","href":"/class-8/obshhestvoznanie/"},{"subject":"Экология","href":"/class-8/ekologiya/"},{"subject":"Технология","href":"/class-8/tekhnologiya/"},{"subject":"Испанский язык","href":"/class-8/spanish/"},{"subject":"Искусство","href":"/class-8/iskusstvo/"},{"subject":"Кубановедение","href":"/class-8/kubanovedeniye/"},{"subject":"Казахский язык","href":"/class-8/kazakhskiy_yazyk/"}]},{"heading":"9 класс","subjects":[{"subject":"Математика","href":"/class-9/matematika/"},{"subject":"Английский язык","href":"/class-9/english/"},{"subject":"Русский язык","href":"/class-9/russkii_yazik/"},{"subject":"Алгебра","href":"/class-9/algebra/"},{"subject":"Геометрия","href":"/class-9/geometria/"},{"subject":"Физика","href":"/class-9/fizika/"},{"subject":"Химия","href":"/class-9/himiya/"},{"subject":"Немецкий язык","href":"/class-9/nemeckiy_yazik/"},{"subject":"Французский язык","href":"/class-9/francuzskiy_yazik/"},{"subject":"Биология","href":"/class-9/biologiya/"},{"subject":"История","href":"/class-9/istoriya/"},{"subject":"Информатика","href":"/class-9/informatika/"},{"subject":"ОБЖ","href":"/class-9/obj/"},{"subject":"География","href":"/class-9/geografiya/"},{"subject":"Литература","href":"/class-9/literatura/"},{"subject":"Обществознание","href":"/class-9/obshhestvoznanie/"},{"subject":"Черчение","href":"/class-9/cherchenie/"},{"subject":"Технология","href":"/class-9/tekhnologiya/"},{"subject":"Испанский язык","href":"/class-9/spanish/"},{"subject":"Искусство","href":"/class-9/iskusstvo/"},{"subject":"Кубановедение","href":"/class-9/kubanovedeniye/"},{"subject":"Казахский язык","href":"/class-9/kazakhskiy_yazyk/"}]},{"heading":"10 класс","subjects":[{"subject":"Математика","href":"/class-10/matematika/"},{"subject":"Английский язык","href":"/class-10/english/"},{"subject":"Русский язык","href":"/class-10/russkii_yazik/"},{"subject":"Алгебра","href":"/class-10/algebra/"},{"subject":"Геометрия","href":"/class-10/geometria/"},{"subject":"Физика","href":"/class-10/fizika/"},{"subject":"Химия","href":"/class-10/himiya/"},{"subject":"Немецкий язык","href":"/class-10/nemeckiy_yazik/"},{"subject":"Французский язык","href":"/class-10/francuzskiy_yazik/"},{"subject":"Биология","href":"/class-10/biologiya/"},{"subject":"История","href":"/class-10/istoriya/"},{"subject":"Информатика","href":"/class-10/informatika/"},{"subject":"ОБЖ","href":"/class-10/obj/"},{"subject":"География","href":"/class-10/geografiya/"},{"subject":"Литература","href":"/class-10/literatura/"},{"subject":"Обществознание","href":"/class-10/obshhestvoznanie/"},{"subject":"Испанский язык","href":"/class-10/spanish/"},{"subject":"Кубановедение","href":"/class-10/kubanovedeniye/"},{"subject":"Казахский язык","href":"/class-10/kazakhskiy_yazyk/"}]},{"heading":"11 класс","subjects":[{"subject":"Математика","href":"/class-11/matematika/"},{"subject":"Английский язык","href":"/class-11/english/"},{"subject":"Русский язык","href":"/class-11/russkii_yazik/"},{"subject":"Алгебра","href":"/class-11/algebra/"},{"subject":"Геометрия","href":"/class-11/geometria/"},{"subject":"Физика","href":"/class-11/fizika/"},{"subject":"Химия","href":"/class-11/himiya/"},{"subject":"Немецкий язык","href":"/class-11/nemeckiy_yazik/"},{"subject":"Французский язык","href":"/class-11/francuzskiy_yazik/"},{"subject":"Биология","href":"/class-11/biologiya/"},{"subject":"История","href":"/class-11/istoriya/"},{"subject":"Информатика","href":"/class-11/informatika/"},{"subject":"ОБЖ","href":"/class-11/obj/"},{"subject":"География","href":"/class-11/geografiya/"},{"subject":"Литература","href":"/class-11/literatura/"},{"subject":"Обществознание","href":"/class-11/obshhestvoznanie/"},{"subject":"Испанский язык","href":"/class-11/spanish/"},{"subject":"Казахский язык","href":"/class-11/kazakhskiy_yazyk/"}]}]
        const found = data.filter(obj => obj.heading === localStorage.getItem("class") + " класс");
        setRes(found)
    },[])
    let preferred;
    if(res){
    preferred = filteredLS("subject.");
    let sorted1 = JSON.parse(JSON.stringify(res[0].subjects));
    sorted1 = sorted1.map(obj => obj.subject)
    console.log(res)
    console.log(preferred)
    preferred.sort(function(a, b){  
        return sorted1.indexOf(a.name) - sorted1.indexOf(b.name);
      });
    }
    
    return(
        <>
            {res ? 
            <>
            <p style={{display:'flex',marginTop:10}}>Я в <Select onChange={(t)=>{localStorage.setItem("class",t.value);preferred.forEach(obj => {localStorage.removeItem("subject."+obj.name)});window.location.reload()}} classNamePrefix="react-select2" defaultValue={{value:localStorage.getItem("class"),label:localStorage.getItem("class")}} placeholder={<p>1</p>} style={{maxWidth:40,padding:0,margin:0,maxHeight:20}} options={options}/> классе.</p>
            
               
            {preferred.length > 0 ? 
            <> <h3 style={{margin:0,display:'flex'}}>Предпочитаемые учебники<Link to="/preferred"><div className={styles.roundbutton}><img src={editemoji}/></div></Link></h3><div style={{marginBottom:0}} className={styles.menu}>
                <List isExact={true} isPreferred isHome obj={{heading:"",subjects:preferred.map(obj2 => {return {href:obj2.href,subject:obj2.name}})}}/>
                </div>
            </> : 
            <Link to="/preferred"><button style={{marginTop:0}}>Настроить предпочтения</button></Link>
            }
           
            <h3 style={{margin:0,marginTop:5}}>Все предметы</h3>
            <div className={styles.menu}>
                {res.map((obj,index) => {
                    return(
                        <List isExact={res.length === 1} preferred={preferred} obj={obj} indexVar={index}/>
                    )
                })}
            </div>
            </>
            : <LoadingIcon selfalign color="var(--brand)"/>}
        </>
    )
}