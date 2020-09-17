import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';


import SessionRoom from '../client/containers/SessionRoom'
import CodeEditor from '../client/components/CodeEditor';

// Newer Enzyme versions require an adapter to a particular version of React
configure({ adapter: new Adapter() });

describe('<SessionRoom /> ', () => {
  it ('should render one <Code Editor /> component', () => {
    const wrapper = shallow((<SessionRoom />));
    console.log(wrapper.debug())
    expect(wrapper.find(CodeEditor).to.have.lengthOf(1))
  })
})