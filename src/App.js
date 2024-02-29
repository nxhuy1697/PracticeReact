

const avatar = "https://i.pinimg.com/236x/56/71/6e/56716e1a5fd96adf1609bbdd24436ab6.jpg";

const today = new Date();

function formatDate(date) {
  return new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(date);
}


function App() {

  return  <>


  <div style={{padding: 30, margin: 30, backgroundColor: 'aqua'}}>
    <h1>Danh Sách Công Việc Cho Ngày {formatDate(today)}</h1>
  </div>

  {/* có thể import trực tiếp */}
  {/* <img
      className="avatar"
      src="https://i.imgur.com/7vQD0fPs.jpg"
      alt="Gregorio Y. Zara"
    /> */}
   <img className="avatar" src={avatar} alt="..."/>
  </>
  
}

export default App;
