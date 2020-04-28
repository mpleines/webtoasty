import React from 'react'
import ReactDOM from 'react-dom'
import { useSpring, animated } from 'react-spring'
export const ToastyContainer = ({ props }) => {
  const { text } = props
  const styles = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    display: 'inline-block',
    minWidth: '300px',
    background: '#333333',
    padding: '6px 9px 6px 9px',
    margin: '0 auto',
    color: 'white',
    textAlign: 'center',
    position: 'fixed',
    bottom: 0,
    marginBottom: '20px'
  })
  return <animated.div style={styles}>{text}</animated.div>
}

const createCenterDiv = () => {
  let container = document.createElement('div')
  container.style.display = 'flex'
  container.style.width = '100vw'
  container.style.justifyContent = 'center'
  container.style.alignItems = 'center'
  return container
}

export const toasty = (text, duration) => {
  let container = createCenterDiv()
  document.body.appendChild(container)
  ReactDOM.render(<ToastyContainer props={{ duration, text }} />, container)
  // unmounting the component
  setTimeout(() => {
    ReactDOM.unmountComponentAtNode(container)
  }, duration)
}
