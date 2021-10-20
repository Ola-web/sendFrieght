import "./App.css";
import Header from "./components/Header";
import Services from "./components/Services"
import ImportExport from "./components/ImportExport";
import Cargo from "./components/Cargo";
import AdditionalServices from "./components/AdditionalServices";
import Arrow from "./icons/ic_arrow_back_24px.svg"
function App() {
  return (
    <div className="app">
      
      <Header />
      <div className="app__wrapper">
       <img src={Arrow} alt="arrow back" />
        <div className="app__wrapperInner">
          <h2>New Booking</h2>
          <p>Fill in the information below to get a quote or create a new booking</p>
          <Services />
          <ImportExport />
          <Cargo />
         <AdditionalServices />
        </div>
       
      </div>
   
    </div>
  );
}

export default App;
