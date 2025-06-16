import classes from "./styles.module.scss";

type TToggle = { id: string };

export default function Toggle({ id }: TToggle) {
  if (!id) {
    return <p className={classes.error}>missing Toggle ID</p>;
  }
  return (
    <label className={classes.switch}>
      <input type="checkbox" id={id} />
      <span className={classes.slider}></span>
    </label>
  );
}
