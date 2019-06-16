import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import MuiLink from '@material-ui/core/Link';
import ProTip from '../src/components/ProTip';
import Link from '../src/components/Link';
import Layout from '../src/components/Layout';

function MadeWithLove() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Built with love by the '}
      <MuiLink color="inherit" href="https://material-ui.com/">
        Material-UI
      </MuiLink>
      {' team.'}
    </Typography>
  );
}

export default function App() {
  return (
    <Layout>
      <Container maxWidth="sm">
        <Box>
          <Typography variant="h4" component="h1" gutterBottom>
            Next.js v4-alpha with TypeScript example
        </Typography>
          <Link href="/">Go to the main page</Link>
          <ProTip />
          <MadeWithLove />
        </Box>
      </Container>
    </Layout>
  );
}
