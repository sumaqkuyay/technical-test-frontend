import React from 'react';
import { Layout, Row, Col, Input} from 'antd';
import imgGithub from '../images/logotipo-de-github.svg';

import FooterView from '../components/FooterView';

const { Content } = Layout;

const { Search } = Input;

const SearchView = ()=>{
  return(
    <Layout className="section-view">
      <Content>
        <Row>
          <Col span={24}>
           <div className="content-view">
            <img className="img-logo" src={imgGithub}  alt="logo" />
            <Search placeholder="Search" style={{ width: 200 }} />
           </div>
          </Col>
        </Row>
      </Content>
      <FooterView />
    </Layout>
  );
}
export default SearchView;
