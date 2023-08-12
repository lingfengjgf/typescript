import ClipboardJS from "./clipboard.d.ts";

var clipboard = new ClipboardJS(".dom");

clipboard.on("success", (e) => {
  console.log(e.action);
  console.log(e.text);
  console.log(e.trigger);
  e.clearSelection();
});

clipboard.distory();
