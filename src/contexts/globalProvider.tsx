import {
  Dispatch,
  MutableRefObject,
  ReactElement,
  ReactNode,
  Ref,
  RefObject,
  SetStateAction,
  createContext,
  useEffect,
  useState,
} from "react";
import { Object3D, Object3DEventMap } from "three";

interface GlobalContextProps {
  target:
    | MutableRefObject<Object3D<Object3DEventMap>>
    | Object3D<Object3DEventMap>
    | null;
  setTarget: Dispatch<
    SetStateAction<
      | MutableRefObject<Object3D<Object3DEventMap>>
      | Object3D<Object3DEventMap>
      | null
    >
  >;
}

const GlobalContext = createContext<GlobalContextProps>({
  target: null,
  setTarget: () => {},
});

const GlobalProvider = ({
  children,
}: {
  children: ReactNode | ReactNode[];
}) => {
  const [target, setTarget] = useState<
    | MutableRefObject<Object3D<Object3DEventMap>>
    | Object3D<Object3DEventMap>
    | null
  >(null);

  useEffect(() => console.log("target666", target), [target]);

  return (
    <GlobalContext.Provider value={{ target, setTarget }}>
      {children}
    </GlobalContext.Provider>
  );
};

export { GlobalContext, GlobalProvider };
