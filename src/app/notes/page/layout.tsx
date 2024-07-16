import { Grid } from '@mui/material';

import Sidebar from '../../components/sidebar';

import '../../styles/layouts/notePage.scss';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Grid container spacing={0} className="note-page">
      <Grid item xs={2}>
        <Sidebar />
      </Grid>
      <Grid item xs={10}>
        {children}
      </Grid>
    </Grid>
  );
}