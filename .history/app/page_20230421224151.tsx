'use client'

import { Card, Divider, Subtitle, Text } from "@tremor/react"

export default function Home() {
  return (
    <main className="text-6xl">
      <Card>
        <Text>Weather AI</Text>
        <Subtitle>
          Powered by OpenAI, Next.js 13.3, Tailwindcss 
        </Subtitle>
      <h1>Lets build a AI weather App</h1>
      </Card>
    </main>
  )
}
