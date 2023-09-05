import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {
  classesActions,
  fetchClasses,
  fetchClassBySlug,
} from '../../redux/Classes/ClassesSlice';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const mockApiResponse = {
  results: [{ slug: 'class-1', name: 'Class 1' }],
};

describe('Redux Slice Tests', () => {
  it('should create an action to remove classSelected', () => {
    const expectedAction = { type: classesActions.removeClassSelected.type };
    expect(classesActions.removeClassSelected()).toEqual(expectedAction);
  });

  it('should handle fetching classes', () => {
    const store = mockStore({ classes: { classArray: [] } });
    const expectedActions = [
      fetchClasses.pending.type,
      fetchClasses.fulfilled.type,
    ];

    global.fetch = jest.fn().mockResolvedValue({
      json: () => Promise.resolve(mockApiResponse),
    });

    return store.dispatch(fetchClasses()).then(() => {
      const dispatchedActions = store.getActions().map((action) => action.type);
      expect(dispatchedActions).toEqual(expectedActions);
    });
  });

  it('should handle fetching class by slug', () => {
    const store = mockStore({ classes: { classSelected: undefined } });
    const slug = 'class-1';
    const expectedActions = [
      fetchClassBySlug.pending.type,
      fetchClassBySlug.fulfilled.type,
    ];

    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: () => Promise.resolve(mockApiResponse),
    });

    return store.dispatch(fetchClassBySlug(slug)).then(() => {
      const dispatchedActions = store.getActions().map((action) => action.type);
      expect(dispatchedActions).toEqual(expectedActions);
    });
  });
});
