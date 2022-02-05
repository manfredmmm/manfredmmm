type SkillProps = {
  name: string;
  items: string[];
}

const Skill = ({
  name,
  items
}: SkillProps) => (
  <div className="mb-3">
    <h4 className="uppercase font-heading font-semibold">
      {name}
    </h4>
    <ul>
      {items.map((item, index) => (
        <li key={index}>
          {item}
        </li>
      ))}
    </ul>
  </div>
);

export default Skill;