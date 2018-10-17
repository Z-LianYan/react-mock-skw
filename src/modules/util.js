import path from 'path'

const util = {
    formatImageUrl (url, symbol = '.thumb.750_0_c' ) {
        let dirname = path.dirname(url)
        let basename = path.basename(url).split('.')[0]
        let extname = path.extname(url)
        return  dirname + '/' + basename + symbol + extname    
    }
}

export default util