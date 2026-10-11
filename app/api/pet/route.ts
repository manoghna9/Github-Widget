import { getGitHubStats } from "@/lib/github";
import { getPetState } from "@/lib/pet";
import { ASSETS } from "@/lib/assets";

export async function GET() {
  const stats = await getGitHubStats("manoghna9");
  const pet = getPetState(stats.currentStreak);

  const svg = `
    <svg
      width="330"
      height="330"
      xmlns="http://www.w3.org/2000/svg"
    >

      <rect
        width="100%"
        height="100%"
        fill="black"
      />

      <!-- Fish -->
      <image
        href="${ASSETS.fish}"
        x="205"
        y="15"
        width="105"
        height="65"
        preserveAspectRatio="xMidYMid meet"
      />

      <!-- Title -->
      <text
        x="25"
        y="45"
        fill="white"
        font-size="16"
        font-weight="bold"
        font-family="Arial, sans-serif"
      >
        Commit Streak
      </text>

      <!-- Streak number -->
      <text
        x="25"
        y="85"
        fill="white"
        font-family="Arial, sans-serif"
      >
        <tspan
          font-size="32"
          font-weight="bold"
        >
          ${stats.currentStreak}
        </tspan>

        <tspan
          font-size="16"
          font-weight="bold"
        >
          Days
        </tspan>
      </text>

      <!-- Cat -->
      <image
        href="${pet.asset}"
        x="40"
        y="95"
        width="250"
        height="220"
        preserveAspectRatio="xMidYMid meet"
      />

    </svg>
  `;

  return new Response(svg, {
    headers: {
      "Content-Type": "image/svg+xml",
    },
  });
}