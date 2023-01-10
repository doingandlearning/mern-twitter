import axios from "axios";
import { BACKEND_URL } from "./constants";

export function getTweetsByUserId(userId) {
  return axios.get(`${BACKEND_URL}/user/${userId}/tweets`).then((res) => {
    if (res.data.tweets) {
      return res.data.tweets; // for Axios
    } else {
      console.log(res.data);
    }
  });
}

export function getTweetById(tweetId) {
  return axios.get(`${BACKEND_URL}/tweets/${tweetId}`).then((res) => {
    console.log("res", res.data);
    return res.data; // for Axios
  });
}

export function getAllTweets() {
  return axios.get(`${BACKEND_URL}/tweets`).then((res) => {
    return res.data; // for Axios
  });
}

export function deleteTweetById(id) {
  return axios
    .delete(`/tweets/${id}`)
    .then((res) => console.log(res.data))
    .then(() => {
      console.log({
        title: <strong>Tweet Deleted!</strong>,
        html: <i>Your tweet was deleted</i>,
        icon: "success",
      });
    });
}

export function updateTweet(tweetId, tweet) {
  return axios
    .patch(`${BACKEND_URL}/tweets/${tweetId}`, { ...tweet })
    .then((res) => res);
}

export function createWithId(userId, tweet) {
  return axios
    .post(`${BACKEND_URL}/user/${userId}/tweets`, { ...tweet })
    .then((res) => {});
}

export function createTweet(tweet) {
  return axios.post(`${BACKEND_URL}/tweets`, { ...tweet }).then((res) => res);
}
