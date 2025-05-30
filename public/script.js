window.addEventListener("DOMContentLoaded", () => {
  const welcome = document.getElementById("welcome");
  const iconContainer = document.getElementById("iconContainer");
  const icons = ["💖", "💗", "🌸", "🐱", "✨", "🦄", "🐶", "❤️", "🎀"];

  // Tạo icon bay lên liên tục
  const createFloatingIcon = () => {
    const icon = document.createElement("div");
    icon.className = "icon";
    icon.textContent = icons[Math.floor(Math.random() * icons.length)];

    icon.style.left = Math.random() * 100 + "vw";
    icon.style.bottom = "0";

    iconContainer.appendChild(icon);

    // Xoá icon sau khi animation xong
    setTimeout(() => {
      icon.remove();
    }, 3000);
  };

  // Gọi nhiều icon trong 2 giây đầu
  const interval = setInterval(createFloatingIcon, 200);

  // Ẩn màn chào sau 2.5 giây
  setTimeout(() => {
    clearInterval(interval);
    welcome.classList.add("hide");
  }, 3500);
});
