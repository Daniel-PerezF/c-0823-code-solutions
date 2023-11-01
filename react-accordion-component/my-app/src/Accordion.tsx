import { useState } from 'react';

type AccordionTypes = {
  topics: { id: number; name: string; info: string }[];
};
export function Accordion({ topics }: AccordionTypes) {
  const [active, setActive] = useState<number | null>(null);

  function handleOnClick(id: number) {
    setActive(id === active ? null : id);
  }

  return (
    <>
      <Topics topics={topics} onClick={handleOnClick} active={active} />
    </>
  );
}

type TopicProps = {
  onClick: (id: number) => void;
  active: number | null;
  topics: { id: number; name: string; info: string }[];
};

function Topics({ topics, onClick, active }: TopicProps) {
  const hide = active ? 'visible info' : 'hidden';
  return (
    <>
      {topics.map((topic) => (
        <div key={topic.id} className="">
          <div className="boxes" onClick={() => onClick(topic.id)}>
            {topic.name}
          </div>
          {active === topic.id && <div className={hide}>{topic.info}</div>}
        </div>
      ))}
    </>
  );
}
