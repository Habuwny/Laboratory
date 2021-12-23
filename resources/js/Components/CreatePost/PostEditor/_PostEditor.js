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
  CodeBlock,
  Image,
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
          new CodeBlock(),
          new Image(),
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
