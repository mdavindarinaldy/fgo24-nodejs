const url = "https://gist.githubusercontent.com/fulsep/58daee79a699d0fe143da36bbc47e3d6/raw/dcc2e9c970af553011ba6d2d13331e68f5cf42ff/lagu.json"

const fs = require('fs').promises
const path = require('path') 

async function fetching(url) {
    try {
        const result = await fetch(url)
        const data = await result.json()
        let newData = data.map(item => item.split(' - ').reverse().join(' - '))
        newData.forEach(item => {
            createFile(path.join("music",`${item}.mp3`))
        })
    } catch (err) {
        console.log(err)
    }
}

async function createFile(fileName,content) {
    try {
        const content = ""
        await fs.writeFile(fileName, content)
        console.log('Write File Success!')
    } catch (err) {
        console.log(err)
    }
}

fetching(url)