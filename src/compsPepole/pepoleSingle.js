import React, { Component } from "react";
import { doApiGet } from "../services/services/apiService";
import { Link } from "react-router-dom"

class PepoleSingle extends Component {
    state = { pepole_ar: {} }

    componentWillMount() {

        let randId = this.props.match.params.id;
        let url = "https://randomuser.me/api/?results=10&seed=monkeys";
        doApiGet(url)
            .then(data => {
               
               
                let singleData = data.results.filter(item => {
                    console.log("item.location.postcode", item.location.postcode);

                    return (item.location.postcode == randId)
                })
                this.setState({ pepole_ar: singleData[0] })
                console.log("singleData", singleData[0]);
            })
    }

    render() {
        console.log("render",this.state.pepole_ar);
        
        let item = this.state.pepole_ar
        console.log("item",item.name);
        
        return (
            <div className="container-fluid mt-3 ">
                <div className="container d-flex justify-content-center align-items-center ">
                        {(item.name) ? 
                        (
                        <div className="col-lg-12 border border-info p-3 d-flex align-items-center flex-column ">
                            <div className="row">
                                <img src={item.picture.large} className="float-left rounded-circle mr-5"/>
                                <div className="col">
                                    <h2>{item.name.title} {item.name.first} {item.name.last}</h2>
                                    <h4>Age: {item.dob.age}</h4>
                                </div>
                            </div>
                            <div className="py-5">
                                <h4>Email: {item.email}</h4>
                                <h4 className="py-2">Phone: {item.phone}</h4>
                                <h4>Cell: {item.cell}</h4>
                            </div>
                            <Link to="/" className=" btn btn-primary w-50">Back</Link>
                        </div>

                        ):"loading"
                        
                    
                    } 
                    
                </div>
            </div>
        )
    }
}










export default PepoleSingle;

// import React, { Component } from "react";
// import { doApiGet } from "../services/services";
// import { Link } from "react-router-dom"
// import "../css_comps/random.css";

// class RandomSingle extends Component {

//   state = { randomS: {}, name: " ", pic: " ", age: "", address: "" };
//   componentDidMount() {

//     this.props.updateText("Personal Details");

//     let randId = this.props.match.params.id;
//     let url = "https://randomuser.me/api/?results=10&seed=monkeys";
//     doApiGet(url)
//       .then(data => {

//         console.log("RandomS_ar", data.results);

//         let singleData = data.results.filter(item => {
//           console.log("item.location.postcode", item.location.postcode);


//           return (item.location.postcode == randId)
//         })
//         console.log("singleData", singleData);

//         let fullname = singleData[0].name.title + " " + singleData[0].name.first + " " + singleData[0].name.last;
//         let picUrl = singleData[0].picture.large; 

//         let addressUrl = singleData[0].location.country;

//         // let addressUrl =singleData[0].location.street.number + " "+ singleData[0].location.street.name +" St, "+"," +singleData[0].location.city + ", " + singleData[0].location.state + ", " + singleData[0].location.country;
        

//         // let addressUrl =singleData[0].location.city + ", " + singleData[0].location.country;

//         let ageUrl = singleData[0].dob.age;

//         this.setState({ randomS: singleData[0], name: fullname, pic: picUrl, age: ageUrl, address: addressUrl })

//       })

//   }
//   render() {
//     let single = this.state.randomS;
//     return (
//       <div className="container-fluid mt-3 ">
//         <div className="container d-flex justify-content-center align-items-center ">
//           {(single.name) ?

//             (
//               <div className="col-lg-6 backg border border-info p-3 d-flex align-items-center flex-column ">
//                 <h3 >{this.state.name}</h3>
//                 <img src={this.state.pic} className="w-50 mr-2  " />
//                 <p >Hello i am {this.state.age} years old,I live in <br /><strong >Address: </strong>{this.state.address}.<br />You can contact me 24/7 at:<br /><strong>Phone: </strong>{single.phone}<br /><strong>Cell: </strong> {single.cell}<br /><strong>Email: </strong> {single.email}</p>
//                 <Link to="/" className=" btn btn-primary w-50">Back to list</Link>
//               </div>
//             ) : "loading...."

//           }
//         </div>

//       </div>

//     )
//   }
// }

// export default RandomSingle