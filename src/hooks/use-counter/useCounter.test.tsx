import { renderHook, act } from '@testing-library/react'
import { useCounter } from './useCounter'

describe('useCounter', () => {
  test('should render the initial count', () => {
    const { result } = renderHook(useCounter) // renderHook untuk return yg bukan react component
    expect(result.current.count).toBe(0)
  })

  test('should accept and render the same initial count', () => {
    const { result } = renderHook(useCounter, {
      initialProps: { initialCount: 10 }, // initialProps untuk define props yg dibutuhkan
    })
    expect(result.current.count).toBe(10)
  })

  test('should increment the count', () => {
    const { result } = renderHook(useCounter)
    act(() => result.current.increment()) // untuk mengeksekusi function dalam react custom hook membutuhkan act dari react testing library
    expect(result.current.count).toBe(1)
  })

  test('should decrement the count', () => {
    const { result } = renderHook(useCounter)
    act(() => result.current.decrement())
    expect(result.current.count).toBe(-1)
  })
})