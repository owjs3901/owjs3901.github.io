import './nav.scss';

function Nav() {
    return (
        <nav>
            <ul>
                <a href={'#home'}>
                    <li>HOME</li>
                </a>
                <a href={'#about'}>
                    <li>ABOUT</li>
                </a>
                <a href={'#skill'}>
                    <li>SKILL</li>
                </a>
                <a href={'#history'}>
                    <li>HISTORY</li>
                </a>
                <a href={'#contact'}>
                    <li>CONTACT</li>
                </a>
            </ul>
        </nav>
    );
}

export default Nav;
