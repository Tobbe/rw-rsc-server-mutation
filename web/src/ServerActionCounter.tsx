'use client'

import { useState } from 'react'

import { mutate } from '@redwoodjs/vite/client'

interface Props {
  increment: (delta: number) => Promise<number>
}

export const ServerActionCounter = ({ increment }: Props) => {
  const [count, setCount] = useState(1)
  return (
    <div style={{ border: '3px blue dashed', margin: '1em', padding: '1em' }}>
      <h3>This is a client component.</h3>
      <p>Client count: {count}</p>
      <button onClick={() => setCount((c) => c + 1)}>
        Increment client counter
      </button>
      <p>
        <button
          onClick={() => {
            mutate(() => {
              increment(count)
            })
          }}
        >
          Increment server counter by {count}
        </button>
      </p>
    </div>
  )
}
