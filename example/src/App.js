import React from 'react'

import { toasty } from 'web-toasty'

const App = () => {
  toasty('this is a toast message ✅', 1000)
  return <div></div>
}

export default App
