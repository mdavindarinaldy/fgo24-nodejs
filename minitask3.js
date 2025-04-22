const fs = require('fs').promises
// const path = require('path') 

const moveFile = async (data, destination) => {
    try {
        await fs.rename(data, destination)
    } catch(err) {
        console.log(err)
    }
}

const newFolder = async (fileName) => {
    try {
        await fs.mkdir(`./music/${fileName}`)
    } catch(err) {
        if (err.code === 'EEXIST') {
            console.log(`Folder ${fileName} sudah ada`)
        } else {
            console.log('Error membuat folder')
        }
    }
}

const checkFolder = async (data) => {
    try {
        await fs.access(`music/${data}`)
        console.log(`Folder ${data} sudah ada`)
    } catch {
        await newFolder(data)
    }
}

const main = async () => {
    try {
        const listFiles = await fs.readdir('music')
        //console.log(listFiles)
        const mp3Files = listFiles.filter(item => item.endsWith('.mp3'))
        for (let file of mp3Files) {
            let folderName = file.substring(0,file.indexOf(' -'))
            let oldPath = `music/${file}`
            let newPath = `music/${folderName}/${file}`
            await checkFolder(folderName)
            await moveFile(oldPath, newPath)
        }
        //let folderNames = listFiles.map(item => item.substring(0,item.indexOf(" -")))
        //console.log(folderNames)
        // folderNames.forEach(item => {
        //     checkFolder(item)
        // })
        // listFiles.forEach(item => moveFile(`music/${item}`,`music/${item.substring(0,item.indexOf(" -"))}/${item}`))
    } catch(err) {
        console.log('Fungsi utama gagal')
    }
}

main()

// moveFile("music/Dere - Rubik.mp3","music/Dere/Dere - Rubik.mp3")