var HLSServer = require('hls-server')
var http = require('http')
var ffmpegPath = require('@ffmpeg-installer/ffmpeg').path
var ffmpeg = require('fluent-ffmpeg')
ffmpeg.setFfmpegPath(ffmpegPath)

function callback() { 
    console.log("Media conversion finished");
}

ffmpeg('Media/One-Kiss-MP3.mp3', { timeout: 432000 }).addOptions([
    '-profile:v baseline', // For H264 video codec
    '-level 3.0', 
    '-s 640x360',          // Video dimensions
    '-start_number 0',     // First .ts segment index
    '-hls_time 10',        // Segment duration
    '-hls_list_size 0',    // Maxmimum number of playlist entries (0 means all entries)
    '-f hls'               // HLS format
  ]).output('Media/tmp/output.m3u8').on('end', callback).run()

var server = http.createServer()
var hls = new HLSServer(server, {
    path: '/live/hls',     // Client path streaming
    dir: 'Media/tmp/output.m3u8'  // HLS Video path 
})
server.listen(8080)
console.log("Listening port 8080");