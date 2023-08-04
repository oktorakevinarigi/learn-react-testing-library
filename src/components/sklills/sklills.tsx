import {SkillsProps} from './sklills.type'

export function Sklills(props: SkillsProps) {
  const {skills} = props;
  return (
    <>
    <ul>
      {skills.map(skill => (
        <li key={skill}>{skill}</li>
      ))}
    </ul>
    </>
  )
}
