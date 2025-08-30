const { defineConfig } = require('@vue/cli-service')
const { publish } = require('electron-builder')
module.exports = defineConfig({
    transpileDependencies: true,
    publicPath: './',
    pluginOptions: {
        electronBuilder: {
            nodeIntegration: true,
            mainProcessFile: 'electron-main.js',
            builderOptions: {
                productName: "ZenTimer",
                appId: "de.lasse27.zen-timer",
                directories: {
                    output: 'dist_electron'
                },
                files: [
                    "**/*"
                ],
                icon: 'public/logo.png',
                extraResources: [
                    {
                        from: "src/assets/sounds/",
                        to: "assets/sounds/",
                        filter: ["**/*"]
                    }
                ],
                win: {
                    target: [
                        {
                            target: "nsis",
                            arch: [
                                "x64",
                                "ia32"
                            ]
                        }
                    ]
                },
                nsis: {
                    oneClick: false,
                    allowToChangeInstallationDirectory: true
                },
                linux: {
                    target: [
                        "AppImage",
                        "deb"
                    ],
                    category: "Utility"
                },
                publish: null
            },
        }
    }
})
