function compareArrays(arr1, arr2) {
return arr1.length == arr2.length && arr1.every((n, i) => arr2[i] == n);
}

function getUsersNamesInAgeRange(users, gender) {
  let filteredUsers = users.filter(user => user.gender === gender);
  let usersAge = filteredUsers.map(user => user.age);

  if (!users.length) {
    return 0;
  } else if (!filteredUsers.length) {
    return 0;
  } else return usersAge.reduce((summAge, ageValue) => summAge + ageValue, 0) / usersAge.length;
}