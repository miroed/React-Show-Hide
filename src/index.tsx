import React, {
  FunctionComponent,
  ReactNode,
  useEffect,
  useState,
} from "react";

export type ShowHideProps = {
  when: boolean;
  children: ReactNode;
  after?: number;
};

const isNumber = (num: number): boolean => Number.isInteger(num);

export const Show: FunctionComponent<ShowHideProps> = ({
  when,
  children,
  after,
}) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (after && isNumber(after)) {
      const showAfterTimer: ReturnType<typeof setTimeout> = setTimeout(() => {
        setShow(true);
      }, after);
      return () => clearTimeout(showAfterTimer);
    }

    setShow(true);
  }, []);

  if (!show) return null;

  return <>{when && <>{children}</>}</>;
};

export const Hide: FunctionComponent<ShowHideProps> = ({
  when,
  children,
  after,
}) => {
  const [hide, setHide] = useState(true);

  useEffect(() => {
    if (after && isNumber(after)) {
      const hideAfterTimer: ReturnType<typeof setTimeout> = setTimeout(() => {
        setHide(false);
      }, after);
      return () => clearTimeout(hideAfterTimer);
    }

    setHide(false);
  }, []);

  if (hide) return null;

  return <>{when && <>{children}</>}</>;
};
