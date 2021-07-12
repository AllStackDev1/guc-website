import React from 'react'

const useHover = () => {
  const ref = React.useRef()
  const _ref = React.useRef()
  const [hovered, setHovered] = React.useState(false)
  const enter = () => setHovered(true)
  const leave = () => setHovered(false)

  React.useEffect(() => {
    if (ref.current) {
      _ref.current = ref.current // cache external ref value for cleanup use
      ref.current.addEventListener('mouseenter', enter)
      ref.current.addEventListener('mouseleave', leave)
    }

    return () => {
      if (_ref.current) {
        _ref.current.removeEventListener('mouseenter', enter)
        _ref.current.removeEventListener('mouseleave', leave)
      }
    }
  }, [])

  return [ref, hovered]
}

export default useHover
