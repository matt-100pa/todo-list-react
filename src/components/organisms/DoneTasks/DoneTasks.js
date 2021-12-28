import { Header } from 'components/atoms/Header';
import TaskBoxDone from 'components/molecules/TaskBoxDone/TaskBoxDone';
import React, { useContext } from 'react';
import { Wrapper } from './DoneTasks.styles';
import { TaskWrapper } from './DoneTasks.styles';
import PropTypes from 'prop-types';
import { NotesContext } from 'providers/NotesProvider';
import { NoteShape } from 'types';

const DoneTasks = () => {
  const { notes } = useContext(NotesContext);

  const doneItems = notes.filter((item) => {
    return item.done === true;
  });

  return (
    <Wrapper>
      <Header>Done tasks</Header>
      <TaskWrapper>
        {doneItems.map((notesData) => (
          <TaskBoxDone key={notesData.uuid} notesData={notesData} />
        ))}
      </TaskWrapper>
    </Wrapper>
  );
};

DoneTasks.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.shape(NoteShape)),
  deleteUser: PropTypes.func,
};

export default DoneTasks;
