import { Title } from "../../atoms/Title";
import classes from "./styles.module.scss";

type TProps = {
  children: React.ReactNode;
  sectionTitle: string;
};

export default function SectionsWrapper({ children, sectionTitle }: TProps) {
  return (
    <section className={classes.sectionsWrapper}>
      <Title as={"h2"}>{sectionTitle}</Title>
      {children}
    </section>
  );
}
