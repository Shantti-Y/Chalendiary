import React from 'react';
import './style.scss';

import { connect } from 'react-redux';

import DeleteConfirmation from '@components/ForDesktop/DeleteConfirmation';
import DiaryTable from '@components/ForDesktop/DiaryTable';
import ModalContent from '@components/ForDesktop/ModalContent';
import NotifierSnackbar from '@components/ForDesktop/NotifierSnackbar';

const ForDesktop = ({}) => {
  return (
    <div id="for-desktop" className="layout-container">
      <DeleteConfirmation />
      <NotifierSnackbar />
      <ModalContent />
      <main>
        <DiaryTable />
      </main>
    </div>
  )
}

export default connect(null, null)(ForDesktop);