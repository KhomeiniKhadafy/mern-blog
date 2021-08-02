import React from 'react'
import { LoginBg } from '../../assets';
import { Input, Button, Gap, Link } from '../../components';

function Login() {
  return (
    <div className="main-page">
        <div className="left">
            <img src={LoginBg} className="bg-image" alt="imageBg"/>
        </div>
        <div className="right">
            <p className="title">LOGIN</p>
            <Input label="Email" placeholder="Email"/>
            <Gap height={18}/>
            <Input label="Password" placeholder="Password"/>
            <Gap height={30} />
            <Button title="Login" />
            <Gap height={20} />
            <Link title="Silahkan Daftar."/>
        </div>
    </div>
  )
}

export default Login;
