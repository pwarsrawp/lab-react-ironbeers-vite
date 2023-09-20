import { Link } from "react-router-dom";
import beers from "../assets/beers.png";
import randomBeer from "../assets/random-beer.png";
import newBeer from "../assets/new-beer.png";


function HomePage() { 
    return (
    <>
       
        <div className="sections">
            <div className="row_wrap">
                <Link to="/beers"> 
                        <img src={beers} className="menu_image"/>
                        <span className="menu_text">Beers</span>
                </Link>   
                <p>Phasellus vulputate consequat blandit. Suspendisse suscipit orci facilisis nunc consectetur, 
                    vitae malesuada lectus convallis. Vestibulum facilisis scelerisque libero, in viverra sem viverra at. 
                    Aliquam vitae nibh vel ex pharetra luctus. Mauris interdum est ante, id efficitur eros elementum ut. Praesent ultricies turpis purus, 
                    quis lacinia sapien aliquet ac.</p>
            </div>
            <div className="row_wrap">
                    <Link to="/random-beer">
                        <img src={randomBeer} className="menu_image"/>
                        <span className="menu_text">Random Beer </span>
                    </Link>     
                    <p>Phasellus vulputate consequat blandit. Suspendisse suscipit orci facilisis nunc consectetur, 
                        vitae malesuada lectus convallis. Vestibulum facilisis scelerisque libero, in viverra sem viverra at. 
                        Aliquam vitae nibh vel ex pharetra luctus. Mauris interdum est ante, id efficitur eros elementum ut. Praesent ultricies turpis purus, 
                        quis lacinia sapien aliquet ac.</p>
            </div>
            <div className="row_wrap">
                <Link to="/new-beer"> 
                    <img src={newBeer} className="menu_image"/>
                    <span className="menu_text">New Beer </span>
                </Link> 
                <p>Phasellus vulputate consequat blandit. Suspendisse suscipit orci facilisis nunc consectetur, 
                    vitae malesuada lectus convallis. Vestibulum facilisis scelerisque libero, in viverra sem viverra at. 
                    Aliquam vitae nibh vel ex pharetra luctus. Mauris interdum est ante, id efficitur eros elementum ut. Praesent ultricies turpis purus, 
                    quis lacinia sapien aliquet ac.</p>
            </div>
        </div>
    </>
    );
}

export default HomePage;
