import { NavLink } from "react-router";
import externalLink from "../../assets/external-link-icon.svg";

export default function PrimaryButton({ title, redirect, redirectPath }) {
  return (
    <NavLink to={redirectPath}>
      <button>
        <div>{title}</div>
        {redirect ? (
          <div>
            <img src={externalLink} alt="Diagonal arrow" />
          </div>
        ) : undefined}
      </button>
    </NavLink>
  );
}
