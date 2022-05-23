import {useState,useEffect} from 'react';
import LoadingIcon from '../LoadingIcon'
import styles from './index.module.css';
import {Link} from 'react-router-dom'
export default function Book(){
    const [resData,setResData] = useState(null)

    const [backurl] = useState(decodeURI(window.location.href.split('backurl=')[1]?.split("&")[0]))
    
    const [title] = useState(decodeURI(window.location.href.split('title=')[1].split("&")[0]))
    useEffect(()=>{
        fetch("https://yundu.co/api/getbook?url="+window.location.pathname.split("book")[1]).then(res => res.json()).then((res)=>{
        if(!resData){
        setResData(res)
        
     document.title = res.info.heading + " | Yundu"
        }
        })
    },[])
    return(
        <>
        <Link to={backurl !== "undefined" && title !== "undefined" ? backurl + "?title=" + title : "/"}><button style={{marginTop:0}}>Назад</button></Link>
        <div className={styles.main}>
            {resData ? 
            <>
                   <div className={styles.book}>
                    <div><img src={`data:image/jpeg;base64,${resData.info.cover}`}/></div>
                    <div>
                        <h4>{resData.info.heading}</h4>
                        {resData.info.subs.map(elem => {
                            return <p>{elem}</p>
                        })}
                    </div>
                </div>
                {resData.premium ? 
                <p>Этот учебник отмечен как премиальный, от Yundu это не зависит.</p>
                : !resData.tasks[0].items ? <div className={styles.wrap}>{resData.tasks.map(obj => {
                    if(obj.items && !obj.items[0].items){
                        return(
                            <>
                            <h2>{obj.heading}</h2>
                            <div className={styles.wrap}>
                                {obj.items.map(elem => {
                                    return(
                                        <Link to={"/task"+elem.href + "?backurl="+window.location.pathname + "&title=" + resData.info.heading + "&backtitle=" + title + "&backurl2=" + backurl}><div className={styles.task}>
                                            <p>{elem.text}</p>
                                        </div></Link>
                                    )
                                })}
                                </div>
                            </>
                        )
                    }
                    else if(obj.items && obj.items[0].items){
                        
                                        return(
                                            <>
                            <h2>{obj.heading}</h2>
                                {obj.items.map(elem => {
                                    return(
                                        <>
                                        <h3>{elem.heading}</h3>
                                        <div className={styles.wrap}>
                                        {elem.items.map(element => {
                                            return(
                                        <Link to={"/task"+elem.href + "?backurl="+window.location.pathname + "&title=" + resData.info.heading + "&backtitle=" + title + "&backurl2=" + backurl}><div className={styles.task}>
                                            <p>{element.text}</p>
                                        </div></Link>
                                            )})}
                                            </div>
                                        </>
                                    )
                                        })}
                            </>
                                    )
                    }
                    else{
                        return(
                            <Link to={"/task"+obj.href + "?backurl="+window.location.pathname + "&title=" + resData.info.heading + "&backtitle=" + title + "&backurl2=" + backurl}><div className={styles.task}>
                                <p>{obj.text}</p>
                            </div></Link>
                        )
                    }
                })}</div> : resData.tasks.map(obj => {
                    if(obj.items && !obj.items[0].items){
                        return(
                            <>
                            <h2>{obj.heading}</h2>
                            <div className={styles.wrap}>
                                {obj.items.map(elem => {
                                    return(
                                        <Link to={"/task"+elem.href + "?backurl="+window.location.pathname + "&title=" + resData.info.heading + "&backtitle=" + title + "&backurl2=" + backurl}><div className={styles.task}>
                                            <p>{elem.text}</p>
                                        </div></Link>
                                    )
                                })}
                                </div>
                            </>
                        )
                    }
                    else if(obj.items && obj.items[0].items){
                        
                                        return(
                                            <>
                            <h2>{obj.heading}</h2>
                                {obj.items.map(elem => {
                                    return(
                                        <>
                                        <h3>{elem.heading}</h3>
                                        <div className={styles.wrap}>
                                        {elem.items.map(element => {
                                            return(
                                        <Link to={"/task"+elem.href + "?backurl="+window.location.pathname + "&title=" + resData.info.heading + "&backtitle=" + title + "&backurl2=" + backurl}><div className={styles.task}>
                                            <p>{element.text}</p>
                                        </div></Link>
                                            )})}
                                            </div>
                                        </>
                                    )
                                        })}
                            </>
                                    )
                    }
                    else{
                        return(
                            <Link to={"/task"+obj.href + "?backurl="+window.location.pathname + "&title=" + resData.info.heading + "&backtitle=" + title + "&backurl2=" + backurl}><div className={styles.task}>
                                <p>{obj.text}</p>
                            </div></Link>
                        )
                    }
                })}
            </> : <LoadingIcon color="var(--brand)" selfalign/>}
            </div>
        </>
    )
}