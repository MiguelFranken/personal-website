import { useEffect, useRef } from "react";
import { SPEObject } from "@splinetool/runtime";
import Spline from "@splinetool/react-spline";

export default function SplineArtSmall() {
  const scene = "https://prod.spline.design/PpI5IThe69TDEQdI/scene.splinecode";

  const splineObject = useRef<SPEObject>();

  const getScaleValue = () => {
    return 0.8;
  };

  const onLoad = (spline) => {
    splineObject.current = spline.findObjectById(
      "f6b040e4-21ca-4c89-a488-847fe74fa205"
    );
    setSplineScale(getScaleValue());
  };

  const setSplineScale = (scale) => {
    if (splineObject.current) {
      const newScale = splineObject.current.scale;
      newScale.x = scale;
      newScale.y = scale;
      newScale.z = scale;
      splineObject.current.scale = newScale;
    } else {
      console.error("spline object is undefined");
    }
  };

  useEffect(() => {
    function scaleSpline() {
      if (splineObject.current && splineObject.current.scale) {
        const scale = getScaleValue();
        console.log("set scale", scale);
        setSplineScale(scale);
      }
    }

    scaleSpline();
    window.addEventListener("resize", scaleSpline);
    return () => window.removeEventListener("resize", scaleSpline);
  }, []);

  return <Spline scene={scene} onLoad={onLoad} />;
}
