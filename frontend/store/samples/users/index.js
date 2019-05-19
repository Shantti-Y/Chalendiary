// id serial PRIMARY KEY,
// screen_name character varying(20) NOT NULL,
// digest_password character(32) NOT NULL,
// email character varying(100) NOT NULL,
// thumbnail_path character varying NOT NULL,
// phone character varying(11),
// created_at timestamp without time zone DEFAULT NOW() NOT NULL,
// updated_at timestamp without time zone DEFAULT NOW() NOT NULL

const users = [
  {
    id: 1,
    screenName: 'Junichi Tanaka',
    email: 't-junichi@gmail.com',
    thumbnailPath: require('@assets/images/user1.jpg'),
    phone: '08011111111',
    teamIds: [1],
    tagIds: [1, 2, 3]
  },
  {
    id: 2,
    screenName: 'Anna Heskal',
    email: 'a-heskal@gmail.com',
    thumbnailPath: require('@assets/images/user2.jpg'),
    phone: '08012345678',
    teamIds: [1],
    tagIds: [1, 2]
  },
  {
    id: 3,
    screenName: 'Michael Lee',
    email: 'm-lee@gmail.com',
    thumbnailPath: require('@assets/images/user3.jpg'),
    phone: '08098765432',
    teamIds: [1],
    tagIds: [1]
  },
  {
    id: 4,
    screenName: 'Rachel Krunk',
    email: 'r-krunk@gmail.com',
    thumbnailPath: require('@assets/images/user4.jpg'),
    phone: '08756476533',
    teamIds: [1],
    tagIds: [1]
  },
  {
    id: 5,
    screenName: 'Bruce Shawn',
    email: 'b-shawn@gmail.com',
    thumbnailPath: require('@assets/images/user5.jpg'),
    phone: '09091029384',
    teamIds: [1],
    tagIds: [2]
  },
  {
    id: 6,
    screenName: 'Yoshihiko Tanaka',
    email: 'y-tanaka@gmail.com',
    thumbnailPath: require('@assets/images/user6.jpg'),
    phone: '09865678911',
    teamIds: [1],
    tagIds: [2]
  },
  {
    id: 7,
    screenName: 'Andy Saman',
    email: 'a-saman@gmail.com',
    thumbnailPath: require('@assets/images/user7.jpg'),
    phone: '00022266653',
    teamIds: [1],
    tagIds: [1, 2, 3]
  },
  {
    id: 8,
    screenName: 'Takahiko Masuzawa',
    email: 't-masuzawa@gmail.com',
    thumbnailPath: require('@assets/images/user8.jpg'),
    phone: '98897654321',
    teamIds: [1],
    tagIds: [2]
  },
  {
    id: 9,
    screenName: 'Tatsuya K',
    email: 't-k@gmail.com',
    thumbnailPath: require('@assets/images/user9.jpg'),
    phone: '09900990091',
    teamIds: [1],
    tagIds: [2]
  },
  {
    id: 10,
    screenName: 'Freddy Venus',
    email: 'f-venus@gmail.com',
    thumbnailPath: require('@assets/images/user10.jpg'),
    phone: '12233445455',
    teamIds: [1],
    tagIds: [2, 3]
  },
  {
    id: 11,
    screenName: 'Riger Thunder Jushin',
    email: 'r-jushin@gmail.com',
    thumbnailPath: require('@assets/images/user11.jpg'),
    phone: '08095861111',
    teamIds: [1],
    tagIds: [3]
  },
  {
    id: 12,
    screenName: 'Kain Oto',
    email: 'k-oto@gmail.com',
    thumbnailPath: require('@assets/images/user12.jpg'),
    phone: '01928472933',
    teamIds: [1],
    tagIds: [3]
  },
];

export default users;