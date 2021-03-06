import {Link} from 'react-router-dom';
import { AiFillHome,AiOutlineUser, AiOutlineSearch, AiOutlineFileAdd, AiFillStar } from "react-icons/ai";
const BottomMenu = () => {
  return ( 
    <div style={{
      position:'fixed',
      bottom:0,
      width:'100%',
      height:'50px',
      display:'inline',
      textAlign:'center'
    }}>
    <Link to='/main'>
    <button><AiFillHome size='40'/></button></Link>
    <Link to='/search'>
    <button><AiOutlineSearch size='40' /></button></Link>
    <Link to='/addcloth'>
    <button><AiOutlineFileAdd size='40' /></button></Link>
    <Link to='/favorite'>
    <button><AiFillStar size='40' /></button></Link>
    <Link to='/myinfo'>
    <button><AiOutlineUser size='40' /></button></Link>
    </div>
  );
}

export default BottomMenu;