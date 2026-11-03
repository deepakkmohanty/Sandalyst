import logoBlack from "@/assets/brand/logo-black.png";
import logoGold from "@/assets/brand/logo-gold.png";

export function Logo({
  dark = false,
  monogram = false,
  className = "",
}: {
  dark?: boolean;
  monogram?: boolean;
  className?: string;
}) {
  return (
    <span className={`${monogram ? "brand-monogram" : "brand-lockup"} ${className}`}>
      <img
        src={dark ? logoGold : logoBlack}
        alt="Sandalyst"
        width="977"
        height="661"
        decoding="async"
      />
    </span>
  );
}
