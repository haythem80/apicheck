import React from 'react'
import Newscard from './Newscard'

const Newslist = ({list}) => {
    console.log(list)
  return (
    <div className='card'>
    {
      React.Children.toArray(list.map(el => <Newscard user={el}/>))
      
    }
    </div>
  )
}

export default Newslist
