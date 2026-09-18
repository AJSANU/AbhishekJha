import { useId } from "react";
import styles from "../../styles/OrbitalVisual.module.css";

const RADIUS = 145;
const CENTER = { x: 280, y: 246 };
const TILT = -0.34;
const TURN = 0.4;

function project(x, y, z) {
  const tiltedY = y * Math.cos(TILT) - z * Math.sin(TILT);
  const tiltedZ = y * Math.sin(TILT) + z * Math.cos(TILT);

  return {
    x: CENTER.x + x * Math.cos(TURN) - tiltedY * Math.sin(TURN),
    y: CENTER.y + x * Math.sin(TURN) + tiltedY * Math.cos(TURN),
    z: tiltedZ,
  };
}

function makeCurve(pointAt, front) {
  let path = "";
  let drawing = false;

  for (let step = 0; step <= 144; step += 1) {
    const point = pointAt((step / 144) * Math.PI * 2);
    const visible = front ? point.z >= -1 : point.z <= 1;

    if (visible) {
      path += `${drawing ? "L" : "M"}${point.x.toFixed(2)},${point.y.toFixed(2)} `;
    }

    drawing = visible;
  }

  return path;
}

function createGrid(front) {
  const paths = [];

  for (let line = 0; line < 36; line += 1) {
    const longitude = (line / 36) * Math.PI;
    paths.push(
      makeCurve(
        (angle) =>
          project(
            RADIUS * Math.sin(angle) * Math.cos(longitude),
            RADIUS * Math.cos(angle),
            RADIUS * Math.sin(angle) * Math.sin(longitude),
          ),
        front,
      ),
    );
  }

  for (let line = 1; line < 22; line += 1) {
    const latitude = (line / 22) * Math.PI;
    paths.push(
      makeCurve(
        (angle) =>
          project(
            RADIUS * Math.sin(latitude) * Math.cos(angle),
            RADIUS * Math.cos(latitude),
            RADIUS * Math.sin(latitude) * Math.sin(angle),
          ),
        front,
      ),
    );
  }

  return paths;
}

const backGrid = createGrid(false);
const frontGrid = createGrid(true);

function SkillIcon({ type }) {
  if (type === "cloud") {
    return (
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M7 17.5h10a4 4 0 0 0 .56-7.96 5.75 5.75 0 0 0-11.14-1.2A4.6 4.6 0 0 0 7 17.5Z" />
        <path d="M9 20h6M12 17.5V20" />
      </svg>
    );
  }

  if (type === "ai") {
    return (
      <svg viewBox="0 0 24 24" fill="none">
        <path d="m12 3 2.4 6.6L21 12l-6.6 2.4L12 21l-2.4-6.6L3 12l6.6-2.4L12 3Z" />
        <path d="m19 3 .55 1.45L21 5l-1.45.55L19 7l-.55-1.45L17 5l1.45-.55L19 3Z" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" fill="none">
      <rect x="3.5" y="4.5" width="17" height="15" rx="2" />
      <path d="M3.5 9h17M8 12.5l-2 2 2 2M16 12.5l2 2-2 2M13 12l-2 5" />
      <path d="M6.5 6.7h.01M9 6.7h.01" strokeWidth="2" />
    </svg>
  );
}

export default function OrbitalVisual() {
  const instanceId = useId().replace(/:/g, "");
  const surfaceId = `orbital-surface-${instanceId}`;
  const gridId = `orbital-grid-${instanceId}`;
  const shadowId = `orbital-shadow-${instanceId}`;
  const ringId = `orbital-ring-${instanceId}`;

  return (
    <div className={styles.visual} aria-hidden="true">
      <svg className={styles.drawing} viewBox="0 0 560 500" fill="none">
        <defs>
          <radialGradient id={surfaceId} cx="36%" cy="28%" r="78%">
            <stop offset="0" stopColor="#ffd8b1" stopOpacity="0.04" />
            <stop offset="0.55" stopColor="#f18a50" stopOpacity="0.13" />
            <stop offset="0.86" stopColor="#ec642f" stopOpacity="0.27" />
            <stop offset="1" stopColor="#d94b23" stopOpacity="0.53" />
          </radialGradient>
          <linearGradient
            id={gridId}
            x1="155"
            y1="115"
            x2="388"
            y2="370"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#e98a4b" />
            <stop offset="0.44" stopColor="#ef612e" />
            <stop offset="1" stopColor="#ce421f" />
          </linearGradient>
          <linearGradient
            id={ringId}
            x1="80"
            y1="350"
            x2="475"
            y2="170"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#e66a3c" />
            <stop offset="0.55" stopColor="#e9a789" />
            <stop offset="1" stopColor="#bebaad" />
          </linearGradient>
          <filter id={shadowId} x="-40%" y="-200%" width="180%" height="500%">
            <feGaussianBlur stdDeviation="12" />
          </filter>
        </defs>

        <g stroke="#d5d1c6" strokeWidth="0.7">
          <path d="M280 40v29M280 424v29M67 246h29M464 246h29" />
          <path d="M273 47h14M273 446h14M74 239v14M486 239v14" />
          <circle
            cx="280"
            cy="246"
            r="192"
            strokeDasharray="2 8"
            opacity="0.6"
          />
          <path d="M134 101l8 8M418 384l8 8M134 391l8-8M418 109l8-8" />
        </g>

        <g className={styles.coordinates} fill="#979487">
          <text x="296" y="54">
            Y
          </text>
          <text x="484" y="271">
            X
          </text>
          <text x="70" y="84">
            BUILD. CONNECT. EVOLVE.
          </text>
          <text x="364" y="434">
            IDEAS → IMPACT
          </text>
        </g>

        <ellipse
          cx="282"
          cy="421"
          rx="112"
          ry="9"
          fill="#a8957b"
          opacity="0.17"
          filter={`url(#${shadowId})`}
        />

        <g className={styles.orbitBack}>
          <ellipse
            cx="280"
            cy="246"
            rx="229"
            ry="78"
            transform="rotate(-29 280 246)"
            stroke="#bdb8aa"
            strokeWidth="0.8"
          />
          <ellipse
            cx="280"
            cy="246"
            rx="172"
            ry="207"
            transform="rotate(29 280 246)"
            stroke="#d6d0c3"
            strokeWidth="0.7"
            strokeDasharray="3 7"
          />
        </g>

        <g className={styles.sphere}>
          <circle cx="280" cy="246" r={RADIUS} fill="#f6f0e6" />
          <g stroke="#e8864e" strokeWidth="0.65" opacity="0.2">
            {backGrid.map((path, index) => (
              <path key={index} d={path} />
            ))}
          </g>
          <circle cx="280" cy="246" r={RADIUS} fill={`url(#${surfaceId})`} />
          <g stroke={`url(#${gridId})`} strokeWidth="0.82" opacity="0.9">
            {frontGrid.map((path, index) => (
              <path key={index} d={path} />
            ))}
          </g>
          <circle
            cx="280"
            cy="246"
            r={RADIUS}
            stroke="#db622e"
            strokeWidth="0.75"
            opacity="0.65"
          />
        </g>

        <path
          d="M79.71 357.01 A229 78 -29 0 0 480.29 134.99"
          stroke={`url(#${ringId})`}
          strokeWidth="1.2"
        />
        <path
          d="M114 177h30l18 15M416 189h28l15-15M150 352h39l18-17"
          stroke="#afa799"
          strokeWidth="0.8"
        />

        <g className={styles.satellite}>
          <circle
            cx="463"
            cy="187"
            r="11"
            fill="#f5f3ee"
            stroke="#eb582c"
            strokeOpacity="0.35"
          />
          <circle cx="463" cy="187" r="4" fill="#eb582c" />
        </g>
        <circle
          cx="93"
          cy="337"
          r="4"
          fill="#f5f3ee"
          stroke="#b8b1a0"
          strokeWidth="1.4"
        />
        <circle cx="337" cy="62" r="3" fill="#b8b1a0" />
        <circle cx="432" cy="353" r="2" fill="#eb582c" />
      </svg>

      <div className={`${styles.skill} ${styles.ui}`}>
        <span className={styles.skillIcon}>
          <SkillIcon type="ui" />
        </span>
        <span>
          <span className={styles.skillTitle}>Interface</span>
          <span className={styles.skillSubtitle}>CRAFTED FOR PEOPLE</span>
        </span>
      </div>

      <div className={`${styles.skill} ${styles.ai}`}>
        <span className={styles.skillIcon}>
          <SkillIcon type="ai" />
        </span>
        <span>
          <span className={styles.skillTitle}>Intelligence</span>
          <span className={styles.skillSubtitle}>BUILT FOR WHAT’S NEXT</span>
        </span>
      </div>

      <div className={`${styles.skill} ${styles.cloud}`}>
        <span className={styles.skillIcon}>
          <SkillIcon type="cloud" />
        </span>
        <span>
          <span className={styles.skillTitle}>Cloud</span>
          <span className={styles.skillSubtitle}>ENGINEERED TO SCALE</span>
        </span>
      </div>
    </div>
  );
}
