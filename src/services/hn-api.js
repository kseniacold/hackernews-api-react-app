import axios from 'axios';

const top500StopriesUrl = "https://hacker-news.firebaseio.com/v0/topstories.json";
const storyUrl = "https://hacker-news.firebaseio.com/v0/item/"; // will need to append story id and ".json"

const hnApi = {
  loadStories: () => {
    return axios.get(top500StopriesUrl).then(response => response.data);
  },

  loadStory: (storyId) => {
    return axios.get(storyUrl + storyId + ".json").then(response => response.data);
  }
};

export default hnApi;