import React from 'react';
import { Link } from 'react-router-dom';
import MapApp from './map';
function ItemState(props)
{
    let state = props.item;
    let borders = state.borders;
    let allStateArr = props.allStateArr;    
    let temp_ar = allStateArr.filter(item=>
    {
        return(borders.indexOf(item.alpha3Code)>-1)
    })

    return(
        <div className="col">
            <div className="d-flex justify-content-around">
            <div className="pic" style={{ backgroundImage: `url(${state.flag})` }}></div>
            <div>
                <h4>{state.name}</h4>
                <div>Pepole: {state.population}</div>
                <div>Region: {state.region}</div>
                <div>Lenguages: {state.languages[0].iso639_2}, {state.languages[0].name}</div>
                <div>Coin: {state.currencies[0].code}, {state.currencies[0].name}</div>
                <div>Capitel: {state.capital}</div>
            </div>
            <div className="row">
                <div className="card text-center">
                    <h5>State with borders:</h5>
                    {temp_ar.map((item,i)=>
                    {
                        return(
                        <Link onClick={()=>props.setName(item.name)} className="btn btn-light" to={"/"+item.name}>{item.name}</Link>
                        )        
                    })}
                </div>
            </div>
        </div>
        <MapApp latlng={state.latlng}/>
    </div>       
    )
}

export default ItemState
