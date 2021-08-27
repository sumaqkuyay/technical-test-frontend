import React,{useState,useEffect}from 'react';
import { Layout, Row, Col, Input,Avatar} from 'antd';
import { GithubOutlined } from '@ant-design/icons';
import axios from 'axios';
import FooterView from '../components/FooterView';
import logoGithub from '../images/logo-github.png';

const { Content } = Layout;

const { Search } = Input;

const SearchView = ()=>{

  const [userName,setUserName]= useState("");
  const [listUserName,setListUserName]= useState([]);

  const apiUser=`https://api.github.com/search/users?q="${userName}"&per_page=5`;

  const searchUsers = async () => {
    await axios.get(apiUser)
    .then(response=>{
      if( response.status === 200){
        return response.data;
      }else{
        console.log("retorno github",response.data);
      }
    })
    .then(response=>{
      // console.log(response.items)
      // console.log( Object.values(response.items));
     
      setListUserName([...response.items]);
    })
    .catch(error=>{
      console.log(error);
    })
  };



  return(
    <Layout className="section-view">
      <Content>
        <Row>
          <Col span={24}>
           <div className="content-view">
             <img className="logo-github" src={logoGithub} alt="logo"/>
            {/* <Avatar size={550} icon={<GithubOutlined />} /> */}
            <Search className="search" placeholder="Search users" style={{ width: 300 }} value={userName} onChange={e=>{setUserName(e.target.value); searchUsers();}} />
            <div className="content-list">
              <ul>
               {listUserName.map(element=>{
                 return(
                   <li key={element.id} onClick={()=> window.location.href=`#/${element.login}`}>{element.login}</li>
                 );
                })
               }
              </ul>
            </div>
           </div>
          </Col>
        </Row>
      </Content>
      <FooterView />
    </Layout>
  );
}
export default SearchView;
