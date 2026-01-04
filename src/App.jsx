import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import { Container, Navbar, Nav, Card, Button, Row, Col, ProgressBar, Form, InputGroup } from 'react-bootstrap';
import './App.css';

// Mock Data
const posts = [
  {
    id: 1,
    sme: "ก๋วยเตี๋ยวป้าณี",
    title: "เป้าหมายในการระดมทุน: เปิดสาขาสองที่เชียงใหม่",
    description: "ป้าใคร่แอ่วเจียงใหม่ขนาดเจ้า ต้องการเงินทุนเพื่อขยายรสชาติก๋วยเตี๋ยวสูตรดั้งเดิมให้ชาวเชียงใหม่ได้ลิ้มลอง",
    logo: "https://api.dicebear.com/7.x/initials/svg?seed=PN&backgroundColor=ff6b6b",
    raised: 2690,
    target: 120000
  },
  {
    id: 2,
    sme: "สวนทุเรียนลุงสม",
    title: "เป้าหมายในการระดมทุน: ติดตั้งระบบรดน้ำอัตโนมัติ",
    description: "ช่วยลุงประหยัดแรงและเพิ่มผลผลิตทุเรียนหมอนทองเกรดพรีเมียมด้วยเทคโนโลยี Smart Farming",
    logo: "https://api.dicebear.com/7.x/initials/svg?seed=LS&backgroundColor=4ecdc4",
    raised: 45000,
    target: 80000
  },
  {
    id: 3,
    sme: "คาเฟ่แมวเหมียว",
    title: "เป้าหมายในการระดมทุน: ขยายโซนที่นั่งและซื้อเครื่องชงกาแฟใหม่",
    description: "น้องแมวต้องการบ้านที่กว้างขึ้น และเราต้องการเสิร์ฟกาแฟรสชาติเยี่ยมให้คนรักแมวทุกท่าน",
    logo: "https://api.dicebear.com/7.x/initials/svg?seed=MM&backgroundColor=feca57",
    raised: 15000,
    target: 50000
  },
  {
    id: 4,
    sme: "ฟาร์มผักไฮโดร",
    title: "เป้าหมายในการระดมทุน: สร้างโรงเรือนเพิ่มรองรับความต้องการ",
    description: "ปลูกผักสลัดออร์แกนิก ปลอดสารพิษ เพื่อสุขภาพที่ดีของคนในชุมชน",
    logo: "https://api.dicebear.com/7.x/initials/svg?seed=HF&backgroundColor=1dd1a1",
    raised: 5000,
    target: 30000
  }
];

const Layout = ({ children }) => (
  <>
    <Navbar bg="white" expand="lg" className="shadow-sm sticky-top mb-4">
      <Container>
        <Navbar.Brand as={Link} to="/">7ว่าดัด</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">หน้าแรก</Nav.Link>
            <Nav.Link as={Link} to="/login">เข้าสู่ระบบ</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    {children}
    <button className="faq-button">คำถามที่พบบ่อย (FAQ)</button>
  </>
);

const LandingPage = () => (
  <Layout>
    <Container>
      <div className="text-center mb-5">
        <h1 className="fw-bold">ร่วมสนับสนุน SME ไทยให้เติบโต</h1>
        <p className="text-muted">7ว่าดัด - แพลตฟอร์มระดมทุนเพื่อความฝันของธุรกิจขนาดเล็ก</p>
      </div>
      <Row>
        {posts.map(post => (
          <Col md={6} lg={6} key={post.id} className="mb-4">
            <Card className="h-100 p-3">
              <div className="d-flex align-items-center mb-3">
                <img src={post.logo} alt={post.sme} style={{ width: '60px', height: '60px', borderRadius: '12px', marginRight: '15px' }} />
                <h5 className="mb-0 fw-bold">{post.sme}</h5>
              </div>
              <Card.Body className="p-0">
                <Card.Title className="text-primary fs-5">{post.title}</Card.Title>
                <Card.Text className="text-muted">{post.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  </Layout>
);

const LoginPage = () => {
  const navigate = useNavigate();
  return (
    <Layout>
      <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '70vh' }}>
        <Card style={{ maxWidth: '450px', width: '100%' }} className="p-4 text-center">
          <h2 className="mb-4 fw-bold">เข้าสู่ระบบ</h2>
          <Button 
            variant="outline-primary" 
            className="mb-3 py-3 w-100 text-start d-flex align-items-center"
            onClick={() => navigate('/sme-admin')}
          >
            <i className="bi bi-shop me-3 fs-4"></i>
            <div>
              <div className="fw-bold">Login สำหรับผู้ระดมทุน</div>
              <small>(ก๋วยเตี๋ยวป้าณี)</small>
            </div>
          </Button>
          <Button 
            variant="outline-info" 
            className="py-3 w-100 text-start d-flex align-items-center"
            onClick={() => navigate('/investor')}
          >
            <i className="bi bi-graph-up-arrow me-3 fs-4"></i>
            <div>
              <div className="fw-bold">Login สำหรับนักลงทุน</div>
              <small>(Mr. Ruay)</small>
            </div>
          </Button>
        </Card>
      </Container>
    </Layout>
  );
};

const SMEAdminPage = () => {
  const myPost = posts[0];
  return (
    <Layout>
      <Container>
        <Row>
          <Col lg={4}>
            <Card className="p-4 mb-4">
              <div className="text-center mb-3">
                <img src={myPost.logo} alt="Logo" className="mb-3" style={{ width: '100px', borderRadius: '20px' }} />
                <h3>{myPost.sme}</h3>
                <p className="badge bg-success">ผู้ระดมทุนตรวจสอบแล้ว</p>
              </div>
              <hr />
              <div className="mb-3">
                <h6>สถานะการระดมทุน</h6>
                <div className="d-flex justify-content-between mb-1">
                  <span>฿{myPost.raised.toLocaleString()}</span>
                  <span>เป้าหมาย ฿{myPost.target.toLocaleString()}</span>
                </div>
                <ProgressBar now={(myPost.raised / myPost.target) * 100} variant="info" />
              </div>
            </Card>
            
            <Card className="p-3 mb-4">
              <h5>ข้อมูลธุรกิจ (Dashboard)</h5>
              <div className="mt-2">
                <div className="d-flex justify-content-between"><small>ยอดขายเดือนที่แล้ว:</small> ฿45,000</div>
                <div className="d-flex justify-content-between"><small>จำนวนลูกค้าประจำ:</small> 120 คน</div>
                <div className="d-flex justify-content-between"><small>คะแนนรีวิว:</small> 4.8/5.0</div>
              </div>
            </Card>
          </Col>
          
          <Col lg={8}>
            <Card className="p-4 mb-4">
              <div className="d-flex justify-content-between align-items-start mb-3">
                <h4 className="fw-bold">โพสต์ปัจจุบันของคุณ</h4>
                <Button variant="warning" size="sm">แก้ไขโพสต์</Button>
              </div>
              <h5 className="text-primary">{myPost.title}</h5>
              <p>{myPost.description}</p>
              <hr />
              <div className="bg-light p-3 rounded d-flex justify-content-between align-items-center">
                <span>โฆษณาโพสต์นี้ เพื่อให้คนเห็นเยอะขึ้น</span>
                <Button variant="primary">Boost Post</Button>
              </div>
            </Card>

            <h4 className="mb-3 fw-bold">สถิติการเข้าชม</h4>
            <Card className="p-4">
              <Row className="text-center">
                <Col>
                  <div className="fs-2 fw-bold">1,250</div>
                  <small className="text-muted">คนเห็นโพสต์</small>
                </Col>
                <Col>
                  <div className="fs-2 fw-bold text-success">85</div>
                  <small className="text-muted">ความสนใจ</small>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

const InvestorPage = () => (
  <Layout>
    <Container fluid>
      <Row>
        <Col md={3} lg={2} className="d-none d-md-block">
          <div className="p-3 bg-white rounded shadow-sm">
            <h6 className="fw-bold mb-3">ฟีเจอร์สำหรับคุณ</h6>
            <Nav className="flex-column">
              <Nav.Link className="px-0"><i className="bi bi-mortarboard me-2"></i> สอนการลงทุนอย่างถูกต้อง</Nav.Link>
              <Nav.Link className="px-0"><i className="bi bi-arrow-left-right me-2"></i> หุ้นกู้ตลาดรอง</Nav.Link>
              <Nav.Link className="px-0 text-danger"><i className="bi bi-star me-2"></i> รายการโปรด</Nav.Link>
            </Nav>
            <hr />
            <h6 className="fw-bold mb-3">ตัวกรอง (Filter)</h6>
            <Form.Check type="checkbox" label="อาหารและเครื่องดื่ม" className="mb-2" defaultChecked />
            <Form.Check type="checkbox" label="เกษตรกรรม" className="mb-2" />
            <Form.Check type="checkbox" label="บริการ" className="mb-2" />
          </div>
        </Col>
        
        <Col md={9} lg={10}>
          <InputGroup className="mb-4">
            <InputGroup.Text className="bg-white border-end-0"><i className="bi bi-search"></i></InputGroup.Text>
            <Form.Control placeholder="ค้นหาโอกาสในการลงทุน..." className="border-start-0" />
          </InputGroup>

          <Row>
            {posts.map(post => (
              <Col lg={12} key={post.id} className="mb-4">
                <Card className="p-4">
                  <Row>
                    <Col md={8}>
                      <div className="d-flex align-items-center mb-3">
                        <img src={post.logo} alt={post.sme} style={{ width: '50px', borderRadius: '10px', marginRight: '15px' }} />
                        <h5 className="mb-0 fw-bold">{post.sme}</h5>
                      </div>
                      <h5 className="text-primary">{post.title}</h5>
                      <p className="text-muted small mb-3">{post.description}</p>
                      
                      <div className="bg-light p-3 rounded mb-3">
                        <h6 className="small fw-bold mb-2">ข้อมูลธุรกิจพื้นฐาน:</h6>
                        <Row>
                          <Col xs={4}><small className="d-block text-muted">กำไรสุทธิ:</small> 15%</Col>
                          <Col xs={4}><small className="d-block text-muted">ระยะเวลาคืนทุน:</small> 18 เดือน</Col>
                          <Col xs={4}><small className="d-block text-muted">ความเสี่ยง:</small> ต่ำ</Col>
                        </Row>
                      </div>
                    </Col>
                    <Col md={4} className="border-start ps-4">
                      <div className="mb-3">
                        <div className="d-flex justify-content-between small mb-1">
                          <span className="fw-bold">ยอดระดมทุนปัจจุบัน</span>
                          <span className="text-primary">{Math.round((post.raised / post.target) * 100)}%</span>
                        </div>
                        <ProgressBar now={(post.raised / post.target) * 100} style={{ height: '8px' }} />
                        <div className="mt-2 text-end">
                          <span className="fw-bold">฿{post.raised.toLocaleString()}</span>
                          <small className="text-muted"> / ฿{post.target.toLocaleString()}</small>
                        </div>
                      </div>
                      <Button variant="primary" className="w-100 mt-2">ดูรายละเอียด & ลงทุน</Button>
                    </Col>
                  </Row>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  </Layout>
);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/sme-admin" element={<SMEAdminPage />} />
        <Route path="/investor" element={<InvestorPage />} />
      </Routes>
    </Router>
  );
}

export default App;