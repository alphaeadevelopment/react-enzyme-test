/* globals describe, it */
import React from 'react'
import chai, { expect } from 'chai'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import chaiEnzyme from 'chai-enzyme'
import sinon from 'sinon';
import sinonChai from 'sinon-chai';

import App from './App'

chai.use(chaiEnzyme()) // Note the invocation at the end
chai.use(sinonChai);

Enzyme.configure({ adapter: new Adapter() })

describe('<App />', () => {
  it('renders', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).to.exist;
  })
  it('renders <p> and <button>', () => {
    const wrapper = shallow(<App count={5} />);
    expect(wrapper.find('p')).to.exist;
    expect(wrapper.find('p').text()).to.equal('5')
    expect(wrapper.find('button')).to.exist;
  })
  it('invokes tick when button clicked', () => {
    const tickSpy = sinon.spy();
    const wrapper = shallow(<App tick={tickSpy} />);
    wrapper.find('button').simulate('click');
    expect(tickSpy).to.have.been.called;
  })
})
