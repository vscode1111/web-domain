import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ProTip from '../src/components/ProTip';
import { Layout } from '../src/components/Layout';
import { Link } from '../src/components/Link';
import { MadeWithLove } from '.';

export default () => {
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
