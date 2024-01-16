const html = `<div id="mainContainer">
  <div id="chatbotIconContainer">
    <img
      id="chatbotIcon"
      src="https://aikosmos-r7blt2y3oa-ew.a.run.app/public/concierge-1.svg"
      alt="Chatbot"
      width="92px"
      height="92px"
    />
  </div>
  <iframe
    id="chatbotFrame"
    src="https://aikosmos-r7blt2y3oa-ew.a.run.app/"
    frameborder="0"
  ></iframe>
  <div id="animatedMessage">
    <button id="closeAnimatedMessage">&times;</button>
    Ciao, sono Nova! =) <br />
    Come posso aiutarti oggi? Cliccami, rispondo a tutto!
  </div>
  <button id="closeIframe">&times;</button>
  <style>
    #animatedMessage {
      position: fixed;
      bottom: 120px;
      right: 110px;
      border: 1px solid transparent;
      width: 240px;
      height: auto;
      border-radius: 10px 10px 0px 10px;
      box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
      background-color: white;
      padding: 15px 20px 15px 20px;
      font-size: 14px;
      z-index: 98;
      display: none;
      transition: transform 0.3s ease;
      letter-spacing: 0.6px;
      font-weight: 300;
    }
    #closeAnimatedMessage {
      position: absolute;
      top: 10px;
      right: 10px;
      left: auto;
      background-color: transparent;
      border: none;
      font-size: 12px;
      width: 18px;
      height: 18px;
      cursor: pointer;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: rgba(0, 0, 0, 0.08);
      padding-bottom: 4px;
    }
    #closeIframe {
      background-color: #006d66; /* #004485*/
      display: none;
      color: white;
      border: none;
      font-size: 20px;
      cursor: pointer;
      z-index: 100;
      height: 32px;
      width: 32px;
      border-radius: 50%;
      border: solid 1px white;
      padding-top: 2px;
      padding-bottom: 8px;
    }
    #chatbotIconContainer {
      /* this is the container where the icon is located */
      position: fixed;
      bottom: 40px; /* Bottom margin */
      right: 40px; /* Right margin */
      cursor: pointer;
      background-color: white;
      box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 10px;
      border-radius: 50%;
      height: 80px;
      width: 80px;
      display: flex;
      justify-content: center;
      align-items: bottom; /* vertical alignment */
      overflow: hidden;
      z-index: 98;
      padding-top: 10px;
    }
    #chatbotIcon:hover {
      transform: scale(1.06); /* Scale up the element to 110% when hovered */
    }

    #chatbotIcon {
      transition: transform 0.2s ease !important;
      transition: opacity 0.2s ease;
    }

    /* Full-screen style for narrow screens */
    @media (max-width: 568px) {
      #chatbotFrame {
        display: absolute;
        width: 100vw;
        height: 100vh;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
      }
    }
    iframe {
      display: none;
      border: none;
      width: 370px;
      height: 75%;
      position: fixed;
      bottom: 35px;
      right: 25px;
      border-radius: 10px;
      box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
      z-index: 99;
    }
  </style>

  <script>
    const iframe = document.getElementById("chatbotFrame");
    const closeButton = document.getElementById("closeIframe");
    const animatedMessage = document.getElementById("animatedMessage");
    const stupidButton = document.getElementById("closeAnimatedMessage");
    const mobileThreshold = 710;

    // function centerAtTopRight(sourceElement, targetElement) {
    //   const sourceRect = sourceElement.getBoundingClientRect();
    //   const targetRect = targetElement.getBoundingClientRect();

    //   const topRightX = sourceRect.right + window.scrollX;
    //   const topRightY = sourceRect.top + window.scrollY;

    //   targetElement.style.position = "absolute";
    //   targetElement.style.left = topRightX - targetRect.width / 4 + "px";
    //   targetElement.style.top = topRightY - targetRect.height / 4 + "px";
    //   targetElement.style.zIndex = 100;
    // }
    function centerAtTopRight(sourceElement, targetElement) {
      var sourceRect = sourceElement.getBoundingClientRect();
      var targetStyle = window.getComputedStyle(targetElement);

      var targetMarginLeft = parseInt(targetStyle.marginLeft, 10);
      var targetMarginTop = parseInt(targetStyle.marginTop, 10);
      var targetBorderLeft = parseInt(targetStyle.borderLeftWidth, 10);
      var targetBorderTop = parseInt(targetStyle.borderTopWidth, 10);

      var topRightX = sourceRect.right + window.scrollX;
      var topRightY = sourceRect.top + window.scrollY;

      var offsetX = targetBorderLeft + targetMarginLeft;
      var offsetY = targetBorderTop + targetMarginTop;

      targetElement.style.position = "absolute";
      targetElement.style.left =
        topRightX - offsetX - targetElement.offsetWidth / 2 + "px";
      targetElement.style.top =
        topRightY - offsetY - targetElement.offsetHeight / 2 + "px";
    }

    function adjustHeight() {
      if (window.innerWidth <= mobileThreshold) {
        const actualVisibleHeight = window.innerHeight;
        iframe.style.height = actualVisibleHeight + "px";
      }
    }
    const main = () => {
      window.onload = adjustHeight; // Adjust height on page load
      window.onresize = adjustHeight; // Adjust height on window resize
      document
        .getElementById("chatbotIcon")
        .addEventListener("click", function () {
          const isFullScreen = window.innerWidth <= mobileThreshold;
          const isIframeVisible = iframe.style.display === "block";
          iframe.style.display = isIframeVisible ? "none" : "block";
          closeButton.style.display = isIframeVisible ? "none" : "block";
          centerAtTopRight(iframe, closeButton);
        });

      closeButton.addEventListener("click", function () {
        iframe.style.display = "none";
        closeButton.style.display = "none";
      });
      stupidButton.onclick = () => {
        animatedMessage.style.display = "none";
      };
      // ["click", "mousemove", "keypress", "touchstart", "scroll"].forEach(
      //   (event) => document.addEventListener(event, playSound)
      // );
    };
    main();

    // TO PLAY THE NOTIFICATION SOUND
    // const soundUrl =
    //   "https://proxy.notificationsounds.com/notification-sounds/confident-543/download/file-sounds-1083-confident.mp3";
    // const notificationSound = new Audio(soundUrl);
    // let hasPlayed = false;
    // const playSound = () => {
    //   if (!hasPlayed) {
    //     hasPlayed = true;
    //     let startTime = performance.now();
    //     const playSoundAfterDelay = () => {
    //       const elapsedTime = performance.now() - startTime;
    //       if (elapsedTime < 2000) {
    //         animationFrameId = requestAnimationFrame(playSoundAfterDelay);
    //       } else {
    //         const messageDiv = document.getElementById("animatedMessage");
    //         // Start with the div moved to the left outside of the viewport
    //         messageDiv.style.transform = "translateX(-100%)";
    //         messageDiv.style.display = "block";
    //         // Wait for the next browser repaint to ensure 'display' has taken effect
    //         requestAnimationFrame(() => {
    //           // Trigger the slide-in animation
    //           messageDiv.style.transform = "translateX(0)";
    //         });
    //         notificationSound
    //           .play()
    //           .catch((error) =>
    //             console.error("Error playing the sound:", error)
    //           );
    //       }
    //     };
    //     animationFrameId = requestAnimationFrame(playSoundAfterDelay);
    //   }
    // };
  </script>
</div>
`;
document.body.insertAdjacentHTML("beforeend", html);
