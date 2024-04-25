import React from 'react'
import { Card } from 'react-bootstrap'

const Newscard = ({user}) => {
  return (
    <div className='cards'>
    <Card style={{ width: '18rem' }}>
    <Card.Body>
    <img src={user.urlToImage} alt="use the link" className='image' />
    <Card.Text className='link'>{user.url}</Card.Text>
    <Card.Text className='preview'>{user.author} </Card.Text>
    <Card.Text className='domain'>{user.description} </Card.Text>
    <Card.Text className='title'> {user.title}</Card.Text>
    </Card.Body>
    </Card>
    </div>
  )
}

export default Newscard