import { AccessTime, HelpOutline, Search } from "@mui/icons-material";
import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase";
import {
  HeaderAvatar,
  HeaderContainer,
  HeaderLeft,
  HeaderRight,
  HeaderSearch,
} from "./header.styles";

function Header() {
  const [user] = useAuthState(auth);
  return (
    <HeaderContainer>
      <HeaderLeft>
        <HeaderAvatar
          src={user?.photoURL}
          alt={user?.displayName}
          onClick={() => signOut(auth)}
        />
        <AccessTime />
      </HeaderLeft>
      {/** Header center */}
      <HeaderSearch>
        <Search />
        <input type="search" placeholder="Search" />
      </HeaderSearch>
      {/** Header right */}
      <HeaderRight>
        <HelpOutline />
      </HeaderRight>
    </HeaderContainer>
  );
}

export default Header;
