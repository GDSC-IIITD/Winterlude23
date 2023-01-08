import React from 'react'
import CommunityComponent from '../components/community/community'
import FooterComponent from '../components/footer/footer'
import HeaderComponent from '../components/header/header'
import VenueComponent from '../components/venue/venue'

export default function Main() {
  return (
    <div>
      <HeaderComponent />
      <CommunityComponent />
      <VenueComponent />

      <FooterComponent />
    </div>
  )
}
