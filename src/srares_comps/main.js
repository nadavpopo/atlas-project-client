import React , {useEffect ,useState} from 'react';
import ItemState from './itemState';
import { doApiGet } from '../services/apiService';
function Main(props)
{
    let [state,setState] = useState(null);
    let [allStateArr,setAllStateArr] = useState([]);
    let [name , setName] = useState("israel");

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
        let url = "https://restcountries.eu/rest/v2/name/"+name+"?fullText=true"; 

        if(props.match)
        {
            if(props.match.params.name)
            {
                url = "https://restcountries.eu/rest/v2/name/"+props.match.params.name+"?fullText=true"; 
            }
            if(props.match.params.code)
            {
                url = "https://restcountries.eu/rest/v2/alpha/"+props.match.params.code; 
            }
        }

        doApiGet(url)
        .then(data =>
        {
            if(props.match.params.code)
            {
                setState(data);
            }
            else
            {
                setState(data[0]);
            }
        })
    },[props.match])

    return(
        <div className="container mt-4"> 
        {(state)? <ItemState item={state} allStateArr={allStateArr}/>:"Not found."}
    </div> 
    )
}

export default Main
