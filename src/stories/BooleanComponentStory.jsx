import React from 'react'

import { storiesOf } from "@storybook/react";

import BooleanComponent from '../03/Counter3'


storiesOf('BooleanComponent', module)
    .addWithJSX('기본 설정',()=> <BooleanComponent count={0}/>);