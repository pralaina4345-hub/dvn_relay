export default async function handler(req, res) {
  if (req.method === "OPTIONS") {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    return res.status(200).end();
  }

  try {
    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbyjxkPhF0MtATpcd0abpZXkZQC8-3kNhuupXRHaLlFD8ruN3i5NH2pfg70_q9VQpmog/exec",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(req.body),
      }
    );

    const data = await response.text();

    res.setHeader("Access-Control-Allow-Origin", "*");
    res.status(200).json({ ok: true, data });
  } catch (err) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.status(500).json({ ok: false, error: err.message });
  }
}
