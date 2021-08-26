import React from 'react';
import { Layout,Input,Avatar } from 'antd';
import { GithubOutlined } from '@ant-design/icons';
import {Link} from 'react-router-dom';


const { Header } = Layout;
const { Search } = Input;

const FooterView = ()=>{
  return(
    <Header className="site-layout-background">   
      <div className="navbar-left" >
        <Link to="/">
          <Avatar className="navbar-logo"  size={55} icon={<GithubOutlined />} />
        </Link>
        <label>GitHub</label>
      </div>
      <div className="navbar-right" >
       <Search placeholder="Search" style={{ width: 300 }} />
      </div>
    </Header>
  );
}
export default FooterView;