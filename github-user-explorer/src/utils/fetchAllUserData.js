import axios from "axios";

async function fetchAllUserData(user) {
  const userUrl = `https://api.github.com/users/${user}`;
  const userResponse = await axios.get(userUrl);

  const followingUrl = `https://api.github.com/users/${user}/following`;
  const followingResponse = await axios.get(followingUrl);

  const followersUrl = `https://api.github.com/users/${user}/followers`;
  const followersResponse = await axios.get(followersUrl);

  const reposUrl = `https://api.github.com/users/${user}/repos`;
  const reposResponse = await axios.get(reposUrl);

  return {
    user: userResponse.data,
    repos: reposResponse.data,
    following: followingResponse.data,
    followers: followersResponse.data,
  };
}

export default fetchAllUserData;
