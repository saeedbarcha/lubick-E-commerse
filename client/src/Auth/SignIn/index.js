import React from 'react'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {HiOutlineMail} from 'react-icons/hi';
import {RiLock2Line,RiEyeCloseFill, RiFacebookFill, RiTwitterFill} from 'react-icons/ri';

import { MdRemoveRedEye} from 'react-icons/md'
import { IoLogoGoogleplus} from 'react-icons/io'
import {
Main,
AppName,
AppSlogan,
LogoCont,
Logo,
FormCont,
FormHead,
FormBody,
Em,
SvgStyle,
FormInputDiv,
FormInput,
ForgotPassword,
CreateAccount,
FormButton,
FormParaStatus,
SocialLoginDiv,
SvgSocialLogo,
SocialLoginNames,
GuestCont,
GuestLoginDiv,
GuestLoginNames
} from './SignInElements'
import LogoMain from '../Images/logo.jpg'
import useForm from './useForm';

const SignIn = () => {

  const {handleCreds, HandleSignIn, statusMsg} = useForm();


  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();


  
  return (
    <>
      <Main>
      <AppName>Lubick</AppName>
      <AppSlogan>Interactive shopping </AppSlogan>
        <LogoCont>
          <Logo src={LogoMain} alt="main-logo"></Logo>
        </LogoCont>
        <FormCont onSubmit={HandleSignIn}>
          <FormHead>
           Login 
          </FormHead>
          <FormBody>
            <FormInputDiv><HiOutlineMail style={SvgStyle}/><FormInput type="text" name='email' placeholder='Email Address' onChange={handleCreds} Required></FormInput><Em style={SvgStyle}></Em></FormInputDiv>
            <FormInputDiv><RiLock2Line style={SvgStyle}/><FormInput type={showPassword ? "text" : "password"} name='password' placeholder='Password' onChange={handleCreds} Required></FormInput><Em style={SvgStyle}>{showPassword ? <MdRemoveRedEye onClick={()=>setShowPassword(!showPassword)}/> : <RiEyeCloseFill onClick={()=>setShowPassword(!showPassword)}/>}</Em></FormInputDiv>
          </FormBody>
          <FormButton type='submit'>
            Sign In
          </FormButton>
          <FormParaStatus>{statusMsg}</FormParaStatus>
          <ForgotPassword>Forgot Password?</ForgotPassword>
          <Link to="/signup" style={{textDecoration : "none"}}><CreateAccount> Create a new account</CreateAccount></Link>
        
        <SocialLoginDiv style={{backgroundColor:"#2A61FF"}}> <RiFacebookFill  style={SvgSocialLogo}/>
        <Link to="/" style={{textDecoration : "none"}}><SocialLoginNames>SignIn with facebook</SocialLoginNames></Link>
        </SocialLoginDiv>
         
        <SocialLoginDiv style={{backgroundColor:"#00E7FF"}}> <RiTwitterFill  style={SvgSocialLogo}/>
        <Link to="/" style={{textDecoration : "none"}}><SocialLoginNames>SignIn with twitter</SocialLoginNames></Link>
        </SocialLoginDiv>
        
        <SocialLoginDiv style={{backgroundColor:"#FF2A2A"}}> <IoLogoGoogleplus  style={SvgSocialLogo}/>
        <Link to="/" style={{textDecoration : "none"}}><SocialLoginNames>SignIn with google</SocialLoginNames></Link>
        </SocialLoginDiv>

        
         
        </FormCont>
<GuestCont>
<GuestLoginDiv style={{width:"10%", height:"3vh", marginBottom:"30px", backgroundColor:"#00E7FF"}}> <GuestLoginNames>Continue as a guest</GuestLoginNames></GuestLoginDiv>
</GuestCont>
       

      </Main>
    </>
  )
}

export default SignIn;