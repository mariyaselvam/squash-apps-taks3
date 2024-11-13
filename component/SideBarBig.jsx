import React from 'react'

import Accordion from 'react-bootstrap/Accordion';

const SideBarBig = () => {
  return (
   <>
    <div className="sidebar-big-one-sec">
      <h3 className="sidebar-big-one-sec-tit">
      Projects️
      </h3>

    <Accordion defaultActiveKey={['0' , '1']} alwaysOpen>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Projects</Accordion.Header>
        <Accordion.Body>
          <ul className="sidebar-big-one-ul-checks">
            <li>All projects (3)</li>
            <li>Design system</li>
            <li>User flow</li>
            <li>Ux research</li>
          </ul>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Tasks</Accordion.Header>
        <Accordion.Body>
          <ul className="sidebar-big-one-ul-checks">
            <li>All tasks (11)</li>
            <li>To do (4)</li>
            <li>In progress (4)</li>
            <li>Done (3)</li>
          </ul>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Reminders</Accordion.Header>
        <Accordion.Body>
          <ul className="sidebar-big-one-ul-checks">
            <li>All tasks (11)</li>
            <li>To do (4)</li>
            <li>In progress (4)</li>
            <li>Done (3)</li>
          </ul>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>Messengers</Accordion.Header>
        <Accordion.Body>
          <ul className="sidebar-big-one-ul-checks">
            <li>All tasks (11)</li>
            <li>To do (4)</li>
            <li>In progress (4)</li>
            <li>Done (3)</li>
          </ul>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </div>

   
   </>
  )
}

export default SideBarBig