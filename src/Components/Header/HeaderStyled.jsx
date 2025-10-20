import styled from "styled-components";

export const NavBar = styled.header`
  padding: 20px 32px;

  & nav {
    display: flex;
    justify-content: space-between;
    padding: 16px;
    width: 100%;
    max-width: 1400px;
    background: var(--basebg);
    border: 1px solid #fff;
    border-radius: 64px;
    align-items: center;
    justify-self: center;
    z-index: 50;
  }
  & h2 {
    margin: unset;
    font-size: 24px;
    font-weight: 600;
    padding: 0 16px;
    user-select: none;
  }
  & ul {
    display: flex;
    gap: 16px;
    list-style: none;
    margin: unset;
    width: 100%;
    max-width: 660px;
  }
  & li {
    display: flex;
    align-items: center;
    flex-flow: row nowrap;
    gap: 24px;
    background: #fff;
    box-shadow: 0px 0px 20px #e0e0e0ff;
    padding: 8px 16px;
    border-radius: 40px;

    user-select: none;
    overflow: hidden;
  }

  & li p,
  & .hamburger-icon,
  #menuClose {
    display: none;
  }

  & .menu-wrapper {
    display: flex;
    gap: 16px;
    width: 100%;
  }

  @media (max-width: 768px) {
    h2 {
      font-size: 16px;
    }
    & .menu-wrapper {
      position: fixed;
      height: 100vh;
      top: 0;
      right: -20%;
      z-index: 51;
      justify-content: start;
      flex-flow: column nowrap;
      width: 0px;
      max-width: 350px;
      background: var(--basebg);
      backdrop-filter: blur(20px);
      padding: 40px 24px 16px 24px;
      transition: width 0.8s ease, right 0.5s ease;
    }
    & .menu-wrapper a {
      display: inherit;
      width: 100%;
    }
    & .menu-wrapper a li {
      width: inherit;
    }

    & .menu-wrapper.active {
      width: 45%;
      right: 0;
      display: flex;
    }
    & #menuClose {
      display: flex;
      position: absolute;
      padding: 40px 16px;
      left: -24px;
      top: 50%;
      transform: translateY(-50%);
    }
    & .hamburger-icon {
      display: flex;
      padding: 8px;
    }
    & ul {
      justify-content: flex-end;
    }
    & li {
      padding: 24px;
    }
    & li p {
      display: flex;
    }
    & nav {
      padding: 12px;
    }
  }
  @media (max-width: 425px) {
    & .menu-wrapper.active {
      width: 70%;
    }
  }
`;

export const SeacrhContainer = styled.div`
  width: inherit;
  padding: 0px 8px;
  display: flex;
  align-items: center;
  flex-flow: row nowrap;
  background: #fff;
  cursor: pointer;
  border-radius: 40px;

  & input {
    background: transparent;
    border: unset;
    padding-left: 16px;
    padding: 16px 8px 16px 16px;
    width: inherit;
    border-radius: inherit;
  }
  & input:focus {
    outline: unset;
  }

  & #icon-container {
    display: flex;
    background: var(--baseblack);
    padding: 8px;
    font-size: 16px;
    border-radius: 40px;
    color: var(--basewhite);
  }
  @media (max-width: 768px) {
    width: fit-content;
    padding: unset;
    background: transparent;

    input.active {
      width: 90%;
      top: 90px;
      opacity: 1;
      user-event: unset;
    }

    & input {
      user-event: unset;
      position: absolute;
      
      left: 50%;
      transform: translateX(-50%);
      top: 32px;
      width: 60%;
      opacity: 0;
      background: #fff;
      box-shadow: 0px 0px 20px #e0e0e0ff;
      transition: width 0.2s ease, top 0.2s ease, opacity 0.1s ease;
    }
  }
  @media (max-width: 425px) {
    & input.active {
      width: 60%;
    }
  }
`;

export const ProfileButton = styled.div`
  display: flex;
  flex-flow: row unwrap;
  gap: 20px;
  background: #fff;
  border-radius: 0px;
  align-items: center;
  padding: 8px 8px 8px 16px;
  border-radius: 40px;
  cursor: pointer;
  user-select: none;
  max-width: 210px;
  width: 100%;

  & #text-wrapper {
    font-weight: 600;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  & .image-wrapper {
    width: 32px;
    height: 32px;
    display: inherit;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    border-radius: 24px;
    overflow: hidden;
  }
  & img {
    width: inherit;
  }
  @media (max-width: 768px) {
    max-width: unset;
    max-width: unset;
    width: unset;
    justify-content: space-between;
    margin-top: auto;
  }

  @media (max-width: 425px) {
    & #text-wrapper {
      font-size: 12px;
    }
  }
`;
