import { shallow } from 'enzyme';
import QuoteBox from '../../components/QuoteBox';

describe('QuoteBox', () => {
  const defaultProps = {
    getQuote: jest.fn(),
    isError: false,
    quote: {
      author: 'mock author',
      content: 'mock content',
    },
  };
  const render = (props) => shallow(<QuoteBox {...defaultProps} {...props} />);

  describe('rendering', () => {
    test('should render quote', () => {
      const wrapper = render();
      expect(wrapper).toMatchSnapshot();
    });

    test('should render loading', () => {
      const props = {
        quote: null,
      };
      const wrapper = render(props);
      expect(wrapper).toMatchSnapshot();
    });

    test('should render error', () => {
      const props = {
        isError: true,
      };
      const wrapper = render(props);
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('behavior', () => {
    test('refresh button should call getQuote', () => {
      const props = {
        getQuote: jest.fn(),
      };
      const wrapper = render(props);
      wrapper.find('button').simulate('click');
      expect(props.getQuote).toHaveBeenCalledTimes(1);
    });
  });
});
