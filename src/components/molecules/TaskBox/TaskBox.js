import React from 'react';
import { ReactComponent as MoreIcon } from 'assets/icons/more.svg';
import { ReactComponent as CheckIcon } from 'assets/icons/check.svg';
import { ReactComponent as DeleteIcon } from 'assets/icons/delete.svg';
import { Text } from 'components/atoms/Text';
import { Button } from 'components/atoms/Button';
import { Wrapper } from './TaskBox.styles';
import { ContentWrapper } from './TaskBox.styles';
import { ButtonWrapper } from './TaskBox.styles';
import { Header } from 'components/atoms/Header';

const TaskBox = ({ isSmall, ...props }) => {
  return (
    <Wrapper>
      <ContentWrapper>
        <Header isSmall>Wyrzuć śmieci</Header>
        <Text>Lorem ipsum set amet</Text>
      </ContentWrapper>
      <ButtonWrapper>
        <Button isSmall>
          <MoreIcon />
        </Button>
        <Button isSmall>
          <CheckIcon />
        </Button>
        <Button isSmall>
          <DeleteIcon />
        </Button>
      </ButtonWrapper>
    </Wrapper>
  );
};

export default TaskBox;