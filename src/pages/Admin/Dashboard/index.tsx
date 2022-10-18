import React from 'react'
import { Row, Col, Card } from 'antd';
type Props = {}

const Dashboard = (props: Props) => {
   return (
      <div><Row justify='space-between'>
         <Col span={4}>
            <Card style={{ width: 200 }}>
               <Row>
                  <Col >
                     Số lượng bài viết
                     12 bài viết
                  </Col>
               </Row>
            </Card>
         </Col>
         <Col span={4}>
            <Card style={{ width: 200 }}>
               <Row>
                  <Col >
                     Số lượng bài viết
                     12 bài viết
                  </Col>
               </Row>
            </Card>
         </Col>
         <Col span={4}>
            <Card style={{ width: 200 }}>
               <Row>
                  <Col >
                     Số lượng bài viết
                     12 bài viết
                  </Col>
               </Row>
            </Card>
         </Col>
         <Col span={4}>
            <Card style={{ width: 200 }}>
               <Row>
                  <Col >
                     Số lượng bài viết
                     12 bài viết
                  </Col>
               </Row>
            </Card>
         </Col>
      </Row>
         <Row justify='space-between' style={{ marginTop: 10 }}>
            <Col span={8}>
               <Card style={{ width: 700, height: 300 }}></Card>
            </Col>
            <Col span={8}>
               <Card style={{ width: 400, height: 300 }}></Card>
            </Col>
         </Row></div>
   )
}

export default Dashboard