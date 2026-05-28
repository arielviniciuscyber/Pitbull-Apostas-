export default function LogoIcon({ size = 42 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 42 42" fill="none">
      <polygon
        points="21,2 40,14 40,28 21,40 2,28 2,14"
        stroke="#E8921A"
        strokeWidth="1.5"
        fill="rgba(232,146,26,0.06)"
      />
      <circle cx="21" cy="21" r="8" fill="none" stroke="#E8921A" strokeWidth="1.5" />
      <circle cx="17" cy="18" r="1.5" fill="#CC2200" />
      <circle cx="25" cy="18" r="1.5" fill="#CC2200" />
    </svg>
  )
}
