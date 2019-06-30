import React from 'react';
import style from './style.scss';

import { connect } from 'react-redux';

import TableCell from '@material-ui/core/TableCell';

import Emoji from '@components/Emoji';

const UserNameCell = ({
  user, diaries, emojis
}) => {
  const emojiAggregations = emojis.map(emoji => {
    return {
      emoji: emoji,
      count: diaries.filter(diary => {
        return diary.emoji.id === emoji.id && !diary.deletedAt
      }).length
    }
  });

  return(
    <TableCell scope="row" className={style.userNameCell}>
      {user.screenName}
      <ul className={style.emojiList}>
        {emojiAggregations.map(aggregation => (
          <li className={style.emoji}><Emoji emoji={aggregation.emoji} size={16} />: {aggregation.count}</li>
        ))}
      </ul>
    </TableCell>
  )
}

const mapStateToProps = state => ({
  emojis: state.emoji.emojis
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(UserNameCell);