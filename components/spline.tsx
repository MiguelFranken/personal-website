import { useEffect, useRef } from "react";
import { SPEObject } from "@splinetool/runtime";
import Spline from "@splinetool/react-spline";

export default function SplineArt() {
  const scene = "https://prod.spline.design/E7Pa8QkNKx1Y51B1/scene.splinecode";

  const splineObject = useRef<SPEObject>();

  const getScaleValue = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth > 1640) {
      return 1;
    } else if (screenWidth >= 1526) {
      return 0.9;
    } else if (screenWidth > 1330) {
      return 0.8;
    } else if (screenWidth >= 1280) {
      return 0.7;
    } else if (screenWidth >= 1024) {
      return 0.6;
    } else if (screenWidth >= 768) {
      return 0.8;
    } else if (screenWidth >= 640) {
      return 0.7;
    } else if (screenWidth >= 480) {
      return 0.55;
    } else {
      return 0.4;
    }
  };

  const onLoad = (spline) => {
    const object = spline.findObjectById(
      "90e8997d-4160-4a25-abaa-5e2df5d25073"
    );
    if (object) {
      splineObject.current = object;
      setSplineScale();
    }
  };

  const setSplineScale = () => {
    if (splineObject.current) {
      const scaleValue = getScaleValue();
      const newScale = splineObject.current.scale;
      newScale.x = scaleValue;
      newScale.y = scaleValue;
      newScale.z = scaleValue;
      splineObject.current.scale = newScale;
      console.log(newScale);
    } else {
      console.error("spline object is undefined");
    }
  };

  useEffect(() => {
    const scaleSpline = () => {
      if (splineObject.current && splineObject.current.scale) {
        setSplineScale();
      }
    };
    window.addEventListener("resize", scaleSpline);
    return () => window.removeEventListener("resize", scaleSpline);
  });

  return <Spline scene={scene} onLoad={onLoad} />;
}
