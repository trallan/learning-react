export default function SearchBar({ setSearchInput, setSearchQuery, searchInput }) {

    return (
        <>
            <label>Search</label>
            <input type="text" onChange={(e) => setSearchInput(e.target.value)}/>
            <button onClick={() => setSearchQuery(searchInput)}>Search</button>
        </>
    )
}