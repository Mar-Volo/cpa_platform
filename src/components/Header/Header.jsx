import { MdLanguage } from "react-icons/md";
import { FaAngleDown } from "react-icons/fa6";
import { useState, useEffect, useRef } from "react";

import { MainHeader } from "./Header.styled";
import { Navigation } from "../Navigation/Navigation";
import { OptionsBox } from "./Header.styled";
import { Select } from "./Header.styled";
import { Opt } from "./Header.styled";
import { LogIn } from "./Header.styled";
import { Register } from "./Header.styled";
import { OptBox } from "./Header.styled";
import { HeaderGlobalStyle } from "./HeaderGlobalStyle";

export const Header = () => {
  const [isLangOptVisible, setIsLangOptVisible] = useState(false);
  const [isRegisterOptVisible, setIsRegisterOptVisible] = useState(false);
  const langSelectRef = useRef(null);
  const registerSelectRef = useRef(null);
  const optSelectClick = (e) => {
    if (langSelectRef.current && langSelectRef.current.contains(e.target)) {
      setIsLangOptVisible((prev) => !prev);
    } else if (
      registerSelectRef.current &&
      registerSelectRef.current.contains(e.target)
    ) {
      setIsRegisterOptVisible((prev) => !prev);
    }
  };
  const handleOutsideClick = (e) => {
    if (langSelectRef.current && !langSelectRef.current.contains(e.target)) {
      setIsLangOptVisible(false);
    }
    if (
      registerSelectRef.current &&
      !registerSelectRef.current.contains(e.target)
    ) {
      setIsRegisterOptVisible(false);
    }
  };
  useEffect(() => {
    window.addEventListener("click", handleOutsideClick);

    return () => {
      window.removeEventListener("click", handleOutsideClick);
    };
  }, []);
  return (
    <MainHeader>
      <Navigation />
      <OptionsBox>
        <Select className="lang-select" ref={langSelectRef}>
          <a
            href="#languages"
            role="button"
            className="drop_down"
            onClick={optSelectClick}
          >
            <MdLanguage className="lang_icon" size={30} />
            <FaAngleDown className="down_icon" size={15} />
          </a>
          <OptBox className={`lang_opt ${isLangOptVisible === true ? "is-visible" : ""}`}>
            <Opt href="#ukrainian">Українська</Opt>
            <Opt href="#english">Англійська</Opt>
            <Opt href="#russian">Російська</Opt>
          </OptBox>
        </Select>
        <LogIn href="#login">Вхід</LogIn>
        <Select className="register-select" ref={registerSelectRef}>
          <Register href="#register" role="button" onClick={optSelectClick}>
            Реєстрація
          </Register>
          <OptBox
            className={`register_box ${
              isRegisterOptVisible ? "is-visible" : ""
            }`}
          >
            <Opt className="register_opt" href="#blogers">
              Я блогер
            </Opt>
            <Opt className="register_opt" href="#marketing">
              Я рекламодавець
            </Opt>
            <Opt className="register_opt" href="#managers">
              Я менеджер
            </Opt>
          </OptBox>
        </Select>
      </OptionsBox>
      <HeaderGlobalStyle />
    </MainHeader>
  );
};
