import Some from '../Some';

describe('Some component', () => {
    it('should render div with class some', () => {
        expect(shallow(<Some />).find('div.some').exists()).toBe(true);
    })
})
