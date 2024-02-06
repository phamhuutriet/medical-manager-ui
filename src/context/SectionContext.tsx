import { createContext } from "react";
import { SectionId } from "../data/sectionIdEnum";

interface SectionContextType {
  sectionId: string;
  setSectionId: Function;
}

export const SectionContext = createContext<SectionContextType>({
  sectionId: SectionId.MAIN_PAGE,
  setSectionId: () => {},
});
