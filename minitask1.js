const fs = require('fs').promises
const path = require('node:path')

const listMusic = [
    'Justin Bieber - Love Yourself',
    'Justin Bieber - Never Say Never',
    'Ariana Grande - Almost is Never Enough',
    'Ariana Grande - Honeymoon Avenue',
    'Charlie Puth - Dangerously',
    'Dere - Rubik',
    'Bernadya - Satu Bulan',
    'Bernadya - Untungnya, Hidup Harus Tetap Berjalan',
    'Meghan Trainor - Better When I`m Dancing',
    'Karina - Slow Motion'
]

async function createFile(fileName,content) {
    try {
        const content = ""
        await fs.writeFile(fileName, content)
        console.log('Write File Success')
    } catch (err) {
        console.log(err)
    }
}

listMusic.forEach(item => {
    createFile(path.join("music",`${item}.mp3`))
})

// wFile(listMusic)