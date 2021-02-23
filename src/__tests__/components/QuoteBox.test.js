import { shallow } from 'enzyme';
import QuoteBox from '../../components/QuoteBox';

describe('QuoteBox', () => {
  describe('rendering', () => {
    test('component QuoteBox should render', () => {
      const wrapper = shallow(<QuoteBox />);
      expect(wrapper).toMatchSnapshot();
    });
  });
});
