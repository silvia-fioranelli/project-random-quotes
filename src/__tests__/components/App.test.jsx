import { shallow } from 'enzyme';
import App from '../../components/App';
import { API_URL } from '../../globals';

describe('App', () => {
  beforeEach(() => {
    fetch.mockImplementation(() => Promise.resolve({}));
  });

  describe('rendering', () => {
    test('component App should render', () => {
      const wrapper = shallow(<App />);
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('componentDidMount', () => {
    test('should call fetchData', () => {
      const wrapper = shallow(<App />);
      wrapper.instance().fetchData = jest.fn();
      wrapper.instance().forceUpdate();
      wrapper.instance().componentDidMount();
      expect(wrapper.instance().fetchData).toBeCalledTimes(1);
    });
  });

  describe('fetchData', () => {
    test('should call API and set quotes', async () => {
      const data = {
        content: 'mock',
        author: 'mock',
      };
      const response = {
        ok: true,
        json: () => data,
      };
      const wrapper = shallow(<App />);
      fetch.mockClear();
      fetch.mockImplementationOnce(() => Promise.resolve(response));

      await wrapper.instance().fetchData();

      expect(fetch).toBeCalledTimes(1);
      expect(fetch).toBeCalledWith(API_URL);

      expect(wrapper.instance().state.quote).toEqual(data);
    });

    test('should call API and set isError', async () => {
      const response = {
        ok: false,
      };
      const wrapper = shallow(<App />);
      fetch.mockClear();
      fetch.mockImplementationOnce(() => Promise.resolve(response));

      await wrapper.instance().fetchData();

      expect(fetch).toBeCalledTimes(1);
      expect(fetch).toBeCalledWith(API_URL);

      expect(wrapper.instance().state.isError).toEqual(true);
    });
  });
});
