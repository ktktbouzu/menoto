import { Editor, defaultValueCtx, rootCtx } from '@milkdown/core';
import { nord } from '@milkdown/theme-nord';
import { Milkdown, MilkdownProvider, useEditor } from '@milkdown/react';
import { commonmark } from '@milkdown/preset-commonmark';

import '../styles/components/noteEditor.scss';

function EditorComponent() {
  const { get } = useEditor((root) =>
    Editor.make()
      .config(nord)
      .config((ctx) => {
        ctx.set(rootCtx, root);
        ctx.set(defaultValueCtx, 'Write your notes here.');
      })
      .use(commonmark),
  );

  return <Milkdown />;
}

export default function NoteEditor() {
  return (
    <div className="note-editor">
      <MilkdownProvider>
        <EditorComponent />
      </MilkdownProvider>
    </div>
  );
}