class Page{
    async open (path) {
        return await browser.url(path)
    }

}
module.exports = new Page()