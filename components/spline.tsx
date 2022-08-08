import { useEffect, useRef } from "react";
import { SPEObject } from "@splinetool/runtime";
import Spline from "@splinetool/react-spline";

export default function SplineArt() {
  const scene = "https://prod.spline.design/PpI5IThe69TDEQdI/scene.splinecode";

  const splineObject = useRef<SPEObject>();

  const getScaleValue = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth > 1640) {
      return 1;
    } else if (screenWidth > 1484) {
      return 0.9;
    } else if (screenWidth > 1330) {
      return 0.8;
    } else if (screenWidth > 1186) {
      return 0.7;
    }
    return 0.5;
  };

  const onLoad = (spline) => {
    splineObject.current = spline.findObjectById(
      "f6b040e4-21ca-4c89-a488-847fe74fa205"
    );
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
        setSplineScale(getScaleValue());
      }
    }
    window.addEventListener("resize", scaleSpline);
    return () => window.removeEventListener("resize", scaleSpline);
  }, []);

  return <Spline scene={scene} onLoad={onLoad} />;
}
