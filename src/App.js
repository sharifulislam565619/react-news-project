
import "./App.css";
import Cart from "./components/Cart/Cart";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from "react";
import { Row, Spinner } from "react-bootstrap";
import Header from "./components/Cart/Header/Header";

function App() {

  const [news, setNews] = useState([])

  useEffect(() => {
    fetch("HTTPS://newsapi.org/v2/everything?q=Apple&from=2021-09-27&sortBy=popularity&apiKey=22078eb1d7814cf0aa3a473d715b1cec")
      .then(res => res.json())
      .then(data => setNews(data.articles))
  }, [])



  return (

    <div className="App">
      <Header />
      {
        news.length === 0 ? <Spinner animation="border" /> :
          <Row xs={1} md={3} className="g-4 m-3">

            {
              news.map(data => <Cart
                key={data.publishedAt}
                data={data}></Cart>)
            }

          </Row>
      }
    </div>



  );
}

export default App;
