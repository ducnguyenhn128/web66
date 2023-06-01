const fs = require('fs')

const filePath = './app.js'

const testFS = () => {
    fs.open(filePath, 'a', (err, fd) => {
        if (err) {
            console.error('Error opening file:', err);
            return;
        }
        const text1 = 'with ReactJS'
        fs.write(fd, text1, (err) => {
            if (err) {
                console.error('Error writing to file:', err);
                return;
              }
        })
        console.log('Text inserted')
    
        fs.close(fd, (err) => {
            if (err) {
              console.error('Error closing file:', err);
            }
        });
    }
)}

const filePath2 = './a2.js'
const testFS2 = () => {
    fs.unlink(filePath2,(err) => {
        if (err) {
            console.error('Error deleting file:', err);
            return;
          }
        
          console.log('File deleted successfully.');
    })
}

testFS2()