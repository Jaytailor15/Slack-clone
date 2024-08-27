import { atom, useAtom } from "jotai";

const modelState = atom(false);

export const useCreateWorkspaceModal = () => {
    return useAtom(modelState);
}