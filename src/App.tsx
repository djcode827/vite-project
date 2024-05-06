import { Fragment } from "react";
import './App.css';


function App() {

    return (

       <Fragment>
         <h1>Customer Data</h1>
         <hr />
            <div className="card" style={{width: "18rem"}}>
                <img src="https://miro.medium.com/v2/resize:fit:554/0*ABxeryEplC7w15OK.jpg" className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
            </div>
       </Fragment>
    );

}

export default App;
