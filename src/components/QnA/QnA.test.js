import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import QnA from './QnA';
import classes from './QnA.module.css';

const myMock = jest.fn();

configure({ adapter: new Adapter() });

describe('<QnA />', () => {

    let wrapper;
    let mock = new myMock();
    let qu ={
        question: "test question",
        A: 'test A',
        B: 'test B',
        C: 'test C',
        D: 'test D',
        answer: 'A'
    };
    beforeEach(() => {
        wrapper = mount(<QnA
            question={qu}
            answer={mock}
            correct={null}
            disabled={[]}
            suggested=''
            ></QnA>)
    })

    it('should render a question', () => {
        expect(wrapper.find('div.'+classes.Question)).toHaveLength(1);
    });
    it('should render 4 alternatives', () => {
        expect(wrapper.find('div.'+classes.Answer)).toHaveLength(4);
        expect(wrapper.find('div.'+classes.Disabled)).toHaveLength(0);
        expect(wrapper.find('div.'+classes.Suggested)).toHaveLength(0);
    });
    it('should disable some alternatives and highlight the correct answer', () => {
        let newDisabled = ["A", "C"];
        wrapper.setProps({disabled: newDisabled, suggested: 'B'});
        expect(wrapper.find('div.'+classes.Disabled)).toHaveLength(2);
        expect(wrapper.find('div.'+classes.Suggested)).toHaveLength(1);
    });

});