import React from 'react'
import useMatchParams from '../../hooks/useMatchParams'

const withParams = (WrappedComponent) => ({initialCount, ...props}) => {
  const paramsProps = useMatchParams(initialCount)
  return <WrappedComponent {...props} {...paramsProps} />
}

export default withParams
