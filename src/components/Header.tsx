import { useRef, useState } from "react";
import logo from "../assets/svg/logo.svg";
import records from "../assets/svg/records.svg";
import challenge from "../assets/svg/challenge.svg";
import notice from "../assets/svg/notice.svg";
import icon_menu from "../assets/svg/icon_menu.svg";
import icon_close from "../assets/svg/icon_close.svg";

import styled from "styled-components";
import { Colors } from "../styles/theme";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { MenuItem, Container } from "@mui/material";
import { DropdownMenu } from "./DropdownMenu";

const Wrapper = styled.div`
  background-color: ${Colors.Dark500};
  font-family: "Hiragino Kaku Gothic Pro";
  position: sticky;
  top: 0rem;
  z-index: 2;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.160784);
 
  }
`;
const CustomsContainer = styled(Container)`
   .container{display: flex;
    justify-content: space-between;
    align-items: center;
    height: 64px;
   }
  justify-content: space-between;
  align-items: center;
  background-color: ${Colors.Dark500};
  img {
    max-height: 40px;
  }
  .menu {
    display: grid;
    grid-template-columns: repeat(4, auto);
    gap: 1rem;
    .item {
      display: inline-flex;
      gap: 0.5rem;
      justify-content: center;
      align-items: center;
      position: relative;
      .oval {
        width: 16px;
        height: 16px;
        position: absolute;
        color: #ffff;
        background-color: ${Colors.Primary400};
        padding: 1px;
        border-radius: 50%;
        font-size: 10px;
        left: 23px;
        top: calc(50% - 16px / 2 - 8px);
      }
    }
    .label {
      color: ${Colors.Light};
    }
`;

const Logo = styled(Link)`
  justify-content: center;
  display: flex;
  align-items: center;
`;

interface IHeaderProps {}
const Header: React.FunctionComponent<IHeaderProps> = () => {
  const location = useLocation();
  const menuRef = useRef(null);
  const [menuAnchor, setMenuAnchor] = useState(null);

  function handleClose() {
    setMenuAnchor(null);
  }
  return (
    <Wrapper>
      <CustomsContainer maxWidth="md">
        <div className="container">
          <Logo to={"/"}>
            <img src={logo} alt="logo" />
          </Logo>
          <div className="menu">
            <Link to={"/record"} className="item">
              <img src={records} alt="records" />
              <div
                className="label"
                style={{
                  color:
                    location.pathname === "/record"
                      ? Colors.Primary400
                      : undefined,
                }}
              >
                {" "}
                自分の記録
              </div>
            </Link>

            <div className="item">
              <img src={challenge} alt="challenge" />
              <div className="label">チャレンジ</div>
            </div>
            <div className="item">
              <img src={notice} alt="notice" />
              <div className="oval">1</div>
              <div className="label">お知らせ</div>
            </div>
            <MenuItem
              sx={{
                "&.MuiMenuItem-root": {
                  padding: 0,
                },
              }}
              ref={menuRef}
              onClick={() => setMenuAnchor(menuRef.current)}
            >
              {menuAnchor ? (
                <img src={icon_close} alt="icon_menu" />
              ) : (
                <img src={icon_menu} alt="icon_menu" />
              )}
            </MenuItem>
            <DropdownMenu
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              onClose={() => setMenuAnchor(null)}
              open={Boolean(menuAnchor)}
              anchorEl={menuAnchor}
              onExit={handleClose}
            />
          </div>
        </div>
      </CustomsContainer>
    </Wrapper>
  );
};

export default Header;
