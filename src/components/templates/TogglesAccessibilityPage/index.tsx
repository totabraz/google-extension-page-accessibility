import classes from "./styles.module.scss";

type TProps = { children: React.ReactNode };

export default function TogglesAccessibilityPage({ children }: TProps) {
  return <div className={classes.pageWrapper}>{children}</div>;
}
