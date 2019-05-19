import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import App from './App';
import Top from './components/Top/Top';
import QnA from './components/QnA/QnA';
import Modal from './components/Modal/Modal';
import Lifelines from './components/Lifelines/Lifelines';
import classes from './App.module.css';


configure({ adapter: new Adapter() });

describe('<App />', () => {

    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<App />)
    })

    it('should render the app', () => {
        expect(wrapper.find('div.'+classes.App)).toHaveLength(1);
        expect(wrapper.find(Top)).toHaveLength(1);
        expect(wrapper.find(QnA)).toHaveLength(1);
        expect(wrapper.find(Modal)).toHaveLength(1);
        expect(wrapper.find(Lifelines)).toHaveLength(1);
    });
    


});