// DO NOT COMMIT REAL KEYS
export const JSONBIN_BASE = "https://api.jsonbin.io/v3";

// Keys loaded from localStorage
export function getHeaders() {
    return {
        "Content-Type": "application/json",
        "X-Master-Key": localStorage.getItem("X_MASTER_KEY"),
        "X-Access-Key": localStorage.getItem("X_ACCESS_KEY")
    };
}
