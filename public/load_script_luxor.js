(async () => {
    const response = await fetch("https://raw.githubusercontent.com/SalamanderXing/chatbot_with_icon/main/public/luxor.html");
    const htmlContent = await response.text();
    const scriptTag = document.querySelector("#chatbot_script");
    const body = document.body
    body.insertAdjacentHTML('beforeend', htmlContent);
    const chatbotContainer = document.querySelector("#chatbot_container");
    Array.from(
        chatbotContainer.querySelectorAll("script"),
    ).forEach((oldScript) => {
        const newScript = document.createElement("script");
        if (oldScript.src) {
            newScript.src = oldScript.src;
        } else {
            newScript.textContent = oldScript.textContent;
        }
        oldScript.parentNode.replaceChild(newScript, oldScript);
    });
})();
