const users = [
  {
    id: 1,
    login: 'user1',
    firstName: 'Firstname1',
    lastName: 'Lastname1'
  },
  {
    id: 2,
    login: 'user2',
    firstName: 'Firstname2',
    lastName: 'Lastname2'
  },
  {
    id: 3,
    login: 'user3',
    firstName: 'Firstname3',
    lastName: 'Lastname3'
  },
  {
    id: 4,
    login: 'user4',
    firstName: 'Firstname4',
    lastName: 'Lastname4'
  }
];

export class UsersRepository {

  getAll() {
    return users;
  }

  getById(id) {
    const user = users.find(i => i.id == id);
    return user;
  }

  update(id, data) {
    const user = this.getById(id);
    if (user != null) {
      user.login = data.login || user.login;
      user.firstName = data.firstName || user.firstName;
      user.lastName = data.lastName || user.lastName;
    }
  }

  create(data) {
    const user = this.getById(data.id);
    if (user == null) {
      users.push(data);
    }
  }

  delete(id) {
    const user = this.getById(id);
    if (user != null) {
      users.splice(users.indexOf(user), 1);
    }
  }
}