import React from 'react';
import {
  AppBar,
  Box,
  Divider,
  IconButton,
  Link,
  Toolbar,
} from '@material-ui/core';
import Spacer from './Spacer';
import ExternalLink from './ExternalLink';
import NextLink from 'next/link';
import { Bold } from './StyleUtils';
import styled from 'styled-components';
import TelegramIcon from '@material-ui/icons/Telegram';

const TitleLink = styled(Link)`
  &:hover {
    text-decoration: none;
  }
`;

const MainContent = styled.main`
  flex: 1;
  margin: 0 auto;
  max-width: 800px;
  width: 100%;
  padding: ${({ theme }) => theme.spacing(4)}px;
`;

const Layout: React.FC = ({ children }) => {
  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      <AppBar
        variant="outlined"
        position="relative"
        color="inherit"
        style={{
          backgroundColor: '#fff',
        }}
      >
        <Toolbar>
          <NextLink href="/" passHref>
            <TitleLink variant="h6" color="primary">
              <Bold>WL O Auth</Bold>
            </TitleLink>
          </NextLink>
          <Box flexGrow={1} />
          <IconButton
            component={ExternalLink}
            href="https://t.me/rocketsmsgateway"
          >
            <TelegramIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <MainContent>
        <>{children}</>
      </MainContent>
      {/* <Box
        component="main"
        display="flex"
        flexDirection="column"
        width="100%"
        maxWidth={800}
        marginX="auto"
        marginY="1rem"
        padding={4}
        flex={1}
      ></Box> */}
      <Divider />
      <Box
        display="flex"
        padding={1}
        justifyContent="flex-end"
        component="footer"
      >
        <Spacer flexDirection="row" spacing={1}>
          <IconButton
            component={ExternalLink}
            href="https://t.me/rocketsmsgateway"
          >
            <TelegramIcon />
          </IconButton>
        </Spacer>
      </Box>
    </Box>
  );
};

export default Layout;
