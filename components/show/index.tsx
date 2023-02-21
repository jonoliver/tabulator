type ShowProps = {
  when: boolean;
  children: JSX.Element;
};
export const Show = ({ when, children }: ShowProps) => when ? children : null;
