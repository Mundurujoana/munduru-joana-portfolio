import Script from "next/script";

export default function TawkChat() {
  const propertyId = process.env.NEXT_PUBLIC_TAWK_PROPERTY_ID;
  const widgetId = process.env.NEXT_PUBLIC_TAWK_WIDGET_ID ?? "default";

  if (!propertyId) return null;

  return (
    <Script
      id="tawk-to-chat"
      src={`https://embed.tawk.to/${propertyId}/${widgetId}`}
      strategy="afterInteractive"
    />
  );
}
