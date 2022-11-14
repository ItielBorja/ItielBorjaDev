var prompt = require('prompt-sync')();
const name = prompt('Define Streaming protocol to use (HLS or RTP):');

if ((name == 'HLS') || (name == 'hls')) 
{
    console.log("HLS protocol defined");
    runHLS();
}
else if ((name == 'RTP') || (name == 'rtp')) 
{
    console.log("RTP defined");
    runRTSP();
}
else
{
    console.log("Streaming protocol not supported");
}

function runHLS()
{
    var HLSServer = require('hls-server')
    var http = require('http')
    var ffmpegPath = require('@ffmpeg-installer/ffmpeg').path
    var ffmpeg = require('fluent-ffmpeg')
    ffmpeg.setFfmpegPath(ffmpegPath)
    
    console.log("Wait for the media conversion to finish");

    function callback() { 
        console.log("Media conversion finished");
        var server = http.createServer()
        var hls = new HLSServer(server, {
            path: '/live/hls',     // Base URI to output HLS streams
            dir: 'Media/hls/output.m3u8'  // Directory that input files are stored
        })
        server.listen(8080)
        console.log("Listening port 8080");
    }

    ffmpeg('Media/One Kiss MP4.mp4', { timeout: 432000 }).addOptions([
        '-profile:v baseline', // For H264 video codec
        '-level 3.0', 
        '-s 640x360',          // Video dimensions
        '-start_number 0',     // First .ts segment index
        '-hls_time 10',        // Segment duration
        '-hls_list_size 0',    // Maxmimum number of playlist entries (0 means all entries)
        '-f hls'               // HLS format
    ]).output('Media/hls/output.m3u8').on('end', callback).run()

}

function runRTSP()
{
    var RtspServer = require('rtsp-streaming-server').default
    var ffmpegPath = require('@ffmpeg-installer/ffmpeg').path
    var ffmpeg = require('fluent-ffmpeg')
    ffmpeg.setFfmpegPath(ffmpegPath)

    console.log("Wait for the media conversion to finish");
    var server = new RtspServer({
        serverPort: 5554,
        clientPort: 6554,
        rtpPortStart: 10000,
        rtpPortCount: 10000
    });
    server.start();

    function callback() { 
        console.log("Media conversion finished");
        console.log("Listening port 6554");
    }
    //ffmpeg '-re', '-i Media/One Kiss MP4.mp4', '-f rtsp', '-muxdelay 0.1', 'rtsp://server/live.sdp';
    ffmpeg('Media/One Kiss MP4.mp4', { timeout: 432000 }).addOptions([
        '-c:v copy',
        '-muxdelay 0.1',
        '-f rtsp',          // RTP format
    ]).output('rtsp://127.0.0.1:5554/live/rtsp.sdp').on('end', callback).run()

}