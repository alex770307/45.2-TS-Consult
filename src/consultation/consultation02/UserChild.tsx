interface UserChildProps {
    firstname: string;
    lastname: string;
    age: number;
    username: string;
    email: string;
  }
  
  export default function UserChild({ firstname, lastname, age, username, email }: UserChildProps) {
    return (
      <div>
        <p>Name: {firstname} {lastname}</p>
        {
          age >= 30
            ? <p>Age: {age}</p>
            : <p>Age is below 30</p>
        }
        <p>Username: {username}</p>
        <p>Email:
          <a href={`mailto:${email}`}>{email}</a>
        </p>
      </div>
    )
  }