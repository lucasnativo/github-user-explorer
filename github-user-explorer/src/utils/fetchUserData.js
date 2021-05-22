import axios from "axios";

async function fetchUserData(user) {
  const userUrl = `https://api.github.com/users/${user}`;
  const userResponse = await axios.get(userUrl);

  return userResponse.data;
}

export default fetchUserData;
