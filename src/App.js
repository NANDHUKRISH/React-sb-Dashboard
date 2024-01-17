import './App.css';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import TopBar from './components/TopBar';
import PageContent from './components/PageContent';
import {useState} from "react";
function App() {
  let data= {
    monthly:40010,
    yearly:215100,
    task:90,
    pending:25
  }

  const [style, setStyle]=useState("navbar-nav bg-gradient-primary sidebar sidebar-dark accordion");
  const changeStyle=()=>{
    if(style === "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"){
      setStyle("navbar-nav bg-gradient-primary sidebar sidebar-dark accordion toggled")
    }else{
      setStyle("navbar-nav bg-gradient-primary sidebar sidebar-dark accordion")
    }
  }
    return (
        <>
            <div id="wrapper">
                <Sidebar style={style} changeStyle={changeStyle} />
                <div id="content-wrapper" className="d-flex flex-column">
                    <div id="content">
                        <TopBar changeStyle={changeStyle}/>
                        <PageContent data={data} />
                    </div>
                    <Footer />
                </div>
            </div>
        </>
    );
}

export default App;
