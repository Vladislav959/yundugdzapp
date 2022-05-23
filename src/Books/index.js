import {useState,useEffect} from 'react';
import LoadingIcon from '../LoadingIcon'
import styles from './index.module.css';
import {Link} from 'react-router-dom'
export default function Books(){
    const [resData,setResData] = useState(null)
    const [title] = useState(decodeURI(window.location.href.split('title=')[1].split("&")[0]))

    useEffect(()=>{
     document.title = title + " | Yundu"
        fetch("https://yundu.co/api/getbooks?url="+window.location.pathname.split("books")[1]).then(res => res.json()).then((res)=>{
        if(!resData){
            
        setResData(res)
        }
        })
    },[])
    return(
        <>
        <Link to="/"><button style={{marginTop:0}}>Назад</button></Link>
        <h2 style={{marginTop:5}}>{title}</h2>
            {resData ? resData.map(obj => {

                return(
                    <Link to={"/book"+obj.href + "?backurl=" + window.location.pathname + "&title=" + title}><div className={styles.book}>
                    <div><img src={`data:image/jpeg;base64,${obj.cover}`}/></div>
                        
                    <div>
                        <h4>{obj.heading}</h4>
                        {obj.subs.map(elem => {
                            return <p>{elem}</p>
                        })}
                    </div>
                    </div></Link>
                )
            }) : <LoadingIcon color="var(--brand)" selfalign/>}
        </>
    )
}