document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector("header");
  const navItems = document.querySelectorAll("nav > ul > li");

  navItems.forEach((item) => {
    item.addEventListener("mouseenter", () => {
      const subMenu = item.querySelector("ul");
      if (subMenu) {
        header.style.height = "300px";
      }
    });
    item.addEventListener("mouseleave", () => {
      header.style.height = "110px";
    });
  });

  // 모달 기능
  const modal = document.getElementById("modal");
  const modalTitle = document.getElementById("modal-title");
  const modalText = document.getElementById("modal-text");
  const closeBtn = document.querySelector(".close");
  const noticeLinks = document.querySelectorAll(".notice-section ul li a");

  noticeLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      modalTitle.textContent = "공지사항";
      modalText.textContent = this.textContent;
      modal.style.display = "block";
    });
  });

  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });

  // 메인 슬라이더 기능
  const slides = document.querySelectorAll(".main-slider img");
  let currentSlide = 0;

  function showSlide(index) {
    slides.forEach((slide) => slide.classList.remove("active"));
    slides[index].classList.add("active");
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }

  showSlide(currentSlide);
  setInterval(nextSlide, 3000);

  // 패밀리 사이트 기능 (기존 코드 유지)
});
