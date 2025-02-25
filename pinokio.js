const path = require('path')
module.exports = {
  version: "3.2",
  title: "wan",
  description: "",
  icon: "icon.png",
  menu: async (kernel, info) => {
    let installed = info.exists("app/env")
    let running = {
      install: info.running("install.js"),
      start: info.running("start.js"),
      update: info.running("update.js"),
      reset: info.running("reset.js")
    }
    if (running.install) {
      return [{
        default: true,
        icon: "fa-solid fa-plug",
        text: "Installing",
        href: "install.js",
      }]
    } else if (installed) {
      if (running.start) {
        let local = info.local("start.js")
        if (local && local.url) {
          return [{
            default: true,
            icon: "fa-solid fa-rocket",
            text: "Open Web UI",
            href: local.url,
          }, {
            icon: 'fa-solid fa-terminal',
            text: "Terminal",
            href: "start.js",
          }]
        } else {
          return [{
            default: true,
            icon: 'fa-solid fa-terminal',
            text: "Terminal",
            href: "start.js",
          }]
        }
      } else if (running.update) {
        return [{
          default: true,
          icon: 'fa-solid fa-terminal',
          text: "Updating",
          href: "update.js",
        }]
      } else if (running.reset) {
        return [{
          default: true,
          icon: 'fa-solid fa-terminal',
          text: "Resetting",
          href: "reset.js",
        }]
      } else {
        return [{
          icon: "fa-solid fa-power-off",
          text: "Text to Video 14B",
          href: "start.js",
          params: {
            file: "t2v_14B_singleGPU.py",
            model: "Wan2.1-T2V-14B" 
          }
        }, {
          icon: "fa-solid fa-power-off",
          text: "Text to Video 1.3B",
          href: "start.js",
          params: {
            file: "t2v_1.3B_singleGPU.py",
            model: "Wan2.1-T2V-1.3B" 
          }
        }, {
          icon: "fa-solid fa-power-off",
          text: "Image to Video 720P",
          href: "start.js",
          params: {
            file: "i2v_14B_singleGPU.py",
            model: "Wan2.1-I2V-14B-720P"
          }
        }, {
          icon: "fa-solid fa-power-off",
          text: "Image to Video 480P",
          href: "start.js",
          params: {
            file: "i2v_14B_singleGPU.py",
            model: "Wan2.1-I2V-14B-480P"
          }
        }, {
          icon: "fa-solid fa-plug",
          text: "Update",
          href: "update.js",
        }, {
          icon: "fa-solid fa-plug",
          text: "Install",
          href: "install.js",
        }, {
          icon: "fa-regular fa-circle-xmark",
          text: "Reset",
          href: "reset.js",
        }]
      }
    } else {
      return [{
        default: true,
        icon: "fa-solid fa-plug",
        text: "Install",
        href: "install.js",
      }]
    }
  }
}
