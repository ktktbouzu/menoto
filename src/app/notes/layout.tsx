import { Grid } from '@mui/material';

import Sidebar from '../components/sidebar';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Grid container spacing={0}>
      <Grid item xs={2}>
        <Sidebar />
      </Grid>
      <Grid item xs={10}>
        {children}
      </Grid>
    </Grid>
  );
}