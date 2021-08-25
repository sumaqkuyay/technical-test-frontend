import React from 'react';
import { Layout, Row, Col} from 'antd';

import FooterView from '../components/FooterView';

const { Content } = Layout;

const SearchView = ()=>{
  return(
    <Layout>
      <Content>
        <Row>
          <Col>
           <div>
           SABINA

           </div>
          </Col>
        </Row>
      </Content>
      <FooterView />
    </Layout>
  );
}
export default SearchView;
