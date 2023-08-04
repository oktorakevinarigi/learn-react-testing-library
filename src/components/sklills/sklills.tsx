import {useState, useEffect} from 'react'
import {SkillsProps} from './sklills.type'

export function Sklills(props: SkillsProps) {
  const {skills} = props;
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoggedIn(true)
    }, 1500)
  }, [])

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
