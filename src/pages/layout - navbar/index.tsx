const Navbar = () =>{
    return(
    <div>
        <header>

        <a href="" className="logo">logo</a>

        <nav className="navbar" >
        <ul>
            <li><a href="">Profile</a>
            <ul>
                <li><a href="">Fakultas FTIK</a></li>
                <li><a href="">Fakultas FTIK</a></li>
                <li><a href="">Prodik SI</a></li>
                <li><a href="">Prodi Kajian Film,TV,dan Media</a></li>
            </ul>
            </li>
            <li><a href="">Struktur Organisasi</a></li>
            <li><a href="">Akademik</a>
            <ul>
                <li><a href="">Kurikulum</a></li>
                <li><a href="">Panduan Akademik</a></li>
            </ul>
            </li>
            <li><a href="">Prestasi</a></li>
            <li><a href="">Gallery</a></li>
        </ul>
        </nav>


        </header>
    </div>
    );
};

export default Navbar;