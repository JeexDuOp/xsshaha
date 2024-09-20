const params = new URLSearchParams(document.location.search);
const src = params.get("src");
if (!src || src === "null") {
    return;
}
const isVideo = src.endsWith(".mp4");
if (!isVideo) {
    const script = document.createElement("script");
    document.head.appendChild(script);
    script.onload = () => startScript();
    script.setAttribute("src", src);
}
