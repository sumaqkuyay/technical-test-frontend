import React from 'react';
import { Layout } from 'antd';

const { Footer } = Layout;

const FooterView = ()=>{
  return(
    <Footer>   
      <div className="site-page-footer">
        <div><strong>Copyright</strong>©2021</div>
        <div>Sumaqkuyay</div>
      </div>
    </Footer>
  );
}
export default FooterView;
