import { useId } from "react";
import styles from "@/styles/ProjectVisual.module.css";

const palette = {
  document: "#eae4d8",
  cloud: "#242920",
  pipeline: "#dfe6da",
  crypt: "#ecd4c8",
  viewer: "#deddea",
  automation: "#d6e2e5",
  graphs: "#e7dcc2",
  scraper: "#dce6ea",
};

function DocumentScene({ id }) {
  return (
    <>
      <path d="M-20 397 432 136 758 324" fill="none" stroke="#d5cdbd" />
      <path d="M-30 450 432 183 765 375" fill="none" stroke="#d5cdbd" />
      <ellipse
        cx="355"
        cy="388"
        rx="175"
        ry="25"
        fill="#7b725b"
        opacity=".09"
      />
      <g transform="translate(230 70) rotate(-8 124 162)">
        <rect x="9" y="10" width="246" height="323" rx="5" fill="#d9d1c1" />
        <rect
          width="246"
          height="323"
          rx="5"
          fill="#fffdf7"
          filter={`url(#${id}-shadow)`}
        />
        <rect x="26" y="28" width="30" height="30" rx="7" fill="#dd5b36" />
        <path
          d="m35 43 5 5 9-12"
          fill="none"
          stroke="#fff9ed"
          strokeWidth="2.5"
        />
        <rect x="70" y="34" width="91" height="5" rx="2.5" fill="#364034" />
        <rect x="70" y="46" width="62" height="4" rx="2" fill="#d4d5cd" />
        <path d="M26 80h194" stroke="#e3e1d8" />
        <text x="26" y="107" fill="#899083" fontSize="8" letterSpacing="1.7">
          DOCUMENT INTELLIGENCE
        </text>
        <rect x="26" y="126" width="161" height="7" rx="3.5" fill="#455040" />
        <rect x="26" y="143" width="188" height="4" rx="2" fill="#ddded5" />
        <rect x="26" y="155" width="172" height="4" rx="2" fill="#ddded5" />
        <rect x="26" y="180" width="194" height="42" rx="4" fill="#edf0e6" />
        <rect x="37" y="192" width="49" height="4" rx="2" fill="#778873" />
        <rect x="37" y="204" width="86" height="5" rx="2.5" fill="#44533c" />
        <rect x="26" y="237" width="75" height="4" rx="2" fill="#c9ccbf" />
        <rect x="26" y="248" width="124" height="4" rx="2" fill="#c9ccbf" />
        <path d="M26 281h194" stroke="#e3e1d8" />
        <text x="26" y="299" fill="#98a08f" fontSize="7" letterSpacing="1">
          EXTRACT · UNDERSTAND · ORGANIZE
        </text>
      </g>
      <path
        d="M374 224h89v-62h56M361 303h105v26h48"
        fill="none"
        stroke="#6d8060"
        strokeDasharray="4 5"
        opacity=".6"
      />
      <g transform="translate(457 121)" filter={`url(#${id}-shadow)`}>
        <rect width="173" height="70" rx="10" fill="#f9fcf4" />
        <rect x="15" y="17" width="28" height="28" rx="7" fill="#e0e9d6" />
        <path
          d="m23 31 5 5 8-10"
          fill="none"
          stroke="#5d7351"
          strokeWidth="2"
        />
        <text x="55" y="29" fontSize="9" fill="#7f8b75">
          STRUCTURED OUTPUT
        </text>
        <text x="55" y="47" fontSize="13" fill="#34432d">
          Ready to work.
        </text>
      </g>
      <g transform="translate(105 279)" filter={`url(#${id}-shadow)`}>
        <rect width="174" height="64" rx="10" fill="#d45b36" />
        <path
          d="M18 21h14M18 28h20M18 35h10"
          stroke="#fff1da"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <text x="51" y="27" fontSize="9" fill="#ffe1c6">
          FROM COMPLEXITY
        </text>
        <text x="51" y="44" fontSize="13" fill="#fff9ed">
          To clarity.
        </text>
      </g>
      <g transform="translate(497 311)">
        <circle cx="20" cy="20" r="20" fill="#e1e8d4" stroke="#c4cfb6" />
        <path
          d="m13 20 5 5 10-11"
          fill="none"
          stroke="#617650"
          strokeWidth="2"
        />
      </g>
    </>
  );
}

function CloudScene({ id }) {
  return (
    <>
      <circle cx="360" cy="239" r="212" fill={`url(#${id}-aura)`} />
      <g fill="none" stroke="#718165" strokeOpacity=".24">
        <circle cx="360" cy="239" r="174" />
        <circle cx="360" cy="239" r="118" />
        <ellipse
          cx="360"
          cy="239"
          rx="250"
          ry="88"
          transform="rotate(-27 360 239)"
        />
        <ellipse
          cx="360"
          cy="239"
          rx="250"
          ry="88"
          transform="rotate(27 360 239)"
        />
        <path d="M0 239h720M360 0v480" strokeDasharray="2 9" />
      </g>
      <g fill="none" stroke="#d56c3d" strokeOpacity=".65">
        <path d="M197 165 319 214M401 217l121-58M317 265l-118 61M402 265l120 65" />
      </g>
      <g transform="translate(298 177)" filter={`url(#${id}-shadow)`}>
        <rect
          x="-10"
          y="-10"
          width="144"
          height="144"
          rx="33"
          fill="#d86c3a"
          opacity=".07"
          stroke="#ec8c52"
        />
        <rect
          width="124"
          height="124"
          rx="25"
          fill={`url(#${id}-orange)`}
          stroke="#f4ac71"
        />
        <path
          d="M42 40h40v40H42zM33 48h9m-9 15h9m-9 15h9m40-30h9m-9 15h9m-9 15h9M48 31v9m15-9v9m15-9v9M48 80v10m15-10v10m15-10v10"
          fill="none"
          stroke="#ffe0ba"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="m52 69 10-18 10 18M56 63h13"
          fill="none"
          stroke="#ffe9cb"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </g>
      {[
        [176, 143, "DATA"],
        [522, 141, "MODELS"],
        [171, 309, "APPS"],
        [520, 313, "SERVICES"],
      ].map(([x, y, label], index) => (
        <g key={label} transform={`translate(${x} ${y})`}>
          <rect
            width="44"
            height="44"
            rx="12"
            fill="#303a2c"
            stroke="#59634d"
          />
          {index === 0 ? (
            <>
              <ellipse
                cx="22"
                cy="16"
                rx="9"
                ry="4"
                fill="none"
                stroke="#b1bea0"
              />
              <path
                d="M13 16v12c0 5 18 5 18 0V16M13 22c0 5 18 5 18 0"
                fill="none"
                stroke="#b1bea0"
              />
            </>
          ) : index === 1 ? (
            <>
              <circle cx="22" cy="22" r="9" fill="none" stroke="#b1bea0" />
              <path
                d="M13 22h18M22 13c-7 7-7 11 0 18 7-7 7-11 0-18"
                fill="none"
                stroke="#b1bea0"
              />
            </>
          ) : index === 2 ? (
            <path
              d="M14 14h6v6h-6zm10 0h6v6h-6zm-10 10h6v6h-6zm10 0h6v6h-6z"
              fill="none"
              stroke="#b1bea0"
            />
          ) : (
            <path
              d="m19 14-7 8 7 8m6-16 7 8-7 8"
              fill="none"
              stroke="#b1bea0"
              strokeWidth="1.5"
            />
          )}
          <text
            x="22"
            y="65"
            textAnchor="middle"
            fontSize="8"
            letterSpacing="2"
            fill="#a0ad92"
          >
            {label}
          </text>
        </g>
      ))}
      <g fill="#e8a26a">
        <circle cx="414" cy="73" r="4" />
        <circle cx="245" cy="365" r="3" />
        <circle cx="116" cy="257" r="3" />
        <circle cx="579" cy="220" r="3" />
      </g>
      <text
        x="360"
        y="432"
        textAnchor="middle"
        fill="#819074"
        fontSize="8"
        letterSpacing="4"
      >
        CONNECTED BY INTELLIGENCE
      </text>
    </>
  );
}

function PipelineScene({ id }) {
  return (
    <>
      <g stroke="#b7c6ad" strokeOpacity=".35" fill="none">
        <path d="m-40 194 385-222 417 241M-40 306 345 84l417 241M-40 418 345 196l417 241M95 0v480M289 0v480M483 0v480M677 0v480" />
      </g>
      <path
        d="M176 268h97v-99h118v139h143"
        fill="none"
        stroke="#a5b897"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M176 268h97v-99h50"
        fill="none"
        stroke="#667e53"
        strokeWidth="3"
        strokeDasharray="5 7"
      />
      <g transform="translate(87 214)" filter={`url(#${id}-shadow)`}>
        <rect width="126" height="110" rx="14" fill="#fafbf5" />
        <rect x="17" y="17" width="29" height="29" rx="7" fill="#e5ecdd" />
        <path
          d="M26 27h11m-11 5h11m-11 5h7"
          stroke="#6e815d"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
        <text x="18" y="72" fill="#49573c" fontSize="12">
          Collect
        </text>
        <text x="18" y="91" fill="#a0a795" fontSize="8" letterSpacing="1">
          01 / INPUT
        </text>
      </g>
      <g transform="translate(303 107)" filter={`url(#${id}-shadow)`}>
        <rect x="5" y="7" width="146" height="122" rx="14" fill="#bac7ad" />
        <rect width="146" height="122" rx="14" fill="#d7633b" />
        <rect x="18" y="18" width="30" height="30" rx="8" fill="#ed9265" />
        <path d="m32 24-5 9h6l-2 10 9-13h-7l2-6" fill="#fff0d5" />
        <text x="19" y="78" fill="#fff6e8" fontSize="14">
          Transform
        </text>
        <text x="19" y="102" fill="#ffceb0" fontSize="8" letterSpacing="1">
          02 / PROCESS
        </text>
        <circle cx="123" cy="28" r="4" fill="#ffd5a4" />
      </g>
      <g transform="translate(500 251)" filter={`url(#${id}-shadow)`}>
        <rect width="127" height="110" rx="14" fill="#fafbf5" />
        <rect x="18" y="17" width="29" height="29" rx="7" fill="#e5ecdd" />
        <path
          d="m26 31 5 5 8-11"
          stroke="#6e815d"
          strokeWidth="1.7"
          fill="none"
        />
        <text x="19" y="72" fill="#49573c" fontSize="12">
          Deliver
        </text>
        <text x="19" y="91" fill="#a0a795" fontSize="8" letterSpacing="1">
          03 / OUTPUT
        </text>
      </g>
      <circle
        cx="273"
        cy="268"
        r="6"
        fill="#758c61"
        stroke="#dfe6da"
        strokeWidth="3"
      />
      <circle
        cx="391"
        cy="308"
        r="6"
        fill="#758c61"
        stroke="#dfe6da"
        strokeWidth="3"
      />
      <g transform="translate(286 359)">
        <rect width="162" height="31" rx="15.5" fill="#ced9c4" />
        <circle cx="17" cy="15.5" r="3" fill="#6c8458" />
        <text x="30" y="19" fill="#687c57" fontSize="8" letterSpacing="1.3">
          ONE SEAMLESS FLOW
        </text>
      </g>
    </>
  );
}

function PersonalScene({ kind, id }) {
  if (kind === "crypt")
    return (
      <>
        <circle cx="360" cy="239" r="173" fill="#e1b9a8" opacity=".4" />
        <circle
          cx="360"
          cy="239"
          r="134"
          fill="none"
          stroke="#c69581"
          strokeDasharray="2 12"
        />
        <g
          transform="translate(264 139) rotate(-9 96 104)"
          filter={`url(#${id}-shadow)`}
        >
          <path
            d="M49 85V57a47 47 0 0 1 94 0v28"
            fill="none"
            stroke="#fff3e6"
            strokeWidth="21"
          />
          <rect y="81" width="192" height="142" rx="22" fill="#a65239" />
          <rect x="7" y="81" width="178" height="133" rx="18" fill="#c66a48" />
          <circle cx="96" cy="137" r="14" fill="#f6d6b8" />
          <path d="m91 146-4 24h18l-4-24" fill="#f6d6b8" />
        </g>
        <g fill="#bb7b60">
          <path d="m169 141 7-16 7 16 16 7-16 7-7 16-7-16-16-7z" />
          <circle cx="539" cy="307" r="7" />
          <circle cx="539" cy="307" r="23" fill="none" stroke="#c9957d" />
        </g>
      </>
    );

  if (kind === "graphs")
    return (
      <>
        <circle cx="374" cy="235" r="178" fill="#ded0aa" opacity=".55" />
        <g
          transform="translate(160 86) rotate(-6 197 150)"
          filter={`url(#${id}-shadow)`}
        >
          <rect width="400" height="298" rx="14" fill="#fffcf2" />
          <text x="27" y="40" fill="#867851" fontSize="9" letterSpacing="2">
            MAKING DATA VISIBLE
          </text>
          <path
            d="M30 240h338M30 184h338M30 129h338M30 73h338"
            stroke="#ede8d8"
          />
          <rect x="46" y="173" width="40" height="67" rx="5" fill="#c7cba5" />
          <rect x="101" y="146" width="40" height="94" rx="5" fill="#a8b18a" />
          <rect x="156" y="171" width="40" height="69" rx="5" fill="#d6bd85" />
          <rect x="211" y="113" width="40" height="127" rx="5" fill="#d78f52" />
          <rect x="266" y="80" width="40" height="160" rx="5" fill="#c5663e" />
          <path
            d="m63 135 60-34 59 16 54-59 50-21"
            fill="none"
            stroke="#677450"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <circle cx="286" cy="37" r="5" fill="#677450" />
          <rect x="30" y="261" width="67" height="5" rx="2.5" fill="#ddd9cb" />
          <rect x="109" y="261" width="42" height="5" rx="2.5" fill="#ddd9cb" />
        </g>
      </>
    );

  const isViewer = kind === "viewer";
  const accent = isViewer ? "#8984ae" : "#60858c";
  return (
    <>
      <circle
        cx="362"
        cy="241"
        r="173"
        fill={isViewer ? "#c9c7df" : "#c3d4d9"}
        opacity=".6"
      />
      <g
        transform="translate(154 96) rotate(-6 197 150)"
        filter={`url(#${id}-shadow)`}
      >
        <rect
          x="21"
          y="22"
          width="393"
          height="279"
          rx="13"
          fill={isViewer ? "#c1bed5" : "#adc4ca"}
        />
        <rect width="393" height="279" rx="13" fill="#fafbf9" />
        <path d="M0 36h393" stroke="#e4e8e7" />
        <g fill={isViewer ? "#c5c1d7" : "#bfd0d1"}>
          <circle cx="19" cy="18" r="3" />
          <circle cx="30" cy="18" r="3" />
          <circle cx="41" cy="18" r="3" />
        </g>
        <rect x="129" y="13" width="136" height="10" rx="5" fill="#eef0ec" />
        <rect
          x="17"
          y="53"
          width="67"
          height="209"
          rx="5"
          fill={isViewer ? "#eeedf4" : "#eaf0ef"}
        />
        {[74, 96, 118, 140].map((y, i) => (
          <rect
            key={y}
            x="29"
            y={y}
            width={i === 1 ? 36 : 43}
            height="5"
            rx="2.5"
            fill={i === 0 ? accent : "#cdd5d2"}
          />
        ))}
        {isViewer ? (
          <>
            <rect
              x="99"
              y="53"
              width="276"
              height="149"
              rx="6"
              fill="#d2cce0"
            />
            <path d="m99 178 76-86 75 77 48-48 77 81H99z" fill="#aaa1c2" />
            <circle cx="309" cy="91" r="20" fill="#eee9f3" />
            <rect x="99" y="218" width="84" height="44" rx="5" fill="#ddd7e7" />
            <rect
              x="194"
              y="218"
              width="84"
              height="44"
              rx="5"
              fill="#e4e1ed"
            />
            <rect
              x="289"
              y="218"
              width="86"
              height="44"
              rx="5"
              fill="#d2cce0"
            />
          </>
        ) : kind === "automation" ? (
          <>
            <path
              d="M160 104h133v101H161z"
              fill="none"
              stroke="#b8cccb"
              strokeWidth="2"
              strokeDasharray="5 5"
            />
            {[
              [122, 77],
              [256, 77],
              [256, 179],
              [122, 179],
            ].map(([x, y], index) => (
              <g key={x + y} transform={`translate(${x} ${y})`}>
                <rect
                  width="73"
                  height="53"
                  rx="7"
                  fill={index === 1 ? "#d97950" : "#dce7e5"}
                />
                <path
                  d={
                    index === 1
                      ? "m31 17 12 10-12 10z"
                      : "M23 21h27M23 29h20M23 37h13"
                  }
                  fill={index === 1 ? "#ffefda" : "none"}
                  stroke={index === 1 ? "none" : "#86a19c"}
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </g>
            ))}
          </>
        ) : (
          <>
            <rect
              x="103"
              y="57"
              width="267"
              height="31"
              rx="5"
              fill="#eaf0f0"
            />
            <circle cx="119" cy="72" r="5" fill="none" stroke="#88a2a7" />
            <path d="m123 76 4 4" stroke="#88a2a7" />
            <rect
              x="138"
              y="69"
              width="143"
              height="5"
              rx="2.5"
              fill="#c1d0d2"
            />
            {[104, 147, 190].map((y, i) => (
              <g key={y}>
                <rect
                  x="103"
                  y={y}
                  width="267"
                  height="33"
                  rx="4"
                  fill={i === 1 ? "#e9eee7" : "#f0f3f1"}
                />
                <rect
                  x="114"
                  y={y + 8}
                  width="17"
                  height="17"
                  rx="4"
                  fill={i === 1 ? "#adbda1" : "#b5cbd0"}
                />
                <rect
                  x="144"
                  y={y + 10}
                  width="103"
                  height="4"
                  rx="2"
                  fill="#a4b9bc"
                />
                <rect
                  x="144"
                  y={y + 20}
                  width="72"
                  height="3"
                  rx="1.5"
                  fill="#d1dbd8"
                />
                <path
                  d={`m337 ${y + 17} 4 4 8-9`}
                  fill="none"
                  stroke="#769484"
                  strokeWidth="1.5"
                />
              </g>
            ))}
          </>
        )}
      </g>
      <circle cx="570" cy="137" r="14" fill={accent} opacity=".4" />
      <path
        d="M116 315h24m-12-12v24"
        stroke={accent}
        strokeWidth="2"
        opacity=".6"
      />
    </>
  );
}

export default function ProjectVisual({ kind = "document" }) {
  const id = `visual-${useId().replace(/:/g, "")}`;

  return (
    <div
      className={`${styles.visual} ${kind === "cloud" ? styles.dark : ""}`}
      style={{ backgroundColor: palette[kind] || palette.scraper }}
      aria-hidden="true"
    >
      <svg
        className={styles.scene}
        viewBox="0 0 720 480"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        focusable="false"
      >
        <defs>
          <filter
            id={`${id}-shadow`}
            x="-50%"
            y="-50%"
            width="200%"
            height="230%"
          >
            <feDropShadow
              dx="0"
              dy="13"
              stdDeviation="17"
              floodColor="#27341f"
              floodOpacity=".13"
            />
          </filter>
          <radialGradient id={`${id}-aura`}>
            <stop stopColor="#d8793f" stopOpacity=".21" />
            <stop offset="1" stopColor="#d8793f" stopOpacity="0" />
          </radialGradient>
          <linearGradient
            id={`${id}-orange`}
            x1="0"
            y1="0"
            x2="124"
            y2="124"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#ed945a" />
            <stop offset="1" stopColor="#b9512d" />
          </linearGradient>
        </defs>
        {kind === "document" ? (
          <DocumentScene id={id} />
        ) : kind === "cloud" ? (
          <CloudScene id={id} />
        ) : kind === "pipeline" ? (
          <PipelineScene id={id} />
        ) : (
          <PersonalScene kind={kind} id={id} />
        )}
      </svg>
      <span className={styles.grain} />
    </div>
  );
}
