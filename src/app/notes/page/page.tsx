'use client';
import { Box } from '@mui/material';

import NoteEditor from "@/app/components/noteEditor";

import '../../styles/pages/noteView.scss';

export default function Page() {
  return (
    <Box className="note-view">
      <Box className="note-view__header">
        <h3>Note Title</h3>
      </Box>
      <NoteEditor />
    </Box>
  );
}