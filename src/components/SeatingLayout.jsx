import { useCallback, useEffect, useRef } from "react";
import seatingChartImage from "../assets/Seating chart.png";
import tableRegions from "../data/tableRegions.json";

export default function SeatingLayout({ highlightedTableNames = [] }) {
  const imageRef = useRef(null);
  const canvasRef = useRef(null);

  const drawHighlights = useCallback(() => {
    const image = imageRef.current;
    const canvas = canvasRef.current;
    if (!image || !canvas) {
      return;
    }

    const width = image.clientWidth;
    const height = image.clientHeight;
    if (!width || !height) {
      return;
    }

    canvas.width = width;
    canvas.height = height;

    const ctx = canvas.getContext("2d");
    if (!ctx) {
      return;
    }

    ctx.clearRect(0, 0, width, height);
    highlightedTableNames.forEach((tableName) => {
      const region = tableRegions[tableName];
      if (!region) {
        return;
      }

      const cx = (region.cx ?? region.x + region.w / 2) * width;
      const cy = (region.cy ?? region.y + region.h / 2) * height;
      const radius = (region.r ?? Math.min(region.w, region.h) * 0.5) * Math.min(width, height);

      ctx.beginPath();
      ctx.arc(cx, cy, radius, 0, Math.PI * 2);
      ctx.closePath();
      ctx.fillStyle = "rgba(255, 215, 0, 0.28)";
      ctx.strokeStyle = "rgba(255, 184, 0, 0.95)";
      ctx.lineWidth = Math.max(2, width * 0.0032);
      ctx.shadowColor = "rgba(255, 184, 0, 0.6)";
      ctx.shadowBlur = 18;
      ctx.fill();
      ctx.shadowBlur = 0;
      ctx.stroke();
    });
  }, [highlightedTableNames]);

  useEffect(() => {
    const image = imageRef.current;
    if (!image) {
      return undefined;
    }

    const handleLoad = () => drawHighlights();
    image.addEventListener("load", handleLoad);

    const resizeObserver = new ResizeObserver(() => drawHighlights());
    resizeObserver.observe(image);
    window.addEventListener("resize", drawHighlights);
    drawHighlights();

    return () => {
      image.removeEventListener("load", handleLoad);
      resizeObserver.disconnect();
      window.removeEventListener("resize", drawHighlights);
    };
  }, [drawHighlights]);

  return (
    <div className="seating-layout-container">
      <div className="seating-layout chart-layout">
        <img
          ref={imageRef}
          src={seatingChartImage}
          alt="Wedding seating chart"
          className="seating-chart-image"
        />
        <canvas ref={canvasRef} className="seating-chart-canvas" />
      </div>
    </div>
  );
}