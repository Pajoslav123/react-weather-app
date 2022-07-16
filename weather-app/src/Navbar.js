import Search from './images/search.svg';

function Navbar() {
    return ( 
        <nav className="container">
            <div className="nav-content">
                <div className="nav-left">
                    <p>Weather-app</p>
                </div>
                <div className="nav-right">
                    <div className="search">
                        <input type="text" name="" placeholder="Search..." id="" />
                        <img className='search-icon' src={Search} alt="" />
                    </div>
                </div>
            </div>
        </nav>    
    );
}

export default Navbar;