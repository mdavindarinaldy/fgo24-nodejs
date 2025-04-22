const fs = require('fs').promises

const moveFile = async (data, destination) => {
    try {
        await fs.rename(data, destination, (err) => {} )
    } catch(err) {
        console.log(err)
    }
}

const newFolder = async (fileName) => {
    try {
        await fs.mkdir(`./music/${fileName}`, (err) => {
            if (err) console.log(err)
        })
    } catch(err) {
        console.log(err)
    }
}

const main = async () => {
    try {
        const listFiles = await fs.readdir('music')
        //console.log(listFiles)
        let folderNames = listFiles.map(item => item.substring(0,item.indexOf(" -")))
        //console.log(folderNames)
        folderNames.forEach(item => newFolder(item))
        listFiles.forEach(item => moveFile(`music/${item}`,`music/${item.substring(0,item.indexOf(" -"))}/${item}`))
    } catch(err) {
        console.log(err)
    }
}

main()

// moveFile("music/Dere - Rubik.mp3","music/Dere/Dere - Rubik.mp3")