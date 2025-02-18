export function formatMessageTime(date) {
    return new Date(date)
        .toLocaleString("en-GB", {
            hour: "2-digit",
            minute: "2-digit",
            day: "2-digit",
            month: "short",
            year: "numeric",
            hour12: false,
        })
        .replace(",", " -");
}
