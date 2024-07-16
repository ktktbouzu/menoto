import Link from 'next/link'
import { Container, Box } from '@mui/material';

import '../styles/pages/noteList.scss';

export default function Page() {
  const items = [...Array(10).keys()];

  return (
    <Container className="note-list" maxWidth="md">
      <h2 className="note-list__header">My Notes</h2>
      <Box className="note-list__content">
        { items.map( number => (
            <Box className={`note-list__item note-list__item--${number}`}>
              <Link href="/notes/page">
                <h4>Note {number + 1}</h4>
              </Link>
            </Box>
          )) 
        }
      </Box>
    </Container>
  );
}