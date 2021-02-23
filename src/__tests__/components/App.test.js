import { shallow } from 'enzyme';
import App from '../../components/App';

describe('App', () => {
  describe('rendering', () => {
    test('component App should render', () => {
      const wrapper = shallow(<App />);
      expect(wrapper).toMatchSnapshot();
    });
  });
});
