'use client';
import { MilkdownProvider } from '@milkdown/react';

import NoteEditor from "@/app/components/noteEditor";

export default function Page() {
  return (
    <div>
      <MilkdownProvider>
        <NoteEditor />
      </MilkdownProvider>
    </div>
  );
}