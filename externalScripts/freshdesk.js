import Script from "next/script";
import React from "react";

const Freshdesk = () => {
  return (
    <>
      <Script
        src="https://wchat.freshchat.com/js/widget.js"
        strategy="beforeInteractive"
      />
      <Script
        id="script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
        window.fcWidget.init({ token: 'a5a61d71-4e30-413b-881c-4b08dfebf071', host: "https://wchat.freshchat.com" });
        if (window.dataLayer !== undefined) {
          console.log('FreshChat Widget Functions Bindings');
          window.fcWidget.on("widget:loaded", function (resp) {
              window.fcWidget.on("widget:opened", function (resp) {
                  console.log('FreshChat Widget Opened');
                  window.dataLayer.push({ event: "FreshChatEvents", eventCategory: "freshchat", eventAction: 'Widget Open', eventLabel: window.location.href });
              });
              window.fcWidget.on("widget:closed", function (resp) {
                  console.log('FreshChat Widget Closed');
                  window.dataLayer.push({ event: "FreshChatEvents", eventCategory: "freshchat", eventAction: 'Widget Close', eventLabel: window.location.href });
              });
              window.fcWidget.on('message:received', function (resp) {
                  window.dataLayer.push({ event: "FreshChatEvents", eventCategory: "freshchat", eventAction: 'Received', eventLabel: window.location.href });
              });
              window.fcWidget.on('message:sent', function (resp) {
                  if (messagesSent === 0) {
                      window.dataLayer.push({ event: "FreshChatEvents", eventCategory: "freshchat", eventAction: 'Sent first chat', eventLabel: window.location.href });
                  }
                  window.dataLayer.push({ event: "FreshChatEvents", eventCategory: "freshchat", eventAction: 'Sent', eventLabel: window.location.href });
                  messagesSent++;
              });
              window.fcWidget.on('user:statechange', function (resp) {
                  if (resp && resp.data && resp.data.userState === "created") {
                      window.dataLayer.push({ event: "FreshChatEvents", eventCategory: "freshchat", eventAction: 'User Create', eventLabel: window.location.href });
                  }
                  if (resp && resp.data && resp.data.userState === "loaded") {
                      window.dataLayer.push({ event: "FreshChatEvents", eventCategory: "freshchat", eventAction: 'User Loaded', eventLabel: window.location.href });
                  }
                  if (resp && resp.data && resp.data.userState === "identified") {
                      window.dataLayer.push({ event: "FreshChatEvents", eventCategory: "freshchat", eventAction: 'User Identified', eventLabel: window.location.href });
                  }
                  if (resp && resp.data && resp.data.userState === "restored") {
                      window.dataLayer.push({ event: "FreshChatEvents", eventCategory: "freshchat", eventAction: 'User Restored', eventLabel: window.location.href });
                  }
              });
          });
      } else {
          console.log('Freshchat can’t use Google Tag Manager');
      }
      `,
        }}
      />
    </>
  );
};

export default Freshdesk;
