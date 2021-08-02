import React from 'react'
import './register.scss';
import { RegisterBg } from '../../assets';
import { Input, Button, Gap, Link } from '../../components';

function Register() {
  return (
    <div className="main-page">
        <div className="left">
            <img src={RegisterBg} className="bg-image" alt="imageBg"/>
        </div>
        <div className="right">
            <p className="title">REGISTER</p>
            <Input label="Full Name" placeholder="Full Name"/>
            <Gap height={18}/>
            <Input label="Email" placeholder="Email"/>
            <Gap height={18}/>
            <Input label="Password" placeholder="Password"/>
            <Gap height={20} />
            <Button title="Register" />
            <Gap height={30} />
            <Link title="Kembali Ke Login"/>
            
        </div>
    </div>
  )
}

export default Register;
