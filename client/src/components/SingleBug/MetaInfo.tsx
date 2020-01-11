import React from 'react';

import { AuthorProps } from './SingleBug';
import { formatDate } from 'utils';

import Flex from 'components/common/Flex';
import StatusIcon from 'components/common/StatusIcon';
import Avatar from 'components/Avatar/Avatar';
import { StyledMetaInfo } from 'components/BugCard/BugCard.style';

interface MetaProps {
  isOpen?: boolean;
  date: string;
  author: AuthorProps;
  commentsCount?: number;
  showAvatar?: boolean;
}

const MetaInfo: React.FC<MetaProps> = React.memo(
  ({ isOpen, date, author, commentsCount, showAvatar }) => (
    <StyledMetaInfo>
      <Flex align="center">
        <StatusIcon isOpen={isOpen} />
        {showAvatar && (
          <Avatar
            style={{ marginLeft: 15 }}
            width="30px"
            height="30px"
            src={`/api/user/${author.username}/avatar/raw?size=45`}
          />
        )}
        <span className="ml-15">
          {isOpen ? 'Opened' : 'Closed'} by{' '}
          <a className="text--medium" href={`/users/${author.username}`}>
            {author.name}
          </a>{' '}
          on {formatDate(date)}
          {commentsCount && <span> / {commentsCount} comments</span>}
        </span>
      </Flex>
    </StyledMetaInfo>
  )
);

export default MetaInfo;