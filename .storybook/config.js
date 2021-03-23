import {configure, setAddon} from "@storybook/react";
import  interopRequireDefault from 'babel-runtime/helpers/interopRequireDefault';
import JSXAddon from 'storybook-addon-jsx'

import '../src/sass/materialize.scss'

function loadStories(){
    /* context 함수로 지정해놓은 폴더 경로 정규식을 활용해 동적으로 삽입 */
    const context = require.context('../src/stories', true, /Story\.jsx$/);
    context.keys().forEach((srcFile) =>{
        interopRequireDefault(context(srcFile));
    });
    // require('../src/stories/InputStory');
    // require('../src/stories/NewCounterStory');
}
setAddon(JSXAddon);
configure(loadStories, module);