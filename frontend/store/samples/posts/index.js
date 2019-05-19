// id serial PRIMARY KEY,
// user_id integer NOT NULL,
// posted_at date NOT NULL,
// content_text text NOT NULL,
// created_at timestamp without time zone DEFAULT NOW() NOT NULL,
// updated_at timestamp without time zone DEFAULT NOW() NOT NULL
import moment from 'moment';
import users from '@store/samples/users';

const currentDay = moment().format('YYYY/MM/DD');

// [1,2,3,4,7]

export const postsInCurrentDay = [
  {
    id: 1,
    userId: 1,
    contentText: `middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. `
  },
  {
    id: 2,
    userId: 2,
    contentText: `undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics,`
  },
  {
    id: 3,
    userId: 3,
    contentText: `Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...`
  },
  {
    id: 4,
    userId: 4,
    contentText: `but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing`
  },
  {
    id: 5,
    userId: 7,
    contentText: `or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing`
  },
].map(post => {
  return {
    ...post,
    postedAt: currentDay,
    teamId: 1
  }
})

const onePastDay = moment().subtract(1, 'days').format('YYYY/MM/DD');

export const postsInOnePastDay = [
  {
    id: 6,
    userId: 4,
    contentText: `The standard chunk of Lorem Ipsum used since the 1500s is`
  },
  {
    id: 7,
    userId: 1,
    contentText: `Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.`
  },
  {
    id: 8,
    userId: 2,
    contentText: `Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...`
  },
].map(post => {
  return {
    ...post,
    postedAt: onePastDay,
    teamId: 1
  }
})

const twoPastDays = moment().subtract(2, 'days').format('YYYY/MM/DD');

export const postsInTwoPastDays = [
  {
    id: 9,
    userId: 2,
    contentText: `middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. `
  },
  {
    id: 10,
    userId: 3,
    contentText: `undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics,`
  },
  {
    id: 11,
    userId: 4,
    contentText: `Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...`
  },
].map(post => {
  return {
    ...post,
    postedAt: twoPastDays,
    teamId: 1
  }
})

const sevenPastDays = moment().subtract(7, 'days').format('YYYY/MM/DD');

export const postsInSevenPastDays = [
  {
    id: 12,
    userId: 7,
    contentText: `middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. `
  },
  {
    id: 13,
    userId: 3,
    contentText: `undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics,`
  },
  {
    id: 14,
    userId: 1,
    contentText: `Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...`
  },
].map(post => {
  return {
    ...post,
    postedAt: sevenPastDays,
    teamId: 1
  }
})

const posts = [
  ...postsInCurrentDay,
  ...postsInOnePastDay,
  ...postsInTwoPastDays,
  ...postsInSevenPastDays
];

export default posts;