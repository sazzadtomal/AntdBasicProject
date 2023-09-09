import React from 'react';
import { useState } from 'react';

import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Button, Layout, Menu, theme } from 'antd';
import { Col, Row } from 'antd';


const { Header, Content, Footer, Sider } = Layout;









function App() {

  const [open,setOpen]=useState()




  const {
    token: { colorBgContainer },
  } = theme.useToken();


  console.log(open)


  return (
    
    <Layout className='min-h-screen w-5/6 m-auto '>
      
        <Header className='bg-sky-400'
        > <div style={{position:"static"}} onClick={()=>setOpen(prev=>!prev)}>Click Me</div>
         </Header>
       
       
        <Content style={{flexGrow:1,margin: '24px 16px 0',}}> 

        
      <Layout className='h-2'>
          <Sider width={240} className='mySider bg-black'
              breakpoint="lg"
              trigger={null}
              collapsed={!open}
              collapsedWidth="0"
              onBreakpoint={(broken) => {
              setOpen(!broken)
              }}
              onCollapse={(collapsed, type) => {
              setOpen(!collapsed)
        }}
        > 
      <div className='text-5xl' >Sidebar</div>
      <Menu
          className='mt-16'
          theme="light"
          mode="inline"
          defaultSelectedKeys={['4']}
          items={[UserOutlined, VideoCameraOutlined, UploadOutlined, UserOutlined].map(
            (icon, index) => ({
              key: String(index + 1),
              icon: React.createElement(icon),
              label: `nav ${index + 1}`,
            }),
          )}
        />
       </Sider>

       <div className='w-full  bg-white' >
            
       <Row>
         <Col className= 'h-24 bg-gray-400' span={24}>col</Col>
       </Row>
       <Row>
       <Col className= 'h-48 bg-gray-400' span={8}>col</Col>
       <Col className= 'h-48 bg-gray-400' span={8}>col</Col>
       <Col className= 'h-48 bg-gray-400' span={8}>col</Col>
       <Col className= 'h-48 bg-gray-400' span={8}>col</Col>
       
     
       </Row>
          
          
          
          </div>



          </Layout>



          
        </Content>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          Ant Design ©2023 Created by Ant UED
        </Footer>
      </Layout>
  






  );
}

export default App;
