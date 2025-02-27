

import UserChild from './UserChild'

function User() {
  const name1: string = 'Ivan'
  
  return (
    <div>
      <UserChild firstname={name1} lastname='Petrov' age={29} username='sososo' email='mail1@gmail.com' />
      <UserChild firstname='Inga' lastname='Ivanova' age={13} username='alalala' email='mail2@gmail.com' />
      <UserChild firstname='Anna' lastname='Sidorova' age={33} username='hhnhnhn' email='mail3@gmail.com' />
      <UserChild firstname='Petr' lastname='Ushanov' age={55} username='rmrmrr' email='mail4@gmail.com' />
     
    </div>
  )
}

export default User;