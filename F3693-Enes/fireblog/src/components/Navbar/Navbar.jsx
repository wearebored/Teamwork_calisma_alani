import { useDispatch, useSelector } from "react-redux";
import { setLogout } from "../../app/features/LoginSlice";
import { setModal } from "../../app/features/ModalSlice";
import UyarıModal from "../UyariModal/UyarıModal";
import { IconDiv, IconList, NavbarCon, Weare } from "./navbar-styled";

function Navbar() {
  const dispatch = useDispatch();
  const { email } = useSelector((s) => s.login);
  const { modal } = useSelector((s) => s.modal);
  const { uyari } = useSelector((s) => s.uyari);
  return (
    <NavbarCon
      onClick={() => {
        modal && dispatch(setModal());
      }}
    >
      {uyari && <UyarıModal />}
      <img src="images/cw.jpeg" alt="" />
      <Weare to="/">
        <h1>{"<WeAreBored/> Blog"}</h1>
      </Weare>

      <IconList>
        <IconDiv />
        <ul>
          <li>
            <Weare to="/newblog"> New Blog</Weare>
          </li>
          <li>
            <Weare to="/about"> About</Weare>
          </li>
          <li>
            <Weare to="/profile"> Profile</Weare>
          </li>
          {email ? (
            <li
              onClick={() => {
                dispatch(setLogout());
              }}
            >
              Logout
            </li>
          ) : (
            <li>
              <Weare to="/profile"> Login</Weare>
            </li>
          )}
        </ul>
      </IconList>
    </NavbarCon>
  );
}

export default Navbar;
