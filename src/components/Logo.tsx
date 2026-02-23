export default function Logo({ size = 32 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Outer diamond rotated */}
      <rect
        x="32"
        y="4"
        width="40"
        height="40"
        rx="4"
        transform="rotate(45 32 4)"
        stroke="#14b8a6"
        strokeWidth="2.5"
        fill="none"
      />

      {/* Inner abstract F path */}
      <path
        d="M24 20h16M24 20v24M24 32h12"
        stroke="#5eead4"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Accent dot */}
      <circle cx="44" cy="20" r="3" fill="#14b8a6" />
    </svg>
  );
}
