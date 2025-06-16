import classes from "./styles.module.scss";

type TProps = {
  children: React.ReactNode;
  as?: "h1" | "h2";
};

export function Title({ as: Tag = "h2", children }: TProps) {
  return <Tag className={classes.wrapper}>{children}</Tag>;
}
