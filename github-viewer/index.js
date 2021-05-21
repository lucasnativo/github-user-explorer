const axios = require("axios")
/* 
  seguidores, seguindo, repos
*/
async function main(user) {
  const userUrl = `https://api.github.com/users/${user}` 
  // avatar, nome, email, cidade, bio, 
  const userResponse = await axios.get(userUrl)
  console.log(userResponse.data)
  const followingUrl = `https://api.github.com/users/${user}/following`
  const followingResponse = await axios.get(followingUrl)
  // const followersResponse = await axios.get(userResponse.data.followers_url)
  // const reposResponse = await axios.get(userResponse.data.repos_url)
  //console.log(reposResponse.data.filter(r => r.private ))
  console.log(followingResponse.data)
}

main("matheussampaio")
