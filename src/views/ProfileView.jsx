import React from 'react';
import { Layout, Avatar,Typography, Tag } from 'antd';
import { UserOutlined, StarOutlined, TwitterOutlined, TeamOutlined, HomeOutlined } from '@ant-design/icons';
import profile from '../images/logotipo-de-github.svg';
import FooterView from '../components/FooterView';
import HeaderView from '../components/HeaderView';


const { Content } = Layout;

const ProfileView = ()=>{
  return(
    <Layout className="layout-view">
      <HeaderView/>
        <Content className="site-content-view">
          <div className="content-card">
            <div className="user-profile">
              <Avatar className="user-image" src={profile}  size={200} icon={<UserOutlined />} />
              <Typography.Text className="name"> Sabina Canchumani Huaman</Typography.Text>
              <Typography.Text className="nickname"> Sumaqkuyay</Typography.Text> 
            </div>
            <div className="user-body">
              <Typography.Text className="bio">Front-end Developer -Laboratoria </Typography.Text> 
              <div>
                <Tag icon={<TeamOutlined/>} color="#0d111796">
                  30 followers
                </Tag>
                <Tag color="#0d111796">
                  17 following
                </Tag>
                <Tag icon={<StarOutlined />} color="#0d111796">
                  1
                </Tag>
              </div>
              <div>
                <Tag icon={<TwitterOutlined />} color="#0d111796">
                  @sumaqkuyay
                </Tag>
                <Tag icon={<HomeOutlined/>} color="#0d111796">
                  Lima,Perú
                </Tag>
              </div>
            </div>
          </div>
        </Content>
      <FooterView />
    </Layout>
  );
}
export default ProfileView;
