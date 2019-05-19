import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Top from './Top';
import classes from './Top.module.css';

configure({ adapter: new Adapter() });

describe('<Top />', () => {

    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Top
            levels={Array(15)
                .fill(0)
                .map((el, i) => i + 1)
            }
            level={1}
        />)
    })

    it('should render one picture', () => {
        expect(wrapper.find("img")).toHaveLength(1);
    });

    it('should render the level progress correctly', () => {
        expect(wrapper.find('div.' + classes.Level).exists()).toBeTruthy();
        expect(wrapper.find('div.' + classes.Level).children().find('p')).toHaveLength(15);
        for (let i = 1; i < 16; i++) {
            wrapper.setProps({ level: i });
            expect(wrapper.find('p.' + classes.CurrentLevel)).toHaveLength(1);
            expect(wrapper.find('p.' + classes.PassedLevel)).toHaveLength(i-1);
            expect(wrapper.find('p.' + classes.notPassedLevel)).toHaveLength(15-i);
        }
    });

});