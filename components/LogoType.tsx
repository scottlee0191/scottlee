'use client'
import { TypeAnimation } from 'react-type-animation'
import siteMetadata from '@/data/siteMetadata'

export default function LogoType() {
  return (
    <TypeAnimation
      sequence={[
        `<${siteMetadata.headerTitle}>`, // Types 'One'
        1000, // Waits 1s
        `<${siteMetadata.headerTitle}`, // Deletes 'One' and types 'Two'
        2000, // Waits 2s
        `<${siteMetadata.headerTitle}/>`,
        5000, // Types 'Three' without deleting 'Two
      ]}
      wrapper="span"
      cursor={true}
      repeat={Infinity}
      style={{ display: 'inline-block' }}
    />
  )
}
