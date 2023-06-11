import React from 'react';
import { useDispatch } from 'react-redux';
import { chooseClothesAction } from '../Redux/actions/actions';
import { Button,Alert,Card, Col, Container, Navbar, Nav, NavDropdown} from 'react-bootstrap';
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import DressingRoom from '../DressingRoom/DressingRoom';
export default function Cover() {
  const fs = require('fs');
  const imgUpload = (e) => {
    let file = e.target.files[0]
    let reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = function (e) {
      let src = e.target.result
      console.log(src)
      dealImage(src)
    }
  }
  const dealImage = (src) => {
    let image = new Image()
    image.src = src
    image.onload = function () {
      // 通過 Canvas 操作來處理圖片
      compressImage(image)
    }
  }
  const compressImage = (image) => {
    // 建立 canvas 節點
    let canvas = document.createElement('canvas')
    // 獲取 canvas 操作物件
    let ctx = canvas.getContext('2d')
  
    // 讀取原始圖片尺寸
    let imageW = image.width, imageH = image.height
    // 指定輸出圖片尺寸, 按比例，比如限制寬是1024
    let afterW = 1024, afterH = afterW * imageH / imageW
  
    // 設定 canvas 畫布大小
    canvas.width = imageW
    canvas.height = imageH
  
    // -----進行處理
    // 壓縮到指定尺寸
    // drawImage(image, dx, dy, dWidth, dHeight)
    ctx.drawImage(image, 0, 0, 500, 500)
  
    // -----輸出結果
    // 型別預設png，可選jpeg、webp
    // - 獲取處理後的 base64 資料
    let data = canvas.toDataURL('image/jpeg', 0.8)
    //console.log(data)
    fs.writeFile("public/images/upload.png", data);
  
    // - 轉成 blob 並在回撥中進行下一步操作
    canvas.toBlob(function (blob) {
      // 操作 blob，做上傳之類的
      //console.log(blob)
      //fs.writeFileSync("public/images/upload.png", blob);
    }, 'image/webp', 0.8)
  }

    return (
      <BrowserRouter>
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="#home">Virtual DressingRoom</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/DressingRoom">進入試衣間</Nav.Link> 
                <Nav.Link href="https://kzyjj.github.io/backgroundrm_test/" target="_blank">去背相片</Nav.Link>
              </Nav>
              <NavDropdown title="上傳你的衣服" id="basic-nav-dropdown">
                <NavDropdown.Item>上傳上、下身 : 
                  <div className="input">
                      <input type="file" onClick={(e) => e.stopPropagation()} accept=".jpg, .png" id="imageUpLoad" name="imageUpLoad" onChange={imgUpload} />
                  </div>
                </NavDropdown.Item>
                <NavDropdown.Item>上傳鞋子、包包 : 
                  <div className="input">
                      <input type="file" onClick={(e) => e.stopPropagation()} accept=".jpg, .png" id="imageUpLoad" name="imageUpLoad" onChange={imgUpload} />
                  </div></NavDropdown.Item>
                </NavDropdown>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Container>
            <div>
              <Routes>
                <Route path="/DressingRoom" element={<DressingRoom/>}/>
              </Routes>
            </div>
      </Container>
      </BrowserRouter>
    );
  }