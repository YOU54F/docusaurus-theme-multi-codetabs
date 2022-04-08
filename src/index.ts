import path from 'path'

export default () => ({
    name: 'docusaurus-theme-code-tab-generator',

    getThemePath() {
        return path.resolve(__dirname, './theme')
    }
})
