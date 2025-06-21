document.querySelectorAll("a").forEach(el => {
  el.addEventListener("click", e => {
    e.preventDefault(); // Zatrzymaj natychmiastowe przejście

    const href = el.getAttribute("href");

    const navSound = new Audio("assets/sounds/nav.mp3");
    navSound.play();

    // Poczekaj aż dźwięk się zacznie, potem przejdź
    navSound.onended = () => {
      window.location.href = href;
    };

    // Lub przejdź po krótkim opóźnieniu (np. 300ms)
    // setTimeout(() => {
    //   window.location.href = href;
    // }, 300);
  });
});
