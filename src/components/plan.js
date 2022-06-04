export default function Plan(props){
        return <>
           <div className="input-group mb-3">
                <li className="shadow-lg p-3 mb-3 me-5 bg-body rounded ">{props.value}</li>
                
                <div className="input-group-append">
                    <button className="btn btn-danger btn-outline-primary p-3 mb-1 " type="button" 
                       onClick={ () => {props.sendData(props.id)}}>X</button>
                </div>
            </div>
        </>
}
