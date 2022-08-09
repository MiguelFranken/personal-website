import styles from "@/styles/skewed.module.css";
import classNames from "classnames";
import { ReactElement } from "react";

type SkewedSectionProps = {
  children: ReactElement | ReactElement[];
};

export default function SkewedSection({ children }: SkewedSectionProps) {
  return (
    <div className="overflow-hidden relative">
      <div className="!block">
        <div className={classNames(styles.section, styles.mbSection)}>
          <div className="absolute inset-0">
            <div className="absolute inset-0 -skew-y-3 origin-top-right">
              <div className="absolute inset-0 bg-conic-to-l from-yellow-200 via-red-500 to-fuchsia-500"></div>
            </div>
          </div>
          <div className={classNames("relative", styles.ptSection)}>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
