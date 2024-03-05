import React from 'react'
import Card from 'react-bootstrap/Card';
import MyCard from './MyCard';

const Team = () => {
  const aboutText = `Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id.
          Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet
          nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus
          gravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada etiam mi gravida praesent
          interdu`;
  return (
    <>
      <Card style={{ margin: "10px", border:"none" }}>
        <Card.Body>
          <Card.Title><h4>Team</h4></Card.Title>
          <Card.Text>
            Lorem ipsum dolor sit amet consectetur. Cras aliquet tristique ornare vestibulum nunc dignissim vel
            consequat. Leo etiam nascetur bibendum amet enim sit eget leo amet. At metus orci augue fusce eleifend
            lectus eu fusce adipiscing.
          </Card.Text>
          <MyCard image="https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?q=80&w=1868&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" name="John Smith" designation="Designation Here" about={aboutText} />
          <MyCard image="https://images.unsplash.com/photo-1588516903720-8ceb67f9ef84?q=80&w=1944&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" name="Elina Williams" designation="Designation Here" about={aboutText} />
          <MyCard image="https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?q=80&w=1868&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" name="John Smith" designation="Designation Here" about={aboutText} />
        </Card.Body>
      </Card>
    </>
  )
}

export default Team