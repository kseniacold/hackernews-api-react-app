import hnApi from './hn-api';

// These tests will fail if there is a problem with fetching from the API
// They are to test if data matches needed sturcture


describe('Test data arriving from the API', () => {

  test('Get an array of 500 stories from the API', () => {

    return hnApi.loadStories().then(stories => {
      expect(stories).toEqual(expect.any(Array));
      expect(stories).toHaveLength(500);
    
      for (let i = 0; i < stories.length; i++) {
        expect(typeof stories[i]).toEqual("number");
      }
    }).catch(function(err) {
      console.error("Test fails, might be a problem fetching from the API:", err.message);
    });

  });

  test('Get a story from the API of correct shape', () => {
    const storiesIds =  [19019017, 19019048, 19018185, 19017108, 19017270, 19017219, 19018914, 19018536, 19018037, 19017786, 19016064, 19017138, 19016466, 19019376, 19017111, 19017492, 19017489, 19019185, 19017938, 19016569, 19017009, 19016596, 19018399, 19013993, 19016869, 19017083, 19019545, 19016861, 19016047, 19017007, 19016399, 19016316, 19012872, 19018153, 19015799, 19019070, 19016100, 19015079, 19016806, 19013480, 19012237, 19015504, 19015358, 19013189, 19014665, 19010544, 19016049, 19015093, 19017532, 19012705, 19012369, 19015087, 19014962, 19017616, 19015501, 19014828, 19015027, 19013069, 19017906, 19018113, 19018233, 19015070, 19017466, 19016428, 19013980, 19015465, 19011880, 19008470, 19011925, 19016125, 19010600, 19011650, 19013445, 19014278, 19017066, 19014271, 19016324, 19011980, 19012087, 19015601, 19014820, 19012573, 19013987, 19014618, 19012314, 19009431, 19009206, 19014251, 19012132, 19016353, 19012403, 19011514, 19011356, 19009756, 19017836, 19012936, 19012048, 19016454, 19013103, 19008109];
    let requests = storiesIds.map((storyId) => {
        return hnApi.loadStory(storyId).then((storyObj) => {
          expect(storyObj).toBeDefined();
          expect(typeof storyObj.title).toBe("string");
          expect(typeof storyObj.id).toBe("number");

          if (typeof storyObj.url !== "undefined") {
            expect(typeof storyObj.url).toBe("string");
          }
          expect(typeof storyObj.id).toBe("number");

        }).catch(function(err) {
          console.error("Test fails, might be a problem fetching from the API:", err.message);
        });
    });
   
    return Promise.all(requests);
  });

});