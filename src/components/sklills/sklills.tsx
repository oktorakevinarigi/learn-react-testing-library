import {useState} from 'react'
import {SkillsProps} from './sklills.type'

export function Sklills(props: SkillsProps) {
  const {skills} = props;
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
    <ul>
      {skills.map(skill => (
        <li key={skill}>{skill}</li>
      ))}
    </ul>
    {
      isLoggedIn ? (<button>Start learning</button>)
      : <button onClick={() => setIsLoggedIn(true)}>Login</button>
    }
    </>
  )
}
