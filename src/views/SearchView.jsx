import React from 'react';
import { Layout, Row, Col, Input,Avatar} from 'antd';
import { GithubOutlined } from '@ant-design/icons';
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
            <Avatar size={550} icon={<GithubOutlined />} />
            <Search className="search" placeholder="Search" style={{ width: 300 }} />
           </div>
          </Col>
        </Row>
      </Content>
      <FooterView />
    </Layout>
  );
}
export default SearchView;
