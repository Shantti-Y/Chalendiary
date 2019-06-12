import React from 'react';
import './style.scss';

import { connect } from 'react-redux';

import DeleteConfirmation from '@components/ForDesktop/DeleteConfirmation';
import HeaderNav from '@components/ForDesktop/HeaderNav';
import DiaryTable from '@components/ForDesktop/DiaryTable';
import Submenu from '@components/ForDesktop/Submenu';
import ModalContent from '@components/ForDesktop/ModalContent';
import NotifierSnackbar from '@components/ForDesktop/NotifierSnackbar';

const ForDesktop = ({}) => {
  return (
    <div id="for-desktop" className="layout-container">
      <DeleteConfirmation />
      <NotifierSnackbar />
      <ModalContent />
      <HeaderNav />
      <main>
        <div className="left-column">
          <DiaryTable />
        </div>
        <div className="right-column">
          <Submenu />
        </div>
      </main>
    </div>
  )
}

export default connect(null, null)(ForDesktop);