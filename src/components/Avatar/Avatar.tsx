import { ImgHTMLAttributes } from "react";
import styles from "./Avatar.module.scss";

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  hasBorder?: boolean;
  imgProps: string;
};

export function Avatar({ hasBorder = true, imgProps }: AvatarProps) {
  return (
    <img
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
      src={imgProps}
    />
  );
};