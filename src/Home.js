import UpcomingCardList from "./Data/Upcoming/Movies/UpcomingCardList";
import './Home.css'

export default function Home() {
    return (
        <div className='HomePage'>

            <img src='https://pbs.twimg.com/profile_banners/41264383/1669058612/1500x500'  className='home--poster myslides' />
            {/*<img  src='https://pbs.twimg.com/profile_banners/1186758103124983808/1666367998/1500x500' className='home--poster myslides' />
            <img  src='https://pbs.twimg.com/profile_banners/1186758103124983808/1666367998/1500x500' className='home--poster myslides' />
            */}<h3>Upcoming Movies</h3>
            <UpcomingCardList />
         
        </div>
    )
}