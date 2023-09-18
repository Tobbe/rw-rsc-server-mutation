'use server'

// module state on server
let counter = 0

export const getCounter = () => counter

export const increment = async (delta: number) => {
  console.log('delta', delta)
  counter += delta || 1
}
