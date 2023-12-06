import React from 'react'
import { useAnnouncementStore } from '../../../../core/statemanagement'

const Announcement = () => {

    const {isPresent, text} = useAnnouncementStore()
    const data = [{ name: "Announcement",children:[2,3], id:1,parent: null, },{name:"text",id:2}]

  return (
    
  )
}

export default Announcement