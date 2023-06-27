export type FlexProps = {
  gap?: string;
  direction?: "row" | "column";
  wrap?: "nowrap" | "wrap";
  alignItems?: "center" | "flex-start" | "flex-end";
  justifyContent?:
    | "center"
    | "flex-start"
    | "flex-end"
    | "space-between"
    | "space-around";
};
