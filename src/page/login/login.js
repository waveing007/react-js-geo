import React, { Component } from 'react';
import './login.css';
export default class Login extends Component {

  render() {
    return (
      <>
        <div className="bg">
          <div className="container-login" >
            <div className="row" style={{ width: '100%' }}>
              <div className="card card-login-content col-8">
                <p className="font-h1" style={{ marginTop: 50 }}>Development of a database system for underwater mapping <br /> Case study : water sources in university of phayao </p>
                <p className="font-h2">การพัฒนาระบบฐานข้อมูลแผนที่ใต้น้ำ  กรณีศึกษาแหล่งน้ำมหาวิทยาลัยพะเยา</p>
                <div className="font-content" style={{ padding: 75 }}>
                  <p>ปัจจุบัน อ่างหลวงสร้างขึ้นเพื่อการกักเก็บน้ำและยังเป็นแหล่งลองรับน้ำฝนที่ไหลลงมาจากภูเขา น้ำ    จากอ่างหลวงยังเป็นการนำน้ำมาใช้ในการสาธารณูประโภคและการแปรผันนำน้ำอ่างหลวงมาใช้ในมหาวิทยาลัยพะเยาเป็นแหล่งทรัพยากรธรรมชาติและผลผลิตธรรมชาติที่มนุษย์เข้าไปเก็บเกี่ยวใช้ผลประโยชน์จากแหล่งน้ำอีกด้วย โดยแหล่งน้ำที่ทางผู้จัดทำ จะทำการสำรวจความลึกของอ่างหลวงเพราะทุกวันนี้อ่างหลวงมีขนาดที่กว้างขึ้นและมีปริมาณน้ำที่เพิ่มขึ้นตามฤดูการณ์</p>
                </div>
                <p className="font-version">version : 1.0</p>
              </div>
              <div className="card card-login-login col" style={{ marginLeft: 20 }} >
                <div className="container">
                  <div className="row">
                    <div className="img-center">
                      <div className="logoUP " ></div>
                    </div>
                  </div>
                  <div className="row" style={{ marginTop: 50 }}>
                    <input className="form-control" id="username" placeholder="username" type="text" />
                    <input className="form-control" id="password" placeholder="password" type="password" style={{ marginTop: 30 }} />
                    <div className="container" style={{ marginTop: 30, marginLeft: 10 }}>
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <span className="form-check-label">Remember me</span>
                    </div>
                  </div>
                  <div className="row">
                    <button className="btn btn-login">
                      Login
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}

