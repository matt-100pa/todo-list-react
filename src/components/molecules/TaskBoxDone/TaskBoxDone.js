import React, { useContext } from 'react';
import { ReactComponent as MoreIcon } from 'assets/icons/more.svg';
import { ReactComponent as DeleteIcon } from 'assets/icons/delete.svg';
import { Text } from 'components/atoms/Text';
import { Button } from 'components/atoms/Button';
import { Wrapper } from './TaskBoxDone.styles';
import { ContentWrapper } from './TaskBoxDone.styles';
import { ButtonWrapper } from './TaskBoxDone.styles';
import { Header } from 'components/atoms/Header';
import { NotesContext } from 'providers/NotesProvider';

const TaskBoxDone = ({ isSmall, notesData: { title, text, uuid }, ...props }) => {
  const { deleteNote } = useContext(NotesContext);

  return (
    <Wrapper>
      <ContentWrapper>
        <Header isSmall>{title}</Header>
        <Text>{text}</Text>
      </ContentWrapper>
      <ButtonWrapper>
        <Button isSmall>
          <MoreIcon />
        </Button>
        <Button isSmall onClick={() => deleteNote(uuid)}>
          <DeleteIcon />
        </Button>
      </ButtonWrapper>
    </Wrapper>
  );
};

export default TaskBoxDone;
