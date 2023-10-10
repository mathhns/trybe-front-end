const user = {
  name: 'Math',
  lastName: 'Ranho',
};

function User() {
  return <span>{`${user.name} ${user.lastName}`}</span>;
}

export default User;
