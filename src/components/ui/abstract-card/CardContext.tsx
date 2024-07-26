import { createContext, Dispatch, SetStateAction } from 'react';

const MouseEnterContext = createContext<
  [boolean, Dispatch<SetStateAction<boolean>>] | undefined
>(undefined);

export default MouseEnterContext;