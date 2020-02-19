import React from 'react';
import styled, { css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const StyledCircleIcon = styled.div<{ variant?: string; size?: string }>`
  font-size: 14px;
  border-radius: 50px;
  width: ${p => p.size || '40px'};
  height: ${p => p.size || '40px'};
  line-height: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  ${p => (p.theme.variants as any)[p.variant as string]}
`;

interface CircleIconProps {
  variant?: 'primary' | 'success' | 'danger' | 'secondary';
  icon: any;
  size?: string;
  [x: string]: any;
}
const CircleIcon: React.FC<CircleIconProps> = ({
  icon,
  variant = 'secondary',
  size,
  ...props
}) => {
  return (
    <StyledCircleIcon size={size} variant={variant} {...props}>
      <FontAwesomeIcon icon={icon} />
    </StyledCircleIcon>
  );
};

export default CircleIcon;