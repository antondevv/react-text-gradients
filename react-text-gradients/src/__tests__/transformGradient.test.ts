import '@testing-library/jest-dom'
import {
  toGradientStyle,
  toLinearStyle,
  toRadialStyle,
  directions,
  defaultStyles,
} from '../helpers'

describe('transformGradient function', () => {
  test.each(directions)(
    'should transform linear gradient into valid inline css',
    dir => {
      const style = toGradientStyle([dir, '#fff, #000'], 'linear', 'black')
      expect(style).toStrictEqual({
        ...defaultStyles,
        backgroundColor: 'black',
        backgroundImage: `linear-gradient(${dir}, #fff, #000)`,
      })
    }
  )

  test('should transform radial gradient into valid inline css', () => {
    const style = toGradientStyle(['#fff, #000'], 'radial', 'black')
    expect(style).toStrictEqual({
      ...defaultStyles,
      backgroundColor: 'black',
      backgroundImage: `radial-gradient(#fff, #000)`,
    })
  })

  test('should transform radial gradient into valid inline css using no fallback color', () => {
    const style = toGradientStyle(['#fff, #000'], 'radial')
    expect(style).toStrictEqual({
      ...defaultStyles,
      backgroundImage: `radial-gradient(#fff, #000)`,
    })
  })
})

describe('toLinearStyle function', () => {
  test('toLinearStyle should fail', () => {
    expect(() => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      toLinearStyle(['', ''])
    }).toThrow()
  })
})

describe('toRadialStyle function', () => {
  test('toRadialStyle should fail', () => {
    expect(() => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      toRadialStyle('')
    }).toThrow()
  })
})
