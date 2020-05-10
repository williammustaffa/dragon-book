import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { push } from "connected-react-router";
import { Menu, Container, Dropdown, Icon } from "semantic-ui-react";
import { userLogout } from "store/actions";

function Navigation() {
  const dispatch = useDispatch();
  const navigateTo = path => () => dispatch(push(path));

  const { isLoggedIn, profile } = useSelector(state => ({
    isLoggedIn: state.user.isLoggedIn,
    profile: state.user.profile,
  }));

  function onLogoutClick() {
    dispatch(userLogout());
  }

  if (!isLoggedIn) {
    return null;
  }

  return (
    <Menu inverted className="header-navigation" id="navigation">
      <Container>
        <Menu.Item
          name="All Dragons"
          onClick={navigateTo("/")}
        />
        <Menu.Item
          name="Add dragon"
          onClick={navigateTo("/dragon/add")}
        />

        <Menu.Menu position="right">
          <Dropdown item text={`${profile.firstName} ${profile.lastName}`}>
            <Dropdown.Menu>
              <Dropdown.Item onClick={onLogoutClick}><Icon name="log out" />Log out</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Menu.Menu>
      </Container>
    </Menu>
  );
}

export default Navigation;