import { Link } from "react-router-dom";
import BottomMenu from "../components/BottomMenu";
import Button from "../components/Button";
import Header from "../components/Header";
import Input from "../components/Input";
import { useDispatch, useSelector } from 'react-redux';
import {useState} from 'react';
import axios from 'axios'


const ChangeInfo = () => {
  const userName = useSelector((state) => state.name);
  const userId = useSelector((state) => state.id);
  const userEmail = useSelector((state) => state.email);

  const [newName, setNewName] = useState('');
  const [newPw, setNewPw] = useState('');
  const [newEmail, setNewEmail] = useState('');

  const handleName = (e) => setNewName(e.target.value);
  const handlePw = (e) => setNewPw(e.target.value);
  const handleEmail = (e) => setNewEmail(e.target.value);


  const dispatch = useDispatch();
  const saveChangedInfo = () => {
    dispatch({type : 'changeInfo', newName : newName,
    newPw : newPw, newEmail : newEmail});

    const infoPost = axios.create({
      baseURL: 'http://localhost:8000/'
    })
    infoPost.post('/api/user-update', null,{params: {
       id : userId, password: newPw, name : newName, email : newEmail,
      }}).then(function (response){
      if(response.data.id === undefined || response.data.password === undefined) {
        alert(`사용자 정보 수정이 실패하였습니다.`);
      }
      else {
      alert(`사용자 정보 수정이 완료되었습니다.`);
    }
    }).catch(function (error){
      console.log(`에러 발생 : ${error}`);
    })
  }


  return (
    <>
    <Header />
    <div style={{textAlign:'center'}}>
    <div>
    <div style={{display:'block'}}>{'회원정보 수정'}</div>
    <div style={{display:'block'}}>{'나의 정보'}</div>
    </div>

    <div style={{display:'block', margin:'10px auto'}}>
    <label htmlFor="id">{'아이디'}</label>
    <Input type={'text'}
    placeholder={userId}
    disabled={true} /></div>

    <div style={{display:'block', margin:'10px auto'}}>
    <label htmlFor="name">{'이름'}</label>
    <Input type={'text'} onChange={handleName}
    placeholder={userName} /></div>

    <div style={{display:'block', margin:'10px auto'}}>
    <label htmlFor="mail">{'이메일'}</label>
    <Input type={'email'} onChange={handleEmail}
    placeholder={userEmail} /></div>

    <div style={{display:'block', margin:'10px auto'}}>
    <label htmlFor="pw">{'새 비밀번호'}</label>
    <Input type={'password'} onChange={handlePw}
    placeholder={'새 비밀번호'} /></div>

    <Link to='/myinfo'>
    <Button value={'저장하기'} height={'30px'} margin={'0 5px 0 0'}
    onClick={saveChangedInfo}/></Link>

    <Link to='/myinfo'>
    <Button value={'뒤로가기'} height={'30px'}/></Link>
    </div>
    <BottomMenu />
    </>
  );
}

export default ChangeInfo;