import { createContext } from 'vc-state';

const [MarkdownEditorContextProvider, useMarkdownEditorContext] = createContext(() => {
    return {};
});

export { MarkdownEditorContextProvider, useMarkdownEditorContext };
