const Sidebar = () => {
  return (
    <nav id="sidebar">
    <div class="sidebarHeader">
        <img src="logo.png" width={'200px'} alt="Mackenzie Properties Logo" />
    </div>

    <ul class="list-unstyled components">
        <p>Sidebar Headings</p>
        <li class="active">
            <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">Home</a>
            <ul class="collapse list-unstyled" id="homeSubmenu">
                <li>
                    <a href="#">Link 1</a>
                </li>
                <li>
                    <a href="#">Link 2</a>
                </li>
                <li>
                    <a href="#">Link 3</a>
                </li>
            </ul>
        </li>
        <li>
            <a href="#">About</a>
        </li>
        <li>
            <a href="#servicesSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">Services</a>
            <ul class="collapse list-unstyled" id="servicesSubmenu">
                <li>
                    <a href="#">Service 1</a>
                </li>
                <li>
                    <a href="#">Service 2</a>
                </li>
                <li>
                    <a href="#">Service 3</a>
                </li>
            </ul>
            <a href="#">Contact Us</a>
        </li>
    </ul>
</nav>
  )
}

export default Sidebar