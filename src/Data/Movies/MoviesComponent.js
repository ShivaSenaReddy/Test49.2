import { MoviesData } from "./MoviesData";
import CardList from "../../CardList";


export default function MoviesComponent() {
	return (
		<div className='Movies'>
			<CardList data={MoviesData} />
			</div>
		)

}