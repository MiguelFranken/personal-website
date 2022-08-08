import styles from "@/styles/skewed.module.css";
import classNames from "classnames";
import Projects from "@/components/projects";

export default function Skewed() {
  // TODO MF: Get rid of the -m-16 mb-32 hack
  return (
    <div className="overflow-hidden relative mb-32">
      <div className="!block">
        <div className={classNames(styles.section, styles.mbSection)}>
          <div className="absolute inset-0">
            <div className="absolute inset-0 -skew-y-3 origin-top-right">
              <div className="absolute inset-0 bg-conic-to-l from-yellow-200 via-red-500 to-fuchsia-500"></div>
            </div>
          </div>
          <div className={classNames("relative", styles.ptSection)}>
            <Projects />
          </div>
        </div>
      </div>
    </div>
  );
}
