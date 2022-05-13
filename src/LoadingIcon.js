export default function LoadingIcon(props){
    return(
        <>
        {props.selfalign ? 
        <div style={{display:'flex',marginTop:10,width:'100%',justifyContent: 'center',alignItems: 'center'}}>
        <svg style={props.styles} width="38" height="38" viewBox="0 0 42 42" xmlns="http://www.w3.org/2000/svg" stroke={props.color}>
    <g fill="none" fillRule="evenodd">
        <g xmlns="http://www.w3.org/2000/svg" transform="translate(3 3)" strokeWidth="5">
            <circle strokeOpacity=".5" cx="18" cy="18" r="18"/>
            <path d="M36 18c0-9.94-8.06-18-18-18">
                <animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="0.5s" repeatCount="indefinite"/>
            </path>
        </g>
    </g>
</svg>
        </div>
        : 
        <svg style={props.styles} width="38" height="38" viewBox="0 0 42 42" xmlns="http://www.w3.org/2000/svg" stroke={props.color}>
    <g fill="none" fillRule="evenodd">
        <g xmlns="http://www.w3.org/2000/svg" transform="translate(3 3)" strokeWidth="5">
            <circle strokeOpacity=".5" cx="18" cy="18" r="18"/>
            <path d="M36 18c0-9.94-8.06-18-18-18">
                <animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="0.5s" repeatCount="indefinite"/>
            </path>
        </g>
    </g>
</svg>
        }
        </>
    )
}