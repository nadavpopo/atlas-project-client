import React, { Component } from "react";
import { doApiGet } from "../services/services/apiService";
import PepoleItem from "./pepoleItem";
import "./pepole.css"; 



class Main extends Component {
    state = { pepole_ar: [] }

    componentWillMount() {
        let url = "https://randomuser.me/api/?results=10&seed=monkeys";
        doApiGet(url)
            .then(data => {
                this.setState({ pepole_ar: data.results })
            })
    }

    render() {
        return (
            <main className="container-fluid">
                <div className="row rowLink">
                    {this.state.pepole_ar.map(item => {
                        return (
                            <PepoleItem key={item.location.postcode} item={item} />
                        )
                    })}
                </div>
            </main>
        )
    }
}

export default Main;