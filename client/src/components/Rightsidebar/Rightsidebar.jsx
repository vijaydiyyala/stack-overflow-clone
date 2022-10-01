import React from 'react'
import Widget from './Widget'
import WidgetTags from './WidgetTags'
import './Rightsidebar.css'
const Rightsidebar = () => {
  return (
    <aside className="right-sidebar">
     <Widget />
     <WidgetTags />
    </aside>
  )
}

export default Rightsidebar