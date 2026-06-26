import Link from "next/link";

export default function NotFound() {
  return (
    <html lang="az">
      <body style={{ margin: 0, fontFamily: "system-ui, sans-serif", background: "#050E1F", color: "#fff" }}>
        <div
          style={{
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            padding: "2rem",
          }}
        >
          {/* Glow orb */}
          <div
            style={{
              position: "fixed",
              top: "40%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "500px",
              height: "300px",
              background: "rgba(0,87,255,0.08)",
              filter: "blur(120px)",
              pointerEvents: "none",
            }}
          />

          <div style={{ position: "relative", zIndex: 1 }}>
            <p
              style={{
                fontFamily: "monospace",
                fontSize: "0.65rem",
                letterSpacing: "0.4em",
                textTransform: "uppercase",
                color: "rgba(0,180,255,0.7)",
                marginBottom: "1.5rem",
              }}
            >
              404
            </p>

            <h1
              style={{
                fontSize: "clamp(2rem, 5vw, 3.5rem)",
                fontWeight: 700,
                letterSpacing: "-0.02em",
                marginBottom: "1rem",
                background: "linear-gradient(135deg, #fff 30%, #00B4FF 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Səhifə tapılmadı
            </h1>

            <p
              style={{
                color: "rgba(139,173,212,0.8)",
                fontSize: "1rem",
                marginBottom: "2.5rem",
                maxWidth: "400px",
              }}
            >
              Axtardığınız səhifə mövcud deyil və ya köçürülüb.
            </p>

            <Link
              href="/az"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                background: "#0057FF",
                color: "#fff",
                fontWeight: 600,
                fontSize: "0.8rem",
                letterSpacing: "0.05em",
                textDecoration: "none",
                padding: "0.75rem 2rem",
                boxShadow: "0 0 30px rgba(0,87,255,0.4)",
              }}
            >
              Ana Səhifəyə Qayıt
            </Link>
          </div>
        </div>
      </body>
    </html>
  );
}
