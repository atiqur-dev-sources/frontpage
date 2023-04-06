import React from 'react';
import Link, { LinkProps } from '@mui/material/Link';
import { styled } from '@mui/material/styles';

const StyledMuiLink = styled(Link)({
  textDecoration: 'none',
  color: 'inherit',
  '&:hover': {
    textDecoration: 'underline',
  },
});

type StyledLinkProps = LinkProps & {
  underlineHoverColor?: string;
};

const StyledLink: React.FC<StyledLinkProps> = ({
  underlineHoverColor,
  ...linkProps
}) => {
  const linkStyle = React.useMemo(
    () => ({
      '&:hover': {
        textDecorationColor: underlineHoverColor || 'inherit',
      },
    }),
    [underlineHoverColor]
  );

  return <StyledMuiLink {...linkProps} sx={linkStyle} />;
};

export default StyledLink;
