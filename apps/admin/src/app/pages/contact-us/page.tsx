import React from 'react'
import { HeroContentLeft } from '@/components/Pages/HeroContentLeft'
import { ContactUs } from '@/components/Pages/ContactUs'


export default function ContactPage() {
  return (<>

    <HeroContentLeft
      title="Contact us"
      description="We provide the best solutions for your business needs. Explore our services and get started today."

      backgroundImage="https://example.com/path/to/your/image.jpg"
      defaultBackgroundImage="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
    />
    <ContactUs />
  </>

  )
}
