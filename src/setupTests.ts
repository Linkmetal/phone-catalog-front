/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-explicit-any */
// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom'
import 'jest-axe/extend-expect'
import 'jest-location-mock'

class ResizeObserver {
  cb: any

  constructor(cb: any) {
    this.cb = cb
  }

  observe() {
    this.cb([{ borderBoxSize: { inlineSize: 0, blockSize: 0 } }])
  }

  unobserve() {}

  disconnect() {}
}

global.ResizeObserver = ResizeObserver
