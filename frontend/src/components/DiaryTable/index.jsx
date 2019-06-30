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
  const container = React.useRef();

  const [isDown, setIsDown] = React.useState(false);
  const [clickedX, setClickedX] = React.useState(null);
  const [scrollLeft, setScrollLeft] = React.useState(null);
  const [clickedY, setClickedY] = React.useState(null);
  const [scrollTop, setScrollTop] = React.useState(null);

  const daysInMonth = currentDate.daysInMonth();
  const members = () => {
    const users = Object.assign([], currentTag.users);
    const meIdx = users.findIndex(user => user.id === me.id);
    const meUser = Object.assign({}, users[meIdx]);
    users.splice(meIdx, 1);
    users.unshift(meUser);
    return users;
  }

  const handleOnMouseDown = e => {
    const table = document.querySelector(`.${style.root}`);
    setIsDown(true);
    setClickedX(e.pageX);
    setScrollLeft(table.scrollLeft);
    setClickedY(e.pageY);
    setScrollTop(table.scrollTop);
  }

  const handleOnMouseMove = e => {
    if (!isDown) return;
    e.preventDefault();
    const table = document.querySelector(`.${style.root}`);
    const movedX = (e.pageX - clickedX) * 2;
    const movedY = (e.pageY - clickedY) * 2;
    table.scrollLeft = scrollLeft - movedX;
    table.scrollTop = scrollTop - movedY;

  }

  const handleMouseUp = e => {
    setIsDown(false);
  }

  const diaryTable = () => members().map(member => {
    const rowDiaries = diaries.map(item => {
      return { date: moment(item.date), diary: item.diaries.find(diary => diary.user.id === member.id) }
    });
    return { member, row: rowDiaries };
  });

  return(
    <Paper
      className={style.root}
      onMouseDown={handleOnMouseDown}
      onMouseMove={handleOnMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      ref={container}
    >
      <DiaryDetail />
      <div>
        <Table
          className={style.table}
        >
          <TableHead>
            <TableRow>
              <TableCell className={style.headFirstColumn}>Members</TableCell>
              {[...Array(daysInMonth)].map((_, i) => {
                const day = i + 1;
                return <TableCell key={day} className={style.headCell} align="right">{day}</TableCell>
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
                          key={`${tableRow.member.id}-${cell.date}`}
                          memberId={tableRow.member.id}
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