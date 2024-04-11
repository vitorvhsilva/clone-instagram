import logo from './imagens/images.png';
import TextMenu from './TextMenu';
import './ConteudoLateralEsquerda.css'
import { GoHomeFill } from "react-icons/go";
import { CiSearch, CiHeart } from "react-icons/ci";
import { RiMessengerLine } from "react-icons/ri";
import { CgAddR } from "react-icons/cg";
import { FaUserCircle } from "react-icons/fa";

export default function ConteudoLateralEsquerda() {
    return (
        <div className='conteudoLateralEsquerda'>
            <img src={logo} alt='Logo' />
            <ul>
                <TextMenu nome="  Home" icone={<GoHomeFill style={{
                    fontSize: '40px',
                    position: 'relative',
                    top: '10px'
                    }}/>} class='text-menu'/>
                <TextMenu nome="  Explore" icone={<CiSearch style={{
                    fontSize: '40px',
                    position: 'relative',
                    top: '10px'
                    }}/>} class='text-menu'/>
                <TextMenu nome="  Messages" icone={<RiMessengerLine style={{
                    fontSize: '40px',
                    position: 'relative',
                    top: '13px'
                    }}/>} class='text-menu'/>
                <TextMenu nome="  Notifications" icone={<CiHeart style={{
                    fontSize: '40px',
                    position: 'relative',
                    top: '13px'
                    }}/>} class='text-menu'/>
                <TextMenu nome="  Create" icone={<CgAddR style={{
                    fontSize: '40px',
                    position: 'relative',
                    top: '13px'
                    }}/>} class='text-menu'/>
                
                <TextMenu nome="  Profile" icone={<FaUserCircle style={{
                    fontSize: '40px',
                    position: 'relative',
                    top: '10px'
                    }}/>} class='text-menu-self'/>
                
            </ul>
        </div>
    )
}
