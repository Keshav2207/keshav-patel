/** Emoji */
  const svg = document.getElementById("emojiFace");
  const pupils = document.querySelectorAll(".pupil");

  document.addEventListener("mousemove", (e) => {
    if (!svg) return;

    const pt = svg.createSVGPoint();
    pt.x = e.clientX;
    pt.y = e.clientY;

    const cursor = pt.matrixTransform(svg.getScreenCTM().inverse());

    pupils.forEach(pupil => {
      const cx = Number(pupil.getAttribute("cx"));
      const cy = Number(pupil.getAttribute("cy"));

      const dx = cursor.x - cx;
      const dy = cursor.y - cy;

      const angle = Math.atan2(dy, dx);
      const maxMove = 3;

      const x = Math.cos(angle) * maxMove;
      const y = Math.sin(angle) * maxMove;

      pupil.setAttribute(
        "transform",
        `translate(${x}, ${y})`
      );
    });
  });

  /* Blink */
  setInterval(() => {
    pupils.forEach(p => p.setAttribute("r", "1"));
    setTimeout(() => {
      pupils.forEach(p => p.setAttribute("r", "3"));
    }, 120);
  }, 3000);