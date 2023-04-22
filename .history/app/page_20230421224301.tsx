'use client'

import { Card, Divider, Subtitle, Text } from "@tremor/react"

export default function Home() {
  return (
    <main className="text-6xl">
      <Card>
        <Text className="text-6xl font-bold">Weather AI</Text>
        <Subtitle>
          Powered by OpenAI, Next.js 13.3, Tailwindcss Tremor 2.0 + More!
        </Subtitle>
      </Card>
    </main>
  )
}
