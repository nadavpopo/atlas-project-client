import React , {useEffect ,useState} from 'react';
import ItemState from './itemState';
import { doApiGet } from '../services/apiService';
function Main(props)
{
    let [state_ar,setState] = useState([]);
    let [allStateArr,setAllStateArr] = useState([]);

    useEffect(()=>
    {
        let url="https://restcountries.eu/rest/v2/all";
        doApiGet(url)
        .then(data=>
        {
            setAllStateArr(data);
        })
    },[])
    

    useEffect(() =>
    {
        let url = "https://restcountries.eu/rest/v2/name/"+props.name+"?fullText=true" 

        doApiGet(url)
        .then(data =>
        {
            setState(data);
        })
    },[props.name])

    return(
        <div className="container mt-4"> 
           {(state_ar.length>0)? state_ar.map(item =>
                {
                    return(
                        <ItemState item={item} key={item.callingCodes[0]} allStateArr={allStateArr}  setName={props.setName}/>
                    )
            }) :"Not found"}
        </div> 
    )
}

export default Main
