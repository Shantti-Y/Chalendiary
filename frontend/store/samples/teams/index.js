// id serial PRIMARY KEY,
// name character varying(25) NOT NULL,
// domain_name character varying(20) NOT NULL,
// thumbnail_path character varying NOT NULL,
// description text,
// created_at timestamp without time zone DEFAULT NOW() NOT NULL,
// updated_at timestamp without time zone DEFAULT NOW() NOT NULL

const teams = [
  {
    id: 1,
    name: 'The team',
    domainName: 'the.team',
    thumbnailPath: require('@assets/images/team1.jpg'),
    description : `
      Hello!! This is the company's workspace. I hope you enjoy it and contribute something for us.
    `
  }
];

export default teams;