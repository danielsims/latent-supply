import { NextRequest, NextResponse } from "next/server";

const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const REPO = "danielsims/inbox";

const PLATFORM_PATTERNS: Record<string, RegExp> = {
  mac: /\.dmg$/,
  windows: /\.msi$/,
  linux: /\.AppImage$/,
};

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ platform: string }> }
) {
  const { platform } = await params;
  const pattern = PLATFORM_PATTERNS[platform.toLowerCase()];

  if (!pattern) {
    return NextResponse.json(
      { error: "Invalid platform. Use: mac, windows, or linux" },
      { status: 400 }
    );
  }

  if (!GITHUB_TOKEN) {
    return NextResponse.json(
      { error: "Download service not configured" },
      { status: 500 }
    );
  }

  // Fetch the latest release from the private repo
  const releaseRes = await fetch(
    `https://api.github.com/repos/${REPO}/releases/latest`,
    {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
        Accept: "application/vnd.github.v3+json",
      },
      next: { revalidate: 300 },
    }
  );

  if (!releaseRes.ok) {
    return NextResponse.json(
      { error: "No releases available yet" },
      { status: 404 }
    );
  }

  const release = await releaseRes.json();
  const asset = release.assets.find((a: { name: string }) =>
    pattern.test(a.name)
  );

  if (!asset) {
    return NextResponse.json(
      { error: `No ${platform} build available for this release` },
      { status: 404 }
    );
  }

  // Request the asset with octet-stream accept header — GitHub responds
  // with a 302 redirect to a temporary, publicly-accessible CDN URL.
  const assetRes = await fetch(
    `https://api.github.com/repos/${REPO}/releases/assets/${asset.id}`,
    {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
        Accept: "application/octet-stream",
      },
      redirect: "manual",
    }
  );

  const redirectUrl = assetRes.headers.get("location");

  if (!redirectUrl) {
    return NextResponse.json(
      { error: "Could not generate download URL" },
      { status: 500 }
    );
  }

  return NextResponse.redirect(redirectUrl);
}
