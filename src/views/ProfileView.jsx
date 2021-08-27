import React ,{useEffect, useState}from 'react';
import { Layout, Avatar,Typography, Tag } from 'antd';
import { UserOutlined, BookOutlined, TwitterOutlined, TeamOutlined, HomeOutlined } from '@ant-design/icons';
import axios from 'axios';
import profile from '../images/logotipo-de-github.svg';
import FooterView from '../components/FooterView';
import HeaderView from '../components/HeaderView';


const { Content } = Layout;

const apiInfoUser = `https://api.github.com/users/`;


const ProfileView = ()=>{

const [infoProfile,setInfoProfile] = useState({});  

  const getProfile = (userName) => {
    axios.get(`${apiInfoUser}${userName}`)
    .then(response=>{
      if( response.status === 200){
        return response.data;
      }else{
        console.log("retorno github",response.data);
      }
    })
    .then(response=>{
      console.log(response);
      setInfoProfile({...response});
    })
    .catch(error=>{
      console.log(error);
    })
  };

  useEffect(()=>{
    const userName = (window.location.href).split("#/")[1];
    getProfile(userName);
  }
  ,[]);

  return(
    <Layout className="layout-view">
      <HeaderView/>
        <Content className="site-content-view">
          <div className="content-card">
            <div className="user-profile">
              <Avatar className="user-image" src={profile}  size={200} icon={<UserOutlined />} />
              <Typography.Text className="name">{infoProfile.name}</Typography.Text>
              <Typography.Text className="nickname">{infoProfile.login}</Typography.Text> 
            </div>
            <div className="user-body">
              <Typography.Text className="bio">{infoProfile.bio}</Typography.Text> 
              <div>
                <Tag icon={<TeamOutlined/>} color="#0d111796">
                  {infoProfile.followers} followers
                </Tag>
                <Tag color="#0d111796">
                  {infoProfile.following} following
                </Tag>
                <Tag icon={<BookOutlined />} color="#0d111796">
                  {infoProfile.public_repos} Public Repositories 
                </Tag>
              </div>
              <div>
                <Tag icon={<TwitterOutlined />} color="#0d111796">
                  @{infoProfile.twitter_username}
                </Tag>
                <Tag icon={<HomeOutlined/>} color="#0d111796">
                {infoProfile.location}
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
