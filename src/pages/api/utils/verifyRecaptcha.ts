// src/pages/api/utils/verifyRecaptcha.ts

export async function verifyRecaptcha(token: string): Promise<{ success: boolean; score?: number; error?: string }> {
  if (!token) return { success: false, error: "Captcha token missing" };
  const verifyUrl = "https://www.google.com/recaptcha/api/siteverify";
  const response = await fetch(verifyUrl, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`,
  });
  const data = await response.json();
  if (!data.success || data.score < 0.5) {
    return { success: false, score: data.score, error: "Captcha verification failed. Please try again." };
  }
  return { success: true, score: data.score };
}
