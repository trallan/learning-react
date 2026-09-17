export default function MovieCard({movie}){

    return (
        <>
           <li key={movie.show.id}>
                Name: {movie.show.name}
                Genre: {movie.show.genres.map(genre => (
                    <span key={genre}> {genre} </span>
                ))}
            </li>
        </>
    )
}