import React from 'react'
import { storieOf } from '@storybook/react'

import HomePageComponent from '../06/HomePageComponent'
import HomePageWithProvider from '../06/HomePageWithProvider'

storieOf('HomePageComponent', module).addWithJSX('컨텍스트 예제', () => (
  <HomePageComponent />
))
// .addWithJSX('Provider 예제', () => <HomePageWithProvider />)
