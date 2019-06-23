import React from 'react';
import './style.scss';

import { connect } from 'react-redux';
import { changeComponent } from '@store/actions/ui/layout/menuNav';

import HeaderNav from '@components/HeaderNav/Main';
import DeleteConfirmation from '@components/DeleteConfirmation';
import DiaryTable from '@components/DiaryTable';
import ModalContent from '@components/ModalContent';
import NotifierSnackbar from '@components/NotifierSnackbar';

const Main = ({
  onInitialize
}) => {
  onInitialize(<HeaderNav />);

  return (
    <div id="main">
      <DeleteConfirmation />
      <NotifierSnackbar />
      <ModalContent />
      <DiaryTable />
    </div>
  )
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
  onInitialize: component => dispatch(changeComponent({ component }))
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);