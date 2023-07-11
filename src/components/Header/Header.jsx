import './header.css'
import logo from '../../assets/logo (1).png'
import img2 from '../../assets/icon_menu.svg'

import MenuItem from './MenuItem'
import links from '../../data'
import { useDisclosure } from '@chakra-ui/react'
import SideBar from '../SideBar/SideBar'

function Header() {
    const menuLinksLeft = [
        {
            id: 1,
            title: "home",
            link: links[0].link
        },
        {
            id: 2,
            title: "catalog",
            link: "catalog"
        },
    ]

    const menuLinksRight = [
        {
            id: 3,
            title: "about",
            link: "about"
        },
        {
            id: 4,
            title: "cart",
            link: "cart"
    
        },
        {
            id:5,
            title:"login",
            link:"login"
        },
        {
            id:6,
            title:"sign",
            link:"sign"
        }
    ]

    const menuItemsRight = menuLinksRight.map( (l) => (
        <MenuItem
            key={l.id}
            title={l.title}
            link={l.link}
        />
    ))
    const menuItemsLeft = menuLinksLeft.map( (l) => (
        <MenuItem
            key={l.id}
            title={l.title}
            link={l.link}
        />

    ))

    const {isOpen,onOpen,onClose} = useDisclosure()
    return (
        <header>
        <div class="header">
            <div class="container">
                <div class="header__main header-menu">
                    <div class="header-menu__left menu-block">
                        {menuItemsLeft}
                    </div>
                    <div class="header-menu__logo logo">
                        <a class="logo__wrap menu-item">
                            <img  src={logo}/>
                        </a>
                    </div>
                    <div class="header-menu__right menu-block">
                        {menuItemsRight}
                        <button class="menu-block__item menu-item" onClick={onOpen}>
                            <img class="menu-item__burger burger" src={img2} />
                            
                        </button>
                    </div>
                </div>
            </div>
            
        <SideBar
        isOpen={isOpen}
        onClose={onClose}/>
            

        </div>
    </header>
    )
}
export default Header