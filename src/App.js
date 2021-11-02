import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react";
import {Button} from "react-bootstrap"

function App() {
    const [money, setMoney] = useState(0)
    const [moneyPerSecond, setMoneyPerSecond] = useState(0)

    useEffect(() => {
        const id = setInterval(() => setMoney((oldMoney) => oldMoney + moneyPerSecond), 1000)

        return () => clearInterval(id);
    }, [moneyPerSecond])

    function Upgrade(props){
        function levelUp(){
            if (money >= props.price) {
                setMoney(money - props.price)
                setMoneyPerSecond(moneyPerSecond + props.generatingPerSec)
                console.log("Dieses Programm ist Copyright geschützt durch Kai Bria")
            }
        }


        return(
            <Button onClick={() => levelUp(props.generatingPerSec, props.price)}>{props.upgradeName}</Button>
        )

    }

    return (
        <div className="App">
            {money}
            <Button onClick={() => setMoney(money + 1)}>Generieren</Button>
            <Upgrade generatingPerSec={1} price={10} upgradeName={"Upgrade 1"}></Upgrade>
            <Upgrade generatingPerSec={5} price={50} upgradeName={"Upgrade 2"}/>
            <Upgrade generatingPerSec={10} price={200} upgradeName={"Upgrade 3"}></Upgrade>
            <Upgrade generatingPerSec={60} price={4000} upgradeName={"Upgrade 4"}/>
            <Upgrade generatingPerSec={100} price={46000} upgradeName={"Upgrade 5"}></Upgrade>
            <Upgrade generatingPerSec={230} price={120000} upgradeName={"Upgrade 6"}></Upgrade>
        </div>
    );
}

export default App;
