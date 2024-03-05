import React from 'react'
import Card from 'react-bootstrap/Card';
import MyCard from './MyCard';

const Team = () => {
  return (
    <>
          <Card style={{ margin: "10px" }}>
              <Card.Body>
                  <Card.Title><h4>Team</h4></Card.Title>
                  <Card.Text>
                      Lorem ipsum dolor sit amet consectetur. Cras aliquet tristique ornare vestibulum nunc dignissim vel
                      consequat. Leo etiam nascetur bibendum amet enim sit eget leo amet. At metus orci augue fusce eleifend
                      lectus eu fusce adipiscing. 
                  </Card.Text>
                  <MyCard/>
              </Card.Body>
          </Card>
    </>
  )
}

export default Team