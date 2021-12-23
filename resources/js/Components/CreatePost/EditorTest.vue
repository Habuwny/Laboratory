<template>
  <div class="editor">
    <editor-menu-bar :editor="editor" v-slot="{ commands, isActive }">
      <div class="menubar">
        <button
          class="menubar"
          :class="{ 'is-active': isActive.bold() }"
          @click="commands.bold"
        >
          Bold
        </button>
        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.underline() }"
          @click="commands.underline"
        >
          Bold
        </button>
      </div>
    </editor-menu-bar>
    <editor-content class="editor_content" :editor="editor" />
  </div>
</template>

<script>
import { Editor, EditorContent, EditorMenuBar, EditorMenuBubble } from "tiptap";

import {
  Code,
  Strike,
  Bold,
  Italic,
  Blockquote,
  ListItem,
  TodoItem,
  TodoList,
  OrderedList,
  HorizontalRule,
  Link,
  Underline,
  Highlight,
  History,
  Heading,
  HardBreak,
} from "tiptap-extensions";
export default {
  name: "TestEditor",
  components: {
    EditorContent,
    EditorMenuBar,
    EditorMenuBubble,
  },
  data() {
    return {
      editor: new Editor({
        extensions: [
          new Blockquote(),
          new Code(),
          new Strike(),
          new Bold(),
          new Italic(),
          new Blockquote(),
          new ListItem(),
          new TodoItem(),
          new TodoList(),
          new OrderedList(),
          new HorizontalRule(),
          new Link(),
          new Underline(),
          new History(),
          new Heading({ levels: [1] }),
          new HardBreak(),
        ],
        content: `
            <h2>
            hi there
            </h2>
        `,
      }),
    };
  },
};
</script>
