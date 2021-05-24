import React from 'react'

export default function withHoc(WrapperdComponent) {
  return class WithHoc extends React.Component {
    render() {
      return <WrapperdComponent></WrapperdComponent>
    }
  }
}
