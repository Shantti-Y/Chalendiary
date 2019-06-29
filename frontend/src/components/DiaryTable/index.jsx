import React from 'react';
import style from './style.scss';

import { connect } from 'react-redux';
import moment from 'moment';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import DiaryCell from './DiaryCell';
import DiaryDetail from './DiaryDetail';
import UserNameCell from './UserNameCell';

const DiaryTable = ({
  currentDate, currentTag, diaries, me
}) => {
  const daysInMonth = currentDate.daysInMonth();
  const members = () => {
    const users = Object.assign([], currentTag.users);
    const meIdx = users.findIndex(user => user.id === me.id);
    const meUser = Object.assign({}, users[meIdx]);
    users.splice(meIdx, 1);
    users.unshift(meUser);
    return users;
  }

  const diaryTable = () => members().map(member => {
    const rowDiaries = diaries.map(item => {
      return { date: moment(item.date), diary: item.diaries.find(diary => diary.user.id === member.id) }
    });
    return { member, row: rowDiaries };
  });

  return(
    <Paper className={style.root}>
      <DiaryDetail />
      <div>
        <Table className={style.table}>
          <TableHead>
            <TableRow>
              <TableCell className={style.headFirstColumn}>Members</TableCell>
              {[...Array(daysInMonth)].map((_, i) => {
                const day = i + 1;
                return <TableCell className={style.headCell} key={day} align="right">{day}</TableCell>
              })}
            </TableRow>
          </TableHead>
          <TableBody>
            {
              diaryTable().map(tableRow => {
                return (
                  <TableRow key={tableRow.member.id}>
                    <UserNameCell user={tableRow.member} diaries={tableRow.row.filter(cell => cell.diary).map(cell => cell.diary)} />
                    {
                      tableRow.row.map(cell => (
                        <DiaryCell
                          memberId={tableRow.member.id}
                          key={`${tableRow.member.id}-${cell.date}`}
                          postedAt={cell.date}
                          diary={cell.diary}
                        />
                        )
                      )
                    }
                  </TableRow>
                )
              })
            }
          </TableBody>
        </Table>
      </div>
    </Paper>
  )
}

const mapStateToProps = state => ({
  me: state.me.me,
  currentDate: state.date.currentDate,
  currentTag: state.tag.tags.find(tag => {
    return tag.id === state.tag.currentTagId
  }),
  diaries: state.diary.diaries
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(DiaryTable);