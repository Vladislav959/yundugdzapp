import {useState,useEffect} from 'react';
import LoadingIcon from '../LoadingIcon'
import styles from './index.module.css';
import {Link} from 'react-router-dom'
export default function Task(){
    const [resData,setResData] = useState(null)

    const [backurl] = useState(decodeURI(window.location.href.split('backurl=')[1].split("&")[0]))
    
    const [title] = useState(decodeURI(window.location.href.split('title=')[1].split("&")[0]))
    useEffect(()=>{
        
        fetch("https://yundu.co/api/gettask?url="+window.location.pathname.split("task")[1]).then(res => res.json()).then((res)=>{
        if(!resData){
        setResData(res)
        document.title = (res?.info.heading.replace(title,"").trim() || resData.info.heading) + " | Yundu"
        }
        })
    },[])
    return(
        <>
        <Link to={backurl + "?title="+decodeURI(window.location.href.split('&backtitle=')[1]) + "&backurl=" + decodeURI(window.location.href.split('&backurl2=')[1])}><button style={{marginTop:0}}>Назад</button></Link>
        <div className={styles.main}>
            {resData ? 
            <>
                   <div className={styles.book}>
                    <div><img src={`data:image/jpeg;base64,${resData.info.cover}`}/></div>
                    <div>
                        <h4>{resData?.info.heading.replace(title,"").trim() || resData.info.heading}</h4>
                        {resData.info.subs.map(elem => {
                            return <p>{elem}</p>
                        })}
                    </div>
                </div>
                <div className={styles.images}>
                    {resData.images.map(elem => {
                        return(
                            <div>
                            <img src={`data:image/jpeg;base64,${elem}`}/>
                            </div>
                        )
                    })}
                </div>
            </> : <LoadingIcon color="var(--brand)" selfalign/>}
            </div>
        </>
    )
}