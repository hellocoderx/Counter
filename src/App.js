import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
    return ( <
        div className = "App" >
        <
        Counter > < /Counter> <
        /div>
    );
}

function Counter() {
    const [count, setCount] = useState(1);
    const increaseCount = () => {
        const newCount = count + 1;
        setCount(newCount);
    }
    const decreaseCount = () => setCount(count - 1);
    return ( <
        div >
        <
        h1 > Counter: { count } < /h1> <
        button onClick = { increaseCount } > Increase < /button> <
        button onClick = { decreaseCount } > Decrease < /button> <
        /div>
    )
}
/*{ <Product name="Laptop"price="120000"></Product>
<Product name="Phone"price="200000"></Product>
<Product name="Iphone"price="43122"></Product>
<Product name="Lesla"price="46643"></Product>
<Product name="Google Phone"price="1234"></Product>
<Product name="Vivo"price="12222"></Product>
<Product name="Nokia"price="123334"></Product>
<Product name="Pc "price="222111"></Product>
<Product name="Hp Laptop"price="24245"></Product>
<Product name="Lenovo"price="121442"></Product>
<Product name="All Bye" price="12224"></Product> }*/
function Product(props) {
    return ( <
        div className = "product" >
        <
        h2 > Name: { props.name } < /h2> <
        p > Price: { props.price } < /p> <
        /div>
    )

}

export default App;