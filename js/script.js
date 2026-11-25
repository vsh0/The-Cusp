document.addEventListener("DOMContentLoaded", function () {
    const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]');

    popoverTriggerList.forEach(function (popoverTriggerEl) {
        new bootstrap.Popover(popoverTriggerEl, {
            html: true,
            content: function () {
                const wrapper = document.createElement('div');

                const img = document.createElement('img');
                img.src = popoverTriggerEl.getAttribute('data-img');
                img.alt = popoverTriggerEl.getAttribute('data-bs-title') || '';
                img.className = 'img-fluid rounded mb-2';

                const p = document.createElement('p');
                p.className = 'mb-0';
                p.textContent = popoverTriggerEl.getAttribute('data-bs-content');

                wrapper.append(img, p);
                return wrapper;
            }
        });
    });
});