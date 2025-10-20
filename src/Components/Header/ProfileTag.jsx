import ProfileImg from "../../assets/Profile-img.png";
import {ProfileButton} from "./HeaderStyled.jsx";


export default function ProfileTag() {
  return (
    <ProfileButton>
      <div id="text-wrapper">Joseph Kuruvilascascla</div>
      <div className="image-wrapper">
        <img src={ProfileImg} alt="" />
      </div>
    </ProfileButton>
  );
}
