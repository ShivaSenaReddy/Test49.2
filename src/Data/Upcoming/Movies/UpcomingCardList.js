import UpcomingCard from "../UpcomingCard"
import UpcomingMoviesData from "./UpcomingMoviesData"

export default function UpcomingCardList() {
    let CardArray = UpcomingMoviesData.map(item => <UpcomingCard />)
    return (<div className='CardList'>
        {CardArray}
    </div>
        )
}