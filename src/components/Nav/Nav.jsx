import SearchBar from "../SearchBar/SearchBar";

const Nav = ({onSearch, random}) => {
    return (
        <nav>
            <SearchBar onSearch={onSearch}/>
            <button className="random" onClick={random}>Agregar random</button>
        </nav>
    )
}

export default Nav;