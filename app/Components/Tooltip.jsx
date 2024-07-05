

export default function Tooltip({enabled, tooltip}){
    return(
        <div className={enabled ? 'tooltip shown' : 'tooltip hidden'}>
            <h1>{tooltip}</h1>
        </div>   
    )
}