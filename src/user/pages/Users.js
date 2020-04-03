import React from 'react';

import UsersList from '../components/UsersList';

const Users = () => {
  const USERS = [{
      id: 'u1',
      name: 'Armin Varshokar',
      image: 'https://avatars0.githubusercontent.com/u/13618953?s=460&u=b83a795f9244a0eb253c2bd20e3d8063640498fb&v=4',
      places: 3
    },
    {
      id: 'u1',
      name: 'Arm Var',
      image: 'https://avatars0.githubusercontent.com/u/13618953?s=460&u=b83a795f9244a0eb253c2bd20e3d8063640498fb&v=4',
      places: 5
    }
  ];

  return <UsersList items = {
    USERS
  }
  />;
};

export default Users;
