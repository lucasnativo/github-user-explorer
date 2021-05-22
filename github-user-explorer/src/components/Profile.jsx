function Profile({ user }) {
  return (
    <div>
      <h2>{user.login}</h2>
      <div>{user.name}</div>
      <div>{user.location}</div>
      <div>{user.email}</div>
      <div>{user.bio}</div>
      <div>{user.public_repos}</div>
      <div>{user.followers}</div>
      <div>{user.following}</div>
    </div>
  );
}

export default Profile;
