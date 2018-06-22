import Enzyme from 'enzyme';

import EnzymeAdapter from 'enzyme-adapter-react-16';

import { shallow, mount, render } from 'enzyme';
import React from 'react';

Enzyme.configure({adapter: new EnzymeAdapter()});

global.shallow = shallow;
global.render = render;
global.mount = mount;
global.React = React;
