const UPLOADS_REL = "/wp-content/uploads";

export function normalizeUploadsUrl(input: string) {
  return input.replace(
    /https?:\/\/(?:www\.)?[^/]+\/wp-content\/uploads/gi,
    UPLOADS_REL
  );
}

export function stripWpImageVariants(input: string) {
  return input
    .replace(/-\d+x\d+(?=[^/]*\.(jpg|jpeg|png|webp)\b)/gi, "")
    .replace(/-scaled(?=[^/]*\.(jpg|jpeg|png|webp)\b)/gi, "");
}

export function uploadsToOriginal(input: string) {
  return stripWpImageVariants(normalizeUploadsUrl(input));
}

export function uploadsToThumb(input: string, w = 400, h = 300) {
  const normalized = normalizeUploadsUrl(input);

  // če ima že -WxH nekje v imenu pred končnico, ga pusti (WP varianta obstaja)
  if (/-\d+x\d+(?=[^/]*\.(jpg|jpeg|png|webp)\b)/i.test(normalized)) return normalized;

  // sicer dodaj -400x300 pred končnico
  return normalized.replace(/\.(jpg|jpeg|png|webp)\b/i, `-${w}x${h}.$1`);
}