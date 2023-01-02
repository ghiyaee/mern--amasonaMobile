// import logo from './logo.svg';
// import './App.css';
import data from './data';
const App = () => {
  return (
    <div dir="rtl">
      <header>
        <a href="/"> Amasona Mobile</a>
      </header>
      <main>
        <h1>محصولات ویژه</h1>
        <div className="products">
          {data.products.map((p) => (
            <div className="product" key={p.name}>
              <a href="/product">
                <img src={p.image} alt={p.name} />
              </a>

              <div className="product-info">
                <p>{p.name}</p>
                <p>
                  <strong>{p.price}</strong>
                  &nbsp;
                    تومان 
                </p>
                <button>افزودن به سبد خرید</button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};
export default App;
