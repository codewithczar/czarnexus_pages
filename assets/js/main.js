document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".contact-form");

  if (form) {
    form.addEventListener("submit", async (event) => {
      event.preventDefault();

      const button = form.querySelector("button");
      const status = form.querySelector(".contact-status");
      const originalText = button.textContent;

      button.textContent = "Sending...";
      button.disabled = true;
      status.textContent = "";
      status.classList.remove("is-error");

      try {
        const response = await fetch(form.action, {
          method: "POST",
          body: new FormData(form),
          headers: {
            Accept: "application/json",
          },
        });

        if (!response.ok) {
          throw new Error("Form submission failed");
        }

        form.reset();
        status.textContent = "Thank you! Your message has been sent.";
      } catch (error) {
        status.textContent = "Oops! Something went wrong.";
        status.classList.add("is-error");
      } finally {
        button.textContent = originalText;
        button.disabled = false;
      }
    });
  }
});
