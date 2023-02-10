/* eslint-disable no-extra-boolean-cast */
import { useDispatch, useSelector } from 'react-redux';
import { IconButton, Typography } from '@mui/material';
import { AddOutlined } from '@mui/icons-material';
import { JournalLayout } from '../layout/JournalLayout';
import { NothingSelectedView, NoteView } from '../views';
import { ImageGallery } from '../../ui/';
import { startNewNote } from '../../store/journal/thunks';

export const JournalPage = () => {
  const { isSaving, active } = useSelector((state) => state.journal);

  const dispatch = useDispatch();

  const onClickNewNote = () => {
    dispatch(startNewNote());
  };
  return (
    <JournalLayout>
      {active === null ? <NothingSelectedView /> : <NoteView />}

      <IconButton
        onClick={onClickNewNote}
        disabled={isSaving}
        size='large'
        sx={{
          color: 'white',
          backgroundColor: 'error.main',
          ':hover': { backgroundColor: 'error.main', opacity: 0.9 },
          position: 'fixed',
          right: 50,
          bottom: 50,
        }}
      >
        <AddOutlined sx={{ fontSize: 30 }} />
      </IconButton>
    </JournalLayout>
  );
};
