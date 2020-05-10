import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { push } from "connected-react-router";
import { Button, Menu, Container, Dropdown, Icon } from "semantic-ui-react";
import { userLogout } from "store/actions";

function Navigation() {
  const dispatch = useDispatch();
  const navigateTo = path => () => dispatch(push(path));

  const { user } = useSelector(state => ({
    user: state.user,
  }));

  function onLogoutClick() {
    dispatch(userLogout());
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
          {
            (user.isLoggedIn) ?
            <Dropdown item text={`${user.profile.firstName} ${user.profile.lastName}`}>
              <Dropdown.Menu>
                <Dropdown.Item onClick={onLogoutClick}><Icon name="log out" />Log out</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown> :
            <Menu.Item>
              <Button color="red" className="header-login-btn" onClick={navigateTo("/login")}>Log in</Button>
            </Menu.Item>
          }
        </Menu.Menu>
      </Container>
    </Menu>
  );
}

export default Navigation;