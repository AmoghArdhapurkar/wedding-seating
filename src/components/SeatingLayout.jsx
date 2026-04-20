import { useCallback, useEffect, useRef } from "react";
import seatingChartImage from "../assets/Seating chart.png";
import tableRegions from "../data/tableRegions.json";

function getRegionCenterPx(region, width, height) {
  if (region.w && region.h) {
    return {
      x: (region.x + region.w / 2) * width,
      y: (region.y + region.h / 2) * height,
    };
  }
  const cx = (region.cx ?? region.x + region.w / 2) * width;
  const cy = (region.cy ?? region.y + region.h / 2) * height;
  return { x: cx, y: cy };
}

function tableNumberLabel(tableName) {
  const match = tableName.match(/\d+/);
  return match ? match[0] : tableName;
}

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
      ctx.fillStyle = "rgba(255, 215, 0, 0.28)";
      ctx.strokeStyle = "rgba(255, 184, 0, 0.95)";
      ctx.lineWidth = Math.max(2, width * 0.0032);
      ctx.shadowColor = "rgba(255, 184, 0, 0.6)";
      ctx.shadowBlur = 18;

      if (region.w && region.h) {
        const x = region.x * width;
        const y = region.y * height;
        const w = region.w * width;
        const h = region.h * height;
        ctx.beginPath();
        ctx.roundRect(x, y, w, h, Math.max(8, Math.min(w, h) * 0.2));
        ctx.closePath();
        ctx.fill();
        ctx.shadowBlur = 0;
        ctx.stroke();
        return;
      }

      const cx = (region.cx ?? region.x + region.w / 2) * width;
      const cy = (region.cy ?? region.y + region.h / 2) * height;
      const radius = (region.r ?? Math.min(region.w, region.h) * 0.5) * Math.min(width, height);

      ctx.beginPath();
      ctx.arc(cx, cy, radius, 0, Math.PI * 2);
      ctx.closePath();
      ctx.fill();
      ctx.shadowBlur = 0;
      ctx.stroke();
    });

    const fontPx = Math.max(12, Math.min(width, height) * 0.026);
    ctx.font = `700 ${fontPx}px system-ui, -apple-system, sans-serif`;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.lineJoin = "round";
    ctx.miterLimit = 2;

    Object.entries(tableRegions).forEach(([tableName, region]) => {
      const { x, y } = getRegionCenterPx(region, width, height);
      const label = tableNumberLabel(tableName);
      ctx.lineWidth = Math.max(2.5, fontPx * 0.18);
      ctx.strokeStyle = "rgba(255, 255, 255, 0.95)";
      ctx.fillStyle = "rgba(28, 42, 62, 0.96)";
      ctx.shadowBlur = 0;
      ctx.strokeText(label, x, y);
      ctx.fillText(label, x, y);
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