import Card from "./Card";

export default function CardList(props) {
    let data1 = props.data;
    let CardArray = data1.map(item => <Card/>)
    return (
        <div className='CardList'>
            {CardArray}
            </div>
        )
}