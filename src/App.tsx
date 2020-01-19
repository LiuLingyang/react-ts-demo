import React from "react";
import { Dropdown, Menu, Button } from "@antd";
import Notes from "./Notes";

export interface AppProps {}
export interface AppState {}

const { Item } = Menu;

export default class App extends React.PureComponent<AppProps, AppState> {
  render() {
    const menu = (
      <Menu>
        <Item>1</Item>
        <Item>2</Item>
        <Item>3</Item>
      </Menu>
    );
    return (
      <div className={styles.App}>
        <Dropdown overlay={menu}>
          <Button>123</Button>
        </Dropdown>
        <Notes />
      </div>
    );
  }
}
