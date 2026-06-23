import { Rule } from "../../atoms/Rule/Rule";

export interface Stat {
  value: string;
  unit?: string;
  label: string;
}

export interface StatStripProps {
  stats: Stat[];
  dividerHeight?: number;
  className?: string;
}

export function StatStrip({ stats, dividerHeight = 64, className = "" }: StatStripProps) {
  const classes = ["row", className].filter(Boolean).join(" ");

  return (
    <div
      className={classes}
      style={{ gap: "var(--s-6)", flexWrap: "wrap", paddingBlock: "var(--s-6)" }}
    >
      {stats.map((stat, idx) => (
        <div key={stat.label} className="row" style={{ gap: "var(--s-6)" }}>
          <div className="stat">
            <div className="num">
              {stat.value}
              {stat.unit && <span className="unit">{stat.unit}</span>}
            </div>
            <div className="label">{stat.label}</div>
          </div>
          {idx < stats.length - 1 && <Rule orientation="vertical" height={dividerHeight} />}
        </div>
      ))}
    </div>
  );
}
