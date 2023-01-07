import React from 'react'
import CommunityComponent from '../components/community/community'
import FooterComponent from '../components/footer/footer'
import HeaderComponent from '../components/header/header'

export default function Main() {
  return (
    <div>
      <CommunityComponent />
      <HeaderComponent />

      <FooterComponent />
    </div>
  )
}
