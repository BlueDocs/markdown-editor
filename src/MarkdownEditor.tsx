import { defineComponent } from 'vue';
import { MarkdownEditorContextProvider } from './context';

export const MarkdownEditor = defineComponent({
    name: 'MarkdownEditor',
    setup() {
        return () => {
            return <MarkdownEditorContextProvider></MarkdownEditorContextProvider>;
        };
    },
});
