import React from 'react'
import Hero from './Hero'
import AnimeGrid from './AnimeGrid'

export default function Home({ onStart }) {
  return (
    <main>
      <Hero onStart={onStart} />
      <AnimeGrid sectionId="popular" title="Popular Now" />
      <AnimeGrid sectionId="new" title="New This Week" />
    </main>
  )
}
