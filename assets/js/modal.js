
document.addEventListener("DOMContentLoaded", function () {
    // Open modal
    document.querySelectorAll("[data-open-modal]").forEach(button => {
        button.addEventListener("click", () => {
            const modalId = button.getAttribute("data-open-modal");
            const modal = document.querySelector(`.modal-overlay[data-modal-id="${modalId}"]`);
            if (modal) modal.style.display = "flex";
        });
    });

    // Close modal by button
    document.querySelectorAll("[data-close-modal]").forEach(button => {
        button.addEventListener("click", () => {
            const modal = button.closest(".modal-overlay");
            if (modal) modal.style.display = "none";
        });
    });

    // Optional: Close modal on background click
    document.querySelectorAll(".modal-overlay[data-close-on-click='true']").forEach(overlay => {
        overlay.addEventListener("click", (e) => {
            if (e.target === overlay) {
                overlay.style.display = "none";
            }
        });
    });
});
