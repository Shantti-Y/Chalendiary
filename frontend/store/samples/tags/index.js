// id serial PRIMARY KEY,
// team_id integer NOT NULL,
// name character varying(25) NOT NULL,
// description text,
// created_at timestamp without time zone DEFAULT NOW() NOT NULL,
// updated_at timestamp without time zone DEFAULT NOW() NOT NULL

const tags = [
  {
    id: 1,
    name: 'Sales No 2',
    teamId: 1,
    description: `
      There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't 
    `
  },
  {
    id: 2,
    name: 'Tech Team',
    teamId: 1,
    description: `
       from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum,
    `
  },
  {
    id: 3,
    name: 'Other talk',
    teamId: 1,
    description: `
      東大文系卒の仲間と元都市銀さんから聞いた話。高学歴組の大手企業の最終防衛ラインがメガバンク。東大は三行をうけたら一行はひっかかる。,
    `
  },
];

export default tags;