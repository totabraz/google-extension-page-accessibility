/// <reference types="chrome" />

import { checkImageWithoutPropAlt } from "@/utils";
import { useEffect, useState } from "react";
import classes from "./styles.module.scss";

type TToggle = { id: string };

export default function Toggle({ id }: TToggle) {
  const [toggle, setToggle] = useState<boolean | undefined>(false);
  if (!id) {
    return <p className={classes.error}>missing Toggle ID</p>;
  }

  useEffect(() => {
    chrome.storage.sync.get("shouldCheckImagesWithoutAlt", (data: any) => {
      const enabled = data?.shouldCheckImagesWithoutAlt || false;
      setToggle(enabled);
      checkImageWithoutPropAlt(enabled);
    });
  }, []);

  useEffect(() => {
    chrome.storage.sync.set({ shouldCheckImagesWithoutAlt: toggle }, () => {
      checkImageWithoutPropAlt(toggle);
    });
  }, [toggle]);

  const handleSetToggle = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <p>toggle: {`${toggle ? "enable" : "disable"}`}</p>
      <label className={classes.switch}>
        <input type="checkbox" onClick={handleSetToggle} checked={toggle} />
        <span className={classes.slider}></span>
      </label>
    </>
  );
}
