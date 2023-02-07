import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { RiUser3Line } from "react-icons/ri";
import {
  HiOutlineMail,
  HiDevicePhoneMobile,
  HiOutlineDevicePhoneMobile,
} from "react-icons/hi";
import { RiLock2Line, RiEyeCloseFill } from "react-icons/ri";
import {
  MdOutlinePeople,
  MdRemoveRedEye,
  MdOutlinePhoneIphone,
} from "react-icons/md";
import {
  Main,
  LogoCont,
  Logo,
  FormCont,
  FormHead,
  FormBody,
  Em,
  SvgStyle,
  FormInputDiv,
  FormInput,
  FormSelect,
  FormOption,
  FormButton,
  SwitchCont,
  SwitchPara,
  SwitchSpan,
  TermsConCont
} from "./SignUpElements";
import LogoMain from "../Images/logo.jpg";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showCPassword, setShowCPassword] = useState(false);

  const handleKeyDown = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <Main>
        <LogoCont>
          <Logo src={LogoMain} alt="main-logo"></Logo>
        </LogoCont>
        <FormCont>
          <FormHead>Sign Up</FormHead>
          <FormBody>
            <FormInputDiv>
              <RiUser3Line style={SvgStyle} />
              <FormInput type="text" placeholder="First name"></FormInput>
              <Em style={SvgStyle}></Em>
            </FormInputDiv>
            <FormInputDiv>
              <RiUser3Line style={SvgStyle} />
              <FormInput type="text" placeholder="Last name"></FormInput>
              <Em style={SvgStyle}></Em>
            </FormInputDiv>
            <FormInputDiv>
              <MdOutlinePhoneIphone style={SvgStyle} />
              <FormInput
                type="number"
                placeholder="Phone Number"
                // onKeyDown={handleKeyDown}
              ></FormInput>
              <Em style={SvgStyle}></Em>
            </FormInputDiv>
            <FormInputDiv>
              <HiOutlineMail style={SvgStyle} />
              <FormInput type="text" placeholder="Email Address"></FormInput>
              <Em style={SvgStyle}></Em>
            </FormInputDiv>
            <FormInputDiv>
              <RiLock2Line style={SvgStyle} />
              <FormInput
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                autocomplete="off"
              ></FormInput>
              <Em style={SvgStyle}>
                {showPassword ? (
                  <MdRemoveRedEye
                    onClick={() => setShowPassword(!showPassword)}
                  />
                ) : (
                  <RiEyeCloseFill
                    onClick={() => setShowPassword(!showPassword)}
                  />
                )}
              </Em>
            </FormInputDiv>
            <FormInputDiv>
              <RiLock2Line style={SvgStyle} />
              <FormInput
                type={showCPassword ? "text" : "password"}
                placeholder="Confirm Password"
                autocomplete="off"
              ></FormInput>
              <Em style={SvgStyle}>
                {showCPassword ? (
                  <MdRemoveRedEye
                    onClick={() => setShowCPassword(!showCPassword)}
                  />
                ) : (
                  <RiEyeCloseFill
                    onClick={() => setShowCPassword(!showCPassword)}
                  />
                )}
              </Em>
            </FormInputDiv>
            <FormInputDiv>
              <MdOutlinePeople style={SvgStyle} />
              <FormSelect>
                <FormOption>Male</FormOption>
                <FormOption>Female</FormOption>
                <FormOption>Other</FormOption>
              </FormSelect>
              <Em style={SvgStyle}></Em>
            </FormInputDiv>
          </FormBody>

          <FormButton>Sign Up</FormButton>
        </FormCont>
        <SwitchCont>
          <SwitchPara>
            Already having account?{" "}
            <Link to="/signin">
              <SwitchSpan> Log In Here</SwitchSpan>
            </Link>
          </SwitchPara>
        </SwitchCont>

        <TermsConCont>
          <SwitchPara>
            By clicking Sign Up, you agree to our Terms and Conditions. Learn
            how we collect, use and share your data in our Data Policy and how
            we use cookies and similar technology in our Cookies Policy. You may
            receive SMS Notifications from us and can opt out any time.
          </SwitchPara>
        </TermsConCont>
      </Main>
    </>
  );
};

export default SignUp;
